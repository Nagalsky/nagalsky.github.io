$(document).ready(function() {
  //Mobile menu overlay action
  $(".navbar-toggler").on("click", function() {
    $(".navbar-overlay").toggleClass("active");
  });
});

//Initial testimonials gallery
var swiper = new Swiper(".testimonials", {
  slidesPerView: 1,
  //autoHeight: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  spaceBetween: 30,
  pagination: {
    el: ".testimonial-pagination",
    type: "fraction"
  },
  loop: true,
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev"
  }
});
