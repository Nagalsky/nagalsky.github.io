(() => {
  const quote = document.querySelector("#reference-quote");
  quote.classList.remove(
    "border-r-dark-500",
    "border-b-dark-500",
    "border-l-dark-500"
  );
  let counter = 0;
  var swiper = new Swiper("#reference-slider", {
    slidesPerView: 1.25,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1280: {
        slidesPerView: 2.2,
        spaceBetween: 32,
      },
      1400: {
        slidesPerView: 3.2,
        spaceBetween: 32,
      },
      2200: {
        slidesPerView: 4.2,
        spaceBetween: 32,
      },
    },
  });

  swiper.on("slideChange", function () {
    counter++;
    if (counter === 4) {
      counter = 0;
    }

    if (counter === 1) {
      quote.classList.add("border-r-dark-500");
    } else if (counter === 2) {
      quote.classList.add("border-b-dark-500");
    } else if (counter === 3) {
      quote.classList.add("border-l-dark-500");
    } else if (counter === 0) {
      quote.classList.remove(
        "border-r-dark-500",
        "border-b-dark-500",
        "border-l-dark-500"
      );
      quote.classList.add("border-t-dark-500");
    }
  });
})();
