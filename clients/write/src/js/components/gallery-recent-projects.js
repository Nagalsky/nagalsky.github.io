(() => {
  var swiper = new Swiper("#gallery-recent-projects", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 16,
    slidesPerView: 1.3,
    loop: true,
    navigation: {
      nextEl: ".gallery-button-next",
      prevEl: ".gallery-button-prev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      560: {
        spaceBetween: 32,
        centeredSlides: true,
        slidesPerView: 2.8,
      },
      1199: {
        spaceBetween: 32,
        centeredSlides: true,
        slidesPerView: 2.2,
      },
      2000: {
        spaceBetween: 32,
        centeredSlides: true,
        slidesPerView: 4.2,
      },
    },
  });
})();
