$(document).ready(function () {
  //Theme action
  $('body').addClass('theme-normal');
  $('.switch-toggle').on('click', function (e) {
    e.preventDefault();
    if ($('body').hasClass('theme-normal')) {
      $('body').removeClass('theme-normal').addClass('theme-contrast');
    } else {
      $('body').removeClass('theme-contrast').addClass('theme-normal');
    }
  })
});