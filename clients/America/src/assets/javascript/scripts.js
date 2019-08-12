$(document).ready(function () {
  //Mobile menu action
  var $menu = $('.header__right')
  var $menuToggle = $('.header__menu-toggle')
  var $menuClose = $('.header__menu-close')
  var $menuMask = $('.header__mask')
  $menuToggle.on('click', function (e) {
    e.preventDefault()
    $menu.toggleClass('is-menu-opened')
    $menuMask.toggleClass('is-active')
  })

  $menuClose.on('click', function (e) {
    e.preventDefault()
    $menu.removeClass('is-menu-opened')
    $menuMask.removeClass('is-active')
  })

  $(document).on('click touchstart', function (e) {
    if (
      $(e.target).closest($menu).length == 0 &&
      $(e.target).closest($menuToggle).length == 0
    ) {
      $menu.removeClass('is-menu-opened')
      $menuMask.removeClass('is-active')
    }
  })

  //Initial slick gallery
  $('.gallery').slick();
})