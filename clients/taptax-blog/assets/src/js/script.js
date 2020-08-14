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

  //Close mobile menu once you click on the link
  $(".navbar .nav-link").on("click", function() {
    $(".navbar-collapse").removeClass("show");
  });

  $(".modal").on("shown.bs.modal", function(e) {
    swiper2.update();
  });

  var videoSrc = $("#modal-video iframe").attr("src");

  $("#modal-video").on("show.bs.modal", function() {
    // on opening the modal
    // set the video to autostart
    $("#modal-video iframe").attr("src", videoSrc + "&amp;autoplay=1");
  });

  $("#modal-video").on("hidden.bs.modal", function(e) {
    // on closing the modal
    // stop the video
    $("#modal-video iframe").attr("src", null);
  });
});

//Swiper gallery
var swiper = new Swiper(".gallery", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".gallery__button-blog-next",
    prevEl: ".gallery__button-blog-prev"
  },
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 70
    }
  }
});

//Swiper modal blog gallery
var swiper2 = new Swiper(".modal-gallery", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".modal-blog-gallery-btn-next",
    prevEl: ".modal-blog-gallery-btn-prev"
  },
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});
