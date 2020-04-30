$(document).ready(function () {
  //Share box action
  $(".navbar-social-toggle").on("click", function (e) {
    e.preventDefault();
    $(".share").addClass("is-opened");
    $("body").addClass("modal-open");
  });
  $(".share-box__close").on("click", function (e) {
    e.preventDefault();
    $(".share").removeClass("is-opened");
    $("body").removeClass("modal-open");
  });

  //Scroll top top button
  $(".scroll-top-btn").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
      },
      "slow"
    );
    return false;
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".scroll-top-btn").addClass("is-active");
    } else {
      $(".scroll-top-btn").removeClass("is-active");
    }
  });

  //Hero slider initial
  $(".hero").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    pauseOnFocus: false,
  });

  //Parallax initial
  $(".my-paroller").paroller();

  //Quotes slider
  $(".quotes").slick({
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    fade: true,
    cssEase: "linear",
    pauseOnFocus: false
  });

  //Managements slider
  $(".managements").slick({
    autoplay: true,
    arrows: true,
    fade: true,
    cssEase: "linear",
    pauseOnFocus: false
  });

  $(".partners").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});