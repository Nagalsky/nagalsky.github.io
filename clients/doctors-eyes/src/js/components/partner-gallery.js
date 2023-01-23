var swiper = new Swiper("#partner-brand-slider", {
  slidesPerView: 3.5,
  spaceBetween: 32,
  loop: true,
  breakpoints: {
    540: {
      slidesPerView: 6,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 36,
    },
    991: {
      slidesPerView: 8,
      spaceBetween: 48,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 64,
    },
    1400: {
      slidesPerView: 10,
      spaceBetween: 64,
    },
    1700: {
      slidesPerView: 12,
      spaceBetween: 64,
    },
  },
});
