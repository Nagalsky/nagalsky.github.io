var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  // init: false,
  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev"
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    540: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});
