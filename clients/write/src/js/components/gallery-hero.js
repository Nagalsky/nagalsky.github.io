(() => {
  var swiper = new Swiper("#gallery-hero-thumb", {
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  var swiper2 = new Swiper("#gallery-hero", {
    loop: true,
    effect: "fade",
    slidersPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
  });
})();
