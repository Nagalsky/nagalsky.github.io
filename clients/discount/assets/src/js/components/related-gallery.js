(function () {
  // const swiper = new Swiper(".related-gallery", {
  //   loop: true,
  //   navigation: {
  //     nextEl: ".related-gallery-button--next",
  //     prevEl: ".related-gallery-button--prev",
  //   },
  //   slidesPerView: 2,
  //   spaceBetween: 10,
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 15,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 15,
  //     },
  //     992: {
  //       slidesPerView: 4,
  //       spaceBetween: 15,
  //     },
  //   },
  // });

  $(".related-gallery").slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
})();
