(() => {
  var swiper = new Swiper("#gallery-testimonials", {
    spaceBetween: 16,
    loop: true,
    effect: "fade",
    slidersPerView: 1,
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
})();
