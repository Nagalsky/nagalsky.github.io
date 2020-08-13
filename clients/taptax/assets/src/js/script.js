$(document).ready(function() {
  //Scroll to element
  $("[data-scroll]").click(function(e) {
    e.preventDefault();
    var offset = 181;
    $(window).resize(function() {
      if ($(window).width() < 992) {
        offset = 64;
      }
    });
    if ($(window).width() < 992) {
      offset = 64;
    }
    var aid = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(aid).offset().top - offset }, "slow");
  });
});

//CLose mobile menu once you click on the link
$(".navbar .nav-link").on("click", function() {
  $(".navbar-collapse").removeClass("show");
});

//Swiper gallery
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev"
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    540: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});
