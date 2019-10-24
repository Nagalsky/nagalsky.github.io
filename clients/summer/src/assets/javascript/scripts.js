$(document).ready(function () {

  //Menu action
  (function () {
    $menu = $('.menu');
    $body = $('body');
    $menuToggle = $('.menu__toggle');
    $menuClose = $('.menu__close');

    $menuToggle.on('click', function (e) {
      e.preventDefault()
      $menu.toggleClass('is-opened')
      $body.toggleClass('overflow-hidden')
    })
    $menuClose.on('click', function (e) {
      e.preventDefault()
      $menu.removeClass('is-opened')
      $body.toggleClass('overflow-hidden')
    })
  }());


  //Stop play youtube video once modal is closed
  $('.modal').on('hide.bs.modal', function () {
    var memory = $(this).html();
    $(this).html(memory);
  })




  $('.wrapper').css({
    minHeight: $('html').outerHeight()
  });


})

$(window).on('resize', function () {
  $('.wrapper').css({
    minHeight: $('html').outerHeight()
  });
});