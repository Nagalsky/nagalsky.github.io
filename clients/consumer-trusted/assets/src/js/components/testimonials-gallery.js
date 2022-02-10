var swiper = new Swiper(".testimonials-gallery", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  initialSlide: 4,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
});
