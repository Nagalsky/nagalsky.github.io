$(document).ready(function () {
  //Initial slick gallery
  $('.product-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-gallery-nav'
  });

  $('.product-gallery-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.product-gallery',
    focusOnSelect: true,
    vertical: true,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          slidesToShow: 4,
        }
      }
    ]
  });

  //Mobile menu animation action
  $('.navbar-toggler').on('click', function (e) {
    e.preventDefault()
    $('#navbarSupportedContent').toggleClass('opened')
  })

})