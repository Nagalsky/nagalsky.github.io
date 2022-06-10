const options = {
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
}

const swiper = new Swiper(".swiper-1", {
  ...options,

  navigation: {
    nextEl: ".btn-next-1",
    prevEl: ".btn-prev-1",
  },
});
const swiper2 = new Swiper(".swiper-2", {
  ...options,

  navigation: {
    nextEl: ".btn-next-2",
    prevEl: ".btn-prev-2",
  },
});
const swiper3 = new Swiper(".swiper-3", {
  ...options,

  navigation: {
    nextEl: ".btn-next-3",
    prevEl: ".btn-prev-3",
  },
});
const swiper4 = new Swiper(".swiper-4", {
  ...options,

  navigation: {
    nextEl: ".btn-next-4",
    prevEl: ".btn-prev-4",
  },
});
const swiper5 = new Swiper(".swiper-5", {
  ...options,

  navigation: {
    nextEl: ".btn-next-5",
    prevEl: ".btn-prev-5",
  },
});
const swiper6 = new Swiper(".swiper-6", {
  ...options,

  navigation: {
    nextEl: ".btn-next-6",
    prevEl: ".btn-prev-6",
  },
});
const swiper7 = new Swiper(".swiper-7", {
  ...options,

  navigation: {
    nextEl: ".btn-next-7",
    prevEl: ".btn-prev-7",
  },
});
const swiper8 = new Swiper(".swiper-8", {
  ...options,

  navigation: {
    nextEl: ".btn-next-8",
    prevEl: ".btn-prev-8",
  },
});
const swiper9 = new Swiper(".swiper-9", {
  ...options,

  navigation: {
    nextEl: ".btn-next-9",
    prevEl: ".btn-prev-9",
  },
});
