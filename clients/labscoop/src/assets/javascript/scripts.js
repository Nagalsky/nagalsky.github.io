$(document).ready(function () {
  //Lock vertical scroll while header menu and cart clide out panel is opened
  var $docEl = $('html, body'),
    $wrap = $('.content'),
    scrollTop;

  var overlayClose = function () {
    $.unlockBody();
  }
  var overlayOpen = function () {
    $.lockBody();
  }

  $.lockBody = function () {
    if (window.pageYOffset) {
      scrollTop = window.pageYOffset;

      $wrap.css({
        top: -(scrollTop)
      });
    }

    $docEl.css({
      height: "100%",
      overflow: "hidden"
    });
  }

  $.unlockBody = function () {
    $docEl.css({
      height: "",
      overflow: ""
    });

    $wrap.css({
      top: ''
    });

    window.scrollTo(0, scrollTop);
    window.setTimeout(function () {
      scrollTop = null;
    }, 0);

  }







  //Cart slideout panel action

  var cartSlidePanelHolder = $('.slide-panel-cart')
  var cartSlidePanelToggle = $('.slide-panel-toggle')
  var cartSlidePanelMask = $('.slide-panel-mask')
  var cartSlidePanelClose = $('.side-menu-close')
  $(cartSlidePanelToggle).on('click', function (e) {
    e.preventDefault()
    cartSlidePanelHolder.toggleClass('is-opened')
    cartSlidePanelClose.toggleClass('is-active')
    cartSlidePanelMask.toggleClass('is-opened')
    overlayOpen();
  })
  $(cartSlidePanelClose).on('click touchstart', function () {
    cartSlidePanelHolder.removeClass('is-opened')
    cartSlidePanelMask.removeClass('is-opened')
    cartSlidePanelClose.removeClass('is-active')
    overlayClose();

  })

  $(document).on('click touchstart', function (e) {


    if (
      $(e.target).closest(cartSlidePanelHolder).length == 0 &&
      $(e.target).closest(cartSlidePanelToggle).length == 0
    ) {
      cartSlidePanelHolder.removeClass('is-opened')
      cartSlidePanelMask.removeClass('is-opened')
      cartSlidePanelClose.removeClass('is-active')
      overlayClose();
    }
  })

  //Header menu action
  var headerMenu = $('.header-menu')
  var headerMenuToggle = $('.header-menu__toggle')
  var headerMenuClose = $('.header-menu__close')
  headerMenuToggle.on('click', function () {
    headerMenu.toggleClass('is-opened')
  })
  headerMenuClose.on('click', function () {
    headerMenu.removeClass('is-opened')
    headerMenuList.find('.is-active').removeClass('is-active')
  })
  $('.dropdown-toggle').on('click', function () {
    headerMenu.removeClass('is-opened')
  })

  //Custom scrollbar initial
  //$('.header-menu').mCustomScrollbar();

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
})