(function () {
  "use strict";

  const breakpoint = window.matchMedia("(min-width:768px)");

  let mySwiper;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    mySwiper = new Swiper("#feedback-gallery", {
      navigation: {
        nextEl: ".feedback-gallery--next",
        prevEl: ".feedback-gallery--prev",
      },
      spaceBetween: 16,
    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();
