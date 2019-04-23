$(document).ready(function() {
  //Menu action
  var $menu = $('#menu'),
    $menuToggle = $('.header__menu-toggle'),
    $menuClose = $('.menu__close')
  $($menuToggle).on('click', function(e) {
    e.preventDefault()
    $menu.toggleClass('active')
  })
  $($menuClose).on('click touchstart', function(e) {
    e.preventDefault()
    $menu.removeClass('active')
  })
})
