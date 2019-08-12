$(document).ready(function () {
  //Cart slideout panel action

  var cartSlidePanelHolder = $('.slide-panel-cart')
  var cartSlidePanelToggle = $('.slide-panel-toggle')
  var cartSlidePanelMask = $('.slide-panel-mask')
  var cartSlidePanelClose = $('.side-menu-close')
  var body = $('body')
  $(cartSlidePanelToggle).on('click', function (e) {
    e.preventDefault()
    cartSlidePanelHolder.toggleClass('is-opened')
    cartSlidePanelClose.toggleClass('is-active')
    cartSlidePanelMask.toggleClass('is-opened')
    body.toggleClass('modal-open')
  })
  $(cartSlidePanelClose).on('click touchstart', function () {
    cartSlidePanelHolder.removeClass('is-opened')
    cartSlidePanelMask.removeClass('is-opened')
    cartSlidePanelClose.removeClass('is-active')
    body.removeClass('modal-open')
  })


  $(document).on('click touchstart', function (e) {
    if (
      $(e.target).closest(cartSlidePanelHolder).length == 0 &&
      $(e.target).closest(cartSlidePanelToggle).length == 0
    ) {
      cartSlidePanelHolder.removeClass('is-opened')
      cartSlidePanelMask.removeClass('is-opened')
      cartSlidePanelClose.removeClass('is-active')
      body.removeClass('modal-open')
    }
  })

  //Header menu action
  var headerMenu = $('.header-menu')
  var headerMenuToggle = $('.header-menu__toggle')
  var headerMenuClose = $('.header-menu__close')
  headerMenuToggle.on('click', function () {
    headerMenu.toggleClass('is-opened')
    $('body').toggleClass('overflow-hidden')
  })
  headerMenuClose.on('click', function () {
    headerMenu.removeClass('is-opened')
    headerMenuList.find('.is-active').removeClass('is-active')
    $('body').removeClass('overflow-hidden')
  })
  $('.dropdown-toggle').on('click', function () {
    headerMenu.removeClass('is-opened')
    $('body').removeClass('overflow-hidden')
  })

  //Custom scrollbar initial
  $('.filter').mCustomScrollbar();

  //Header mobile menu action
  var headerMenuList = $('.header-menu-list')
  var headerMenuListToggle = $('.header-menu-list__link--has-child')
  var headerSubmenuMenuList = $('.header-menu-sublist')
  var headerSubmenuMenuBtnBack = $('.header-menu-sublist__link--back')
  headerMenuListToggle.on('click', function () {
    $(this)
      .parent()
      .toggleClass('is-active')
      .siblings()
      .removeClass('is-active')
  })
  headerSubmenuMenuBtnBack.on('click', function (e) {
    e.preventDefault()
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass('is-active')
  })

  //Click event to scroll to top
  $('.btn-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800)
    return false
  })

  //Initial bootstrap popover
  $('[data-toggle="popover"]').popover()

  //Initial custom bootstrap select
  $('.selectpicker').selectpicker();
})