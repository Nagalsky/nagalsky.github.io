$(document).ready(function () {

  //Menu action
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

  //Stop youtube video once modal is active
  $('.modal').on('hidden.bs.modal', function () {
    $(".modal iframe").attr("src", $(".modal iframe").attr("src"));
  });


  $('.wrapper').css({
    minHeight: $('html').outerHeight()
  });


})

$(window).on('resize', function () {
  $('.wrapper').css({
    minHeight: $('html').outerHeight()
  });
});