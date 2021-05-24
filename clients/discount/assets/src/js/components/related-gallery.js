(function () {
  const swiper = new Swiper(".related-gallery", {
    loop: true,
    navigation: {
      nextEl: ".related-gallery-button--next",
      prevEl: ".related-gallery-button--prev",
    },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
})();
