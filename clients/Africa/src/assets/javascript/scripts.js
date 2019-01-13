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
  $('.hero__gallery').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    appendDots: $(".hero__navigation"),
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });

  $('.hero__gallery__pause').on('click', function() {
    $('.hero__gallery').slick('slickPause');
    $(this).addClass('d-none');
    $('.hero__gallery__play').removeClass('d-none');
  });

  $('.hero__gallery__play').on('click', function() {
    $('.hero__gallery').slick('slickPlay');
    $(this).addClass('d-none');
    $('.hero__gallery__pause').removeClass('d-none');
  });

  //Products gallery
  $('.products-gallery').slick({
    arrows: false,
    centerMode: true,
    variableWidth: true,
    centerPadding: '570px',
    slidesToShow: 2,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


});