$(document).ready(function() {
  //Add/remove background for navbar(once you scroll down)
  $(window).scroll(function() {
    var scroll = $(window).scrollTop()

    if (scroll >= 5) {
      $('.navbar').addClass('navbar--filled')
    } else {
      $('.navbar').removeClass('navbar--filled')
    }
  })

  //Initial slick gallery
  $('.hero__image-gallery').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    fade: true,
    speed: 600,
    draggable: false,
    swipe: false,
    touchMove: false,
    asNavFor: '.hero__content-gallery',
  })

  $('.hero__content-gallery').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    appendDots: $('.hero__navigation'),
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    fade: true,
    speed: 600,
    draggable: false,
    swipe: false,
    touchMove: false,
    asNavFor: '.hero__image-gallery',
  })

  //Initial custom bootstrap select
  $('.selectpicker').selectpicker()
})
