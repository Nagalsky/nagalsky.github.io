$(document).ready(function () {
  //Header menu image change on hover
  $('.img-rotate-trigger').hover(
    function () {
      //we get our current filename and use it for the src
      $(this).addClass('hover');
      $(this).parent().parent().find('.img-rotate').attr('src', $(this).data('img'));
    },
    function () {
      $(this).removeClass('hover');
    }
  );

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