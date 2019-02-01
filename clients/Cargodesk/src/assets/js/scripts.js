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
    speed: 900,
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
    speed: 900,
    draggable: false,
    swipe: false,
    touchMove: false,
    asNavFor: '.hero__image-gallery',
  })

  //Initial custom bootstrap select
  $('.selectpicker').selectpicker()

  //Initial bootstrap Popover
  $('[data-toggle="popover"]').popover()

  //Collapse action
  $('.collapse-box__trigger').on('click', function(e) {
    e.preventDefault()
    $(this).toggleClass('collapse-box__trigger--opened')
    $(this)
      .parent()
      .next('.collapse-box__body')
      .slideToggle(300)
  })

  //Scroll to element
  $("a[data-scroll]").click(function(e) {
    e.preventDefault();
    //Set Offset Distance from top to account for fixed nav
    var offset = 119;
    $(window).resize(function() {
      if ($(window).width() < 992) {
        offset = 82;
      }
    });
    if ($(window).width() < 992) {
      offset = 82;
    }
    var target = "#" + $(this).data("scroll");
    var $target = $(target);
    //Animate the scroll to, include easing lib if you want more fancypants easings
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - offset
        },
        800,
        "swing"
      );

    $(".navbar-toggler").addClass("collapsed");
    $(".navbar-collapse").removeClass("show");
  });

  //Cargo form action
  $('#continue-details').on('click', function(event) {
    event.preventDefault();
    $(this).addClass('d-none')
    $('#cargo-details .display-none').slideToggle(300);
  })

  $('#add-new-shipment').on('click', function(event) {
    event.preventDefault();
    $('.shipment-item:first').clone().removeClass('shipment-item-prev').appendTo('#shipments').prev().addClass('shipment-item-prev');
  })

  $(document).on('click', '.btn-icon--delete', function () {
  	$(this).parents('.shipment-item').remove();
  });

  // $('.btn-icon--delete').on('click', function(event) {
  //   event.preventDefault();
  //   $(this).parents('.shipment-item').remove();
  // })





})
