(function () {
  $(".product-gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".product-gallery-thumbnails",
    dots: true,
  });
  $(".product-gallery-thumbnails").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".product-gallery",
    dots: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  });
})();
