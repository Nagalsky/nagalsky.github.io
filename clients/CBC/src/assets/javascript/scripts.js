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

  $('.main-gallery-nav').slick({
    autoplay: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  })

  //Info dropdowns
  $('.info__btn').on('click', function(e) {
    e.preventDefault()
    $(this).toggleClass('active')
    $(this)
      .next('.info__body')
      .slideToggle(150)
  })

  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {
      $('#scroll-btn').fadeIn(200)
    } else {
      $('#scroll-btn').fadeOut(200)
    }
  })
  $('#scroll-btn').click(function(e) {
    e.preventDefault()
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      500
    )
  })

  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    $('.main-gallery-nav, .gallery').slick('setPosition')
  })
})
