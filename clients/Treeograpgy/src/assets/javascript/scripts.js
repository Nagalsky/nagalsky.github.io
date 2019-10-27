$(document).ready(function () {
  //Card gallery
  //initialize swiper when document ready
  var mySwiper = undefined

  function initSwiper() {
    var screenWidth = $(window).width()
    if (screenWidth < 768 && mySwiper == undefined) {
      mySwiper = new Swiper('.cards', {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        slidesPerView: 1.1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      })
    } else if (screenWidth > 767 && mySwiper != undefined) {
      mySwiper.destroy()
      mySwiper = undefined
      jQuery('.swiper-wrapper').removeAttr('style')
      jQuery('.swiper-slide').removeAttr('style')
    }
  }

  //Swiper plugin initialization
  initSwiper()

  //Swiper plugin initialization on window resize
  $(window).on('resize', function () {
    initSwiper()
  })

  //Triographs gallery
  var swiper = new Swiper('.triographs', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.triograph-button-next',
      prevEl: '.triograph-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 5,
      },
    }
  })

  //Hero gallery
  var swiper = new Swiper('.hero-gallery', {
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'fade',
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  })

  //Initial selectpicker
  $('.selectpicker').selectpicker()
})