$(document).ready(function () {

  //Menu action
  $menu = $('.menu');
  $menuToggle = $('.menu__toggle');
  $menuClose = $('.menu__close');

  $menuToggle.on('click', function (e) {
    e.preventDefault()
    $menu.toggleClass('is-opened')
  })
  $menuClose.on('click', function (e) {
    e.preventDefault()
    $menu.removeClass('is-opened')
  })

})