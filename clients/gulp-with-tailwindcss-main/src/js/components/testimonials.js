(() => {
  const el = "#testimonials-gallery";
  const swiper = new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 58,
      },
    },
  });
})();
