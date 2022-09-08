(() => {
  const swiper = new Swiper(".dental-care-gallery", {
    on: {
      init: (el) => {
        el.$el[0].classList.remove("hidden");
      },
    },
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    loop: true,
    initialSlide: 2,
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
})();
