$(document).ready(function() {
  //Menu action
  var $menu = $('#menu'),
    $menuToggle = $('.header__menu-toggle'),
    $menuClose = $('.menu__close')
  $($menuToggle).on('click', function(e) {
    e.preventDefault()
    $menu.toggleClass('active')
  })
  $($menuClose).on('click touchstart', function(e) {
    e.preventDefault()
    $menu.removeClass('active')
  })

  //Initial event slick gallery
  $('.events').slick({
    autoplay: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  //Initial slick gallery
  $('.gallery').slick()

  $('.gallery-skew').slick({
    autoplay: true,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '.arrow__prev',
    nextArrow: '.arrow__next',
    fade: true,
  })
})
