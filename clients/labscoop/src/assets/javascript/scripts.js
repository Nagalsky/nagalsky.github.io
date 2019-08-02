$(document).ready(function() {
  //Cart slideout panel action
  var cartSlidePanelHolder = $('.slide-panel-cart')
  var cartSlidePanelToggle = $('.slide-panel-toggle')
  var cartSlidePanelMask = $('.slide-panel-mask')
  var cartSlidePanelParent = $('body')
  var cartSlidePanelClose = $('.side-menu-close')
  $(cartSlidePanelToggle).on('click', function() {
    cartSlidePanelHolder.toggleClass('is-opened')
    cartSlidePanelClose.toggleClass('is-active')
    cartSlidePanelMask.toggleClass('is-opened')
    cartSlidePanelParent.toggleClass('modal-open')
  })
  $(cartSlidePanelClose).on('click touchstart', function() {
    cartSlidePanelHolder.removeClass('is-opened')
    cartSlidePanelMask.removeClass('is-opened')
    cartSlidePanelParent.removeClass('modal-open')
    cartSlidePanelClose.removeClass('is-active')
  })

  $(document).on('click touchstart', function(e) {
    if (
      $(e.target).closest(cartSlidePanelHolder).length == 0 &&
      $(e.target).closest(cartSlidePanelToggle).length == 0
    ) {
      cartSlidePanelHolder.removeClass('is-opened')
      cartSlidePanelMask.removeClass('is-opened')
      cartSlidePanelParent.removeClass('modal-open')
      cartSlidePanelClose.removeClass('is-active')
    }
  })

  //Header menu action
  var headerMenu = $('.header-menu')
  var headerMenuToggle = $('.header-menu__toggle')
  var headerMenuClose = $('.header-menu__close')
  var headerMenuParent = $('body')
  headerMenuToggle.on('click', function() {
    headerMenu.toggleClass('is-opened')
    headerMenuParent.toggleClass('overflow-hidden')
  })
  headerMenuClose.on('click', function() {
    headerMenu.removeClass('is-opened')
    headerMenuParent.removeClass('overflow-hidden')
    headerMenuList.find('.is-active').removeClass('is-active')
  })
  $(document).on('click touchstart', function(e) {
    if (
      $(e.target).closest(headerMenu).length == 0 &&
      $(e.target).closest(headerMenuToggle).length == 0
    ) {
      headerMenu.removeClass('is-opened')
      headerMenuParent.removeClass('overflow-hidden')
    }
  })
  $('.dropdown-toggle').on('click', function() {
    headerMenu.removeClass('is-opened')
    headerMenuParent.removeClass('overflow-hidden')
  })

  //Custom scrollbar initial
  //$('.header-menu').mCustomScrollbar();

  //Header menu action
  var headerMenuList = $('.header-menu-list')
  var headerMenuListToggle = $('.header-menu-list__link--has-child')
  var headerSubmenuMenuList = $('.header-menu-sublist')
  var headerSubmenuMenuBtnBack = $('.header-menu-sublist__link--back')
  headerMenuListToggle.on('click', function() {
    $(this)
      .parent()
      .toggleClass('is-active')
      .siblings()
      .removeClass('is-active')
  })
  headerSubmenuMenuBtnBack.on('click', function(e) {
    e.preventDefault()
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass('is-active')
  })

  //Click event to scroll to top
  $('.btn-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800)
    return false
  })
})
