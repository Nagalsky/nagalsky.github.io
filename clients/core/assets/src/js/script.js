//Swiper gallery
var swiper = new Swiper(".gallery", {
  slidesPerView: 1,
  loop: true
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false
  // }
});

//Swiper hero gallery
var swiperHeroGallery = new Swiper(".hero-gallery", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".hero-gallery__button-next",
    prevEl: ".hero-gallery__button-prev"
  },
  autoHeight: true
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false
  // }
});

$(document).ready(function() {
  $(".modal").on("show.bs.modal", function() {
    setTimeout(function() {
      var swiperModalGallery = new Swiper(".modal-gallery", {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".hero-gallery__button-next",
          prevEl: ".hero-gallery__button-prev"
        },
        autoHeight: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      });
    }, 500);
  });

  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
});
