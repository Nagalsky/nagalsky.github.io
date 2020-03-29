$(document).ready(function () {
  //Theme action
  $('body').addClass('theme-normal');
  $('.switch-toggle').on('click', function (e) {
    e.preventDefault();
    if ($('body').hasClass('theme-normal')) {
      $('.switch-toggle').html('Normaal contrast');
      $('body').removeClass('theme-normal').addClass('theme-contrast');
    } else {
      $('body').removeClass('theme-contrast').addClass('theme-normal');
      $('.switch-toggle').html('Hoog contrast');
    }
  })

  //Font size switch action
  $('.fs-switch__btn--small').on('click', function (e) {
    e.preventDefault();
    $('body, html').addClass('fs-14');
  })
  $('.fs-switch__btn--large').on('click', function (e) {
    e.preventDefault();
    $('body, html').removeClass('fs-14');
  })

  function searchFieldReplacing() {
    if ($(window).width() < 768) {
      $('#search_field_holder_desktop .search-field').appendTo($('#search_field_holder_mobile'));
    } else {
      $('#search_field_holder_mobile .search-field').appendTo($('#search_field_holder_desktop'));
    }
  }

  searchFieldReplacing();



  //Initial bootstrap popover
  $('[data-toggle="popover"]').popover()


  //Initial sticky to top element
  $(".filter-header").stick_in_parent({
    parent: 'body',
    offset_top: 51
  });

  //Open/close mobile filters/blocks
  $('[data-toggle-element]').on('click', function (e) {
    e.preventDefault()
    var element = $(this).attr('data-toggle-element');
    $('[data-element = ' + element + ']').addClass('is-opened');
    $('body').addClass('scroll-lock')
  });

  $('[data-close-element]').on('click', function (e) {
    e.preventDefault()
    var element = $(this).attr('data-close-element');
    $('[data-element = ' + element + ']').removeClass('is-opened');
    $('body').removeClass('scroll-lock')
  });

  //Modal filter search
  $("#modal-search-field").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#modal-search-list *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  //Init select2
  $('.select2').select2({
    theme: "bootstrap",
    containerCssClass: "custom custom-select",
    dropdownCssClass: 'custom input',
  });

  //Open/close mobile collapsed text
  $('[data-collapse-open]').on('click', function (e) {
    e.preventDefault()
    $(this).parent().remove()
    var element = $(this).attr('data-collapse-open');
    $('[data-collapse-element = ' + element + ']').addClass('is-opened');
  });

  function collapseTextBoxHeight() {
    var collapseTextBox = $('[data-collapse-element]').height();

    if (collapseTextBox > 60) {
      $('.text-collpase').addClass('is-collapsed');
      $(".text-collapse-holder-btn").addClass('is-shown');
    } else {
      $('.text-collpase').removeClass('is-collapsed');
      $(".text-collapse-holder-btn").removeClass('is-shown');
    }
  }

  collapseTextBoxHeight()




  $(window).resize(function () {
    searchFieldReplacing();
  });
});