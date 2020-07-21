$(document).ready(function() {
  //Initial sticky header
  //$(".header").stick_in_parent();
  $(window).scroll(function() {
    var sticky = $(".header"),
      scroll = $(window).scrollTop();

    if (scroll >= 1) sticky.addClass("header--has-shadow");
    else sticky.removeClass("header--has-shadow");
  });

  //Select all checkboxes in cart
  $('[data-select="all"]').change(function() {
    var checkboxes = $(this)
      .closest(".cart-box")
      .find(":checkbox");
    checkboxes.prop("checked", $(this).is(":checked"));
  });

  //Prevent autoclose cart dropdown menu
  $(".cart-bar__dropdown-menu").on("click", function(e) {
    e.stopPropagation();
  });

  //Close dropdown
  $(".btn-dropdown-close").on("click", function() {
    $(this)
      .parent()
      .removeClass("show")
      .removeAttr("style x-placement");
    $(this)
      .parent()
      .parent()
      .removeClass("show");
  });

  //Add unscroll class for body once you call bootstrap modal from another modal
  $(document).on("hidden.bs.modal", function(event) {
    if ($(".modal:visible").length) {
      $("body").addClass("modal-open");
    }
  });

  //Initial swiper product gallery
  function initSwiperProductGallery() {
    var galleryThumbs = new Swiper(".product-gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4.5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        768: {
          slidesPerView: 7,
          spaceBetween: 10
        }
      }
    });
    var galleryTop = new Swiper(".product-gallery", {
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }

  initSwiperProductGallery();

  //Init bootstrap popover
  $('[data-toggle="popover"]').popover();
});
