$(document).ready(function() {
  //Add/remove background for navbar(once you scroll down)
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
      $(".navbar").addClass("navbar--animated");
    } else {
      $(".navbar").removeClass("navbar--animated");
    }
  });

  //Hero gallery
  $(".hero__gallery").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    appendDots: $(".hero__navigation"),
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    adaptiveHeight: true
  });

  $(".hero__gallery__pause").on("click", function() {
    $(".hero__gallery").slick("slickPause");
    $(this).addClass("d-none");
    $(".hero__gallery__play").removeClass("d-none");
  });

  $(".hero__gallery__play").on("click", function() {
    $(".hero__gallery").slick("slickPlay");
    $(this).addClass("d-none");
    $(".hero__gallery__pause").removeClass("d-none");
  });

  //Products gallery
  $(".products-gallery").slick({
    arrows: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    variableWidth: true,
    centerPadding: "570px",
    slidesToShow: 3,
    responsive: [{
      breakpoint: 1199,
      settings: {
        centerPadding: "400px",
        slidesToShow: 3
      }
    }]
  });

  $(".products-gallery-mobile").slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });


  //Scroll to element
  $("a[data-scroll]").click(function(e) {
    e.preventDefault();
    //Set Offset Distance from top to account for fixed nav
    var offset = 86;
    $(window).resize(function() {
      if ($(window).width() < 992) {
        offset = 56;
      }
    });
    if ($(window).width() < 992) {
      offset = 56;
    }
    var target = "#" + $(this).data("scroll");
    var $target = $(target);
    //Animate the scroll to, include easing lib if you want more fancypants easings
    $("html, body")
      .stop()
      .animate({
          scrollTop: $target.offset().top - offset
        },
        800,
        "swing"
      );

    $(".navbar-toggler").addClass("collapsed");
    $(".navbar-collapse").removeClass("show");
  });
});