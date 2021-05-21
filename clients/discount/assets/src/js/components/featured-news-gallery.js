(function () {
  const swiper = new Swiper(".featured-news-gallery", {
    loop: true,
    navigation: {
      nextEl: ".featured-news-gallery-button--next",
      prevEl: ".featured-news-gallery-button--prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})();
