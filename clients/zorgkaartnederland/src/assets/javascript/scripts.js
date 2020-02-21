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

  $(window).resize(function () {
    searchFieldReplacing();
  });

});