var swiper = new Swiper("#about-us-slider", {
  slidesPerView: 1.2,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".about-us-slider-button-next",
    prevEl: ".about-us-slider-button-prev",
  },

  breakpoints: {
    540: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 32,
    },
  },
});
