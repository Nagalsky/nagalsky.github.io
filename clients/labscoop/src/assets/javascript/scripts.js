$(document).ready(function () {
  //Cart slideout panel action
  var cartSlidePanelHolder = $('.slide-panel-cart');
  var cartSlidePanelToggle = $('.slide-panel-toggle');
  var cartSlidePanelMask = $('.slide-panel-mask');
  var cartSlidePanelParent = $('body');
  $(cartSlidePanelToggle).on('click', function () {
    cartSlidePanelHolder.toggleClass('is-opened');
    cartSlidePanelMask.toggleClass('is-opened');
    cartSlidePanelParent.toggleClass('modal-open');
  });
  $('.side-menu-close').on('click touchstart', function () {
    cartSlidePanelHolder.removeClass('is-opened');
    cartSlidePanelMask.removeClass('is-opened');
    cartSlidePanelParent.removeClass('modal-open');
  });

  $(document).on("click touchstart", function (e) {
    if (
      $(e.target).closest(cartSlidePanelHolder).length == 0 &&
      $(e.target).closest(cartSlidePanelToggle).length == 0
    ) {
      cartSlidePanelHolder.removeClass('is-opened');
      cartSlidePanelMask.removeClass('is-opened');
      cartSlidePanelParent.removeClass('modal-open');
    }
  });


})