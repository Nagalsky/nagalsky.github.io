var swiper = new Swiper("#reference-slider", {
  slidesPerView: 1.4,
  spaceBetween: 32,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1280: {
      slidesPerView: 2.2,
      spaceBetween: 32,
    },
  },
});
