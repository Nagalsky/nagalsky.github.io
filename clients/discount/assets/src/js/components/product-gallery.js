(function () {
  const swiper = new Swiper(".product-gallery-thumbnails", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  const swiper2 = new Swiper(".product-gallery", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})();
