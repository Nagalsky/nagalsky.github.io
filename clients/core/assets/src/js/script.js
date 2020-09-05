//Swiper gallery
var swiper = new Swiper(".gallery", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});

//Swiper hero gallery
var swiper = new Swiper(".hero-gallery", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".hero-gallery__button-next",
    prevEl: ".hero-gallery__button-prev"
  },
  autoHeight: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});
