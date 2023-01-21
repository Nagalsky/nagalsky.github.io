var swiper = new Swiper("#product-slider", {
  slidesPerView: 1.2,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".product-slider-button-next",
    prevEl: ".product-slider-button-prev",
  },

  breakpoints: {
    1280: {
      slidesPerView: 1.8,
      spaceBetween: 32,
    },
  },
});
