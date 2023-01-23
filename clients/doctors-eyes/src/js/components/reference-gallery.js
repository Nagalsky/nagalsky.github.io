var swiper = new Swiper("#reference-slider", {
  slidesPerView: 1.25,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    1280: {
      slidesPerView: 2.2,
      spaceBetween: 32,
    },
  },
});
