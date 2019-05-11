$(document).ready(function () {
  //Initial slick gallery
  $('.gallery-hero').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true
  });

  $('.gallery-brand').slick({
    autoplay: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#staffModal').on('shown.bs.modal', function (e) {
    $('.gallery-staff').resize();
  })

  $('.gallery-staff').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    fade: true
  });

  $('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.gallery-staff').slick('slickGoTo', slideno - 1);
  });


  $('.gallery-testimonials').slick({
    autoplay: true,
    arrows: true
  });


})