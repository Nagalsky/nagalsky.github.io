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

  function searchFieldReplacing() {
    if ($(window).width() < 768) {
      $('#search_field_holder_desktop .search-field').appendTo($('#search_field_holder_mobile'));
    } else {
      $('#search_field_holder_mobile .search-field').appendTo($('#search_field_holder_desktop'));
    }
  }

  searchFieldReplacing();



  //Read more initial
  $('.mobile-collpase').readmore({
    split_word: true,
    substr_len: 140,
    more_link: '<a class="readm-more">Lees meer</a>'
  });

  //Initial bootstrap popover
  function bootstrapPopovers() {
    if ($(window).width() < 768) {
      $('[data-toggle="popover"]').popover('disable');
    } else {
      $('[data-toggle="popover"]').popover('enable')
    }
  }

  $('[data-toggle="popover"]').popover()


  //Initial sticky to top element
  $(".filter-header").stick_in_parent({
    parent: 'body',
    offset_top: 51
  });


  $(window).resize(function () {
    searchFieldReplacing();
    bootstrapPopovers();
  });
});