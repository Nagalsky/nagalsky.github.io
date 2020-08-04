$(document).ready(function() {
  //Theme action
  $('.switch-toggle').on('click', function(e) {
    e.preventDefault()
    $('.navbar-collapse').removeClass('show')
    if ($('body').hasClass('theme-normal')) {
      $('.switch-toggle').html('Normaal contrast')
      $('body')
        .removeClass('theme-normal')
        .addClass('theme-contrast')
    } else {
      $('body')
        .removeClass('theme-contrast')
        .addClass('theme-normal')
      $('.switch-toggle').html('Hoog contrast')
    }
  })

  function m() {
    var e = '16px'
    $('.fs-switch__btn--large').click(function(t) {
      ;(e = '16px' === e || '18px' === e ? '18px' : '16px'),
        (document.querySelector(':root').style.fontSize = e),
        (document.querySelector('body').style.fontSize = e)
    }),
      $('.fs-switch__btn--small').click(function(t) {
        ;(e = '16px' === e || '14px' === e ? '14px' : '16px'),
          (document.querySelector(':root').style.fontSize = e),
          (document.querySelector('body').style.fontSize = e)
      })
  }

  m()

  function searchFieldReplacing() {
    if ($(window).width() < 768) {
      $('#search_field_holder_desktop .search-field').appendTo(
        $('#search_field_holder_mobile')
      )
    } else {
      $('#search_field_holder_mobile .search-field').appendTo(
        $('#search_field_holder_desktop')
      )
    }
  }

  searchFieldReplacing()

  //Initial bootstrap popover
  $('[data-toggle="popover"]').popover()

  //Initial sticky to top element
  $('.filter-header').stick_in_parent({
    parent: 'body',
    offset_top: 51,
  })

  //Open/close mobile filters/blocks
  $('[data-toggle-element]').on('click', function(e) {
    e.preventDefault()
    var element = $(this).attr('data-toggle-element')
    $('[data-element = ' + element + ']').addClass('is-opened')
    $('body').addClass('scroll-lock')
  })

  $('[data-close-element]').on('click', function(e) {
    e.preventDefault()
    var element = $(this).attr('data-close-element')
    $('[data-element = ' + element + ']').removeClass('is-opened')
    $('body').removeClass('scroll-lock')
  })

  //Modal filter search
  $('.search-field').on('keyup', function() {
    var value = $(this)
      .val()
      .toLowerCase()
    tmpval = $(this).val()
    if (tmpval == '') {
      $(this)
        .parent()
        .addClass('empty')
      $(this)
        .parent()
        .removeClass('not-empty')
    } else {
      $(this)
        .parent()
        .addClass('not-empty')
      $(this)
        .parent()
        .removeClass('empty')
    }
    $('.search-list *').filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      )
    })
  })

  $('.btn-search-field-clear').on('click', function(e) {
    e.preventDefault()
    $('.search-field').val('')
    $('.search-field')
      .parent()
      .removeClass('not-empty')
      .addClass('empty')
    $('.search-list *').removeAttr('style')
  })

  //Init select2
  $('select.select2').select2({
    theme: 'bootstrap',
    containerCssClass: 'custom custom-select',
    dropdownCssClass: 'custom input',
  })

  $('select.select2multi').select2({
    theme: 'bootstrap',
    containerCssClass: 'custom custom-select',
    dropdownCssClass: 'custom input select2-multi-menu',
  })

  //Open/close mobile collapsed text
  $('[data-collapse-open]').on('click', function(e) {
    e.preventDefault()
    $(this)
      .parent()
      .toggleClass('is-open')
    var element = $(this).attr('data-collapse-open')
    $('[data-collapse-element = ' + element + ']').toggleClass(
      'is-opened'
    )
  })

  function collapseTextBoxHeight() {
    var collapseTextBox = $('[data-collapse-element]').height()

    if (collapseTextBox > 60) {
      $('.text-collpase').addClass('is-collapsed')
      $('.text-collapse-holder-btn').addClass('is-shown')
    } else {
      $('.text-collpase').removeClass('is-collapsed')
      $('.text-collapse-holder-btn').removeClass('is-shown')
    }
  }

  collapseTextBoxHeight()

  //Person profile form add fields
  function personProfileFormAddFields() {
    var collapseBtn = $('[data-addfield="collection"]')
    var collapseHolder = $('.bc-collection')
    var i = 0

    collapseBtn.click(function() {
      $('<div />', {
        id: 'user_person_profile_handigeLinks_links_' + i,
      })
        .append(
          $(
            `<div class="form-group">
              <div class="row">
                <div class="col-md-9">
                  <div class="form-group">
                    <div class="row">
                      <label for="user_person_profile_handigeLinks_links_name_${i}" class="col-md-3 col-form-label"><b>Naam</b></label>
                      <div class="col-md-9">
                          <input type="text" id="user_person_profile_handigeLinks_links_name_${i}" class="form-control form-control-regular">
                          <p class="form-text text-wrap">Bijv. ALS de wereld uit</p>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <label for="user_person_profile_handigeLinks_links_link_${i}" class="col-md-3 col-form-label"><b>Link</b></label>
                      <div class="col-md-9">
                          <input type="text" id="user_person_profile_handigeLinks_links_link_${i}" class="form-control form-control-regular">
                          <p class="form-text text-wrap">Bijv. https://www.zorgkaartnederland.nl/blog/als-de-wereld-uit</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <button type="button" class="btn btn-danger font-base-regular" data-removefield="collection">Verwijderen</button>
                </div>
              </div>
            </div>`
          )
        )
        .appendTo(collapseHolder)
      i++
    })
  }

  personProfileFormAddFields()

  function deletePersonProfileFormAddFields() {
    var btnDelete = $('[data-removefield="collection"]')

    $(document).on('click', btnDelete, function(event) {
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .remove()
    })
  }

  deletePersonProfileFormAddFields()

  //Toevoegene form add fields
  function emailadressenFormAddFields() {
    var collapseBtn = $('[data-addfield="e-mailadressen"]')
    var collapseHolder = $('.bc-collection')
    var i = 1

    collapseBtn.click(function() {
      $('<div />', {
        id: 'email_adressen_form_add_fields' + i,
      })
        .append(
          $(
            `
              <div class="form-group row">
                <label class="col-sm-3 col-form-label font-base-regular"
                    for="form-field-emailadres-${i}">E-mailadres</label>
                <div class="col-sm-9">
                    <div class="d-flex">
                        <input type="email" class="form-control form-control-regular flex-fill"
                            id="form-field-emailadres-${i}">

                        <button type="button" class="btn btn-theme flex-shrink-0 ml-3">Verwijderen
                            <i class="icon-chevron-right ml-3"></i></button>
                    </div>
                </div>
              </div>
            `
          )
        )
        .appendTo(collapseHolder)
      i++
    })
  }

  emailadressenFormAddFields()

  // function selectAllCheckboxes() {
  //   var clicked = false
  //   $('.select-all__toggle').on('click', function(e) {
  //     e.preventDefault()
  //     $(this)
  //       .parent()
  //       .find('.custom-control-input')
  //       .prop('checked', !clicked)
  //     clicked = !clicked
  //   })
  // }

  // selectAllCheckboxes()

  function initSelectAll() {
    function addHandler() {
      var trigger = $(this)
      var options = trigger
        .parent()
        .next()
        .find('.custom-checkbox input')

      if (trigger.attr('data-checked') == 1) {
        trigger.attr('data-checked', 0)
        options.each(function() {
          $(this).prop('checked', false)
        })
      } else {
        trigger.attr('data-checked', 1)
        options.each(function() {
          $(this).prop('checked', true)
        })
      }
    }

    $('.select-all__toggle').each(function() {
      $(this).click(addHandler)
    })

    $('#select_all').click(addHandler)

    var clicked = false
    $('[data-select="childs"]').on('click', function() {
      $(this)
        .parent()
        .next('div')
        .find('input[type=checkbox]')
        .not(this)
        .prop('checked', this.checked)
      clicked = !clicked
    })
  }

  initSelectAll()

  // selectAllCheckboxes()

  function initUnSelectAll() {
    function addUnselectHandler() {
      var trigger = $(this)
      var options = trigger
        .parent()
        .next()
        .find('.custom-checkbox input')

      options.each(function() {
        $(this).prop('checked', false)
      })
    }

    $('[data-uncheck').each(function() {
      $(this).click(addUnselectHandler)
    })
    $('[data-uncheck').on('click', function() {
      $(this)
        .parent()
        .find('.select-all__toggle')
        .attr('data-checked', 0)
    })
  }

  initUnSelectAll()

  //Init datetimepicker
  $('.datetimepicker').datetimepicker()

  $('.datetimepicker-clear-btn').click(function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .find('.datetimepicker')
      .val('')
      .datetimepicker('update')
  })

  //Disable select2 once checkbox is active
  $('[data-disable="select2"]').on('click', function() {
    var trigger = $(this)
    if (trigger.attr('data-checked') == 1) {
      trigger.attr('data-checked', 0)
      $(this)
        .parent()
        .parent()
        .parent()
        .find('.select2multi')
        .prop('disabled', false)
    } else {
      trigger.attr('data-checked', 1)
      $(this)
        .parent()
        .parent()
        .parent()
        .find('.select2multi')
        .prop('disabled', true)
    }
  })

  //Disable all fields once checkbox is active
  $('[data-disable-all-fields]').on('click', function() {
    var trigger = $(this)
    if (trigger.attr('data-checked') == 1) {
      trigger.attr('data-checked', 0)
      $(this)
        .closest('.disable-all-fields')
        .find('.form-control')
        .prop('disabled', false)
      $(this)
        .closest('.disable-all-fields')
        .find('.custom-control-input')
        .attr('data-checked', 0)
        .prop('checked', false)
    } else {
      trigger.attr('data-checked', 1)
      $(this)
        .closest('.disable-all-fields')
        .find('.form-control')
        .prop('disabled', true)
      $(this)
        .closest('.disable-all-fields')
        .find('.custom-control-input')
        .attr('data-checked', 1)
        .prop('checked', true)
    }
  })

  //Disable/Enable row all fields once checkbox is active
  $('[data-check-row]').on('click', function() {
    var trigger = $(this)
    if (trigger.attr('data-checked') == 1) {
      trigger.attr('data-checked', 0)
      $(this)
        .closest('[data-parent]')
        .find('.form-control')
        .prop('disabled', false)
    } else {
      trigger.attr('data-checked', 1)
      $(this)
        .closest('[data-parent]')
        .find('.form-control')
        .prop('disabled', true)
    }
  })

  $(window).resize(function() {
    searchFieldReplacing()
  })
})
