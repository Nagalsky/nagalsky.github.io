const swiper = () => {
  let swiper = document.querySelectorAll(".swiper");
  let prevArrow = document.querySelectorAll(".btn-prev");
  let nextArrow = document.querySelectorAll(".btn-next");
  swiper.forEach((slider, index) => {
    const swiper = new Swiper(slider, {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 4,
        },
        1199: {
          slidesPerView: 5,
        },
      },
      navigation: {
        nextEl: nextArrow[index],
        prevEl: prevArrow[index],
      },
    });

    document.querySelector(".swiper-holder").classList.remove("opacity-0");

    console.log('ololo')
  });
};
window.addEventListener("load", swiper);
