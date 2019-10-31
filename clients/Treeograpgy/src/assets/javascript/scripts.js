$(document).ready(function () {
  //Card gallery
  var cardsSwiper = new Swiper('.cards', {
    speed: 1250,
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    slidesPerView: 1.1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  })

  //Triographs gallery
  var triographsSwiper = new Swiper('.triographs', {
    speed: 1250,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
      delay: 3500,
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
    },
  })

  //Hero gallery

  $('.hero-gallery').slick({
    dots: true,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 15000,
    speed: 1200,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  })

  //Show/hide hero tips

  $('.gallery-pits').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    speed: 900,
  })



  //Footer mobile action open/close
  $footer = $('.footer-secondary')
  $footerMenuToggle = $('.footer-secondary-toggle')

  $footerMenuToggle.on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('is-opened')
    $footer.toggleClass('is-opened')
  })

  //Floated social menu action open/close
  $floatedMenu = $('.floated-menu')
  $floatedMenuToggle = $('.floated-menu__item--toggle')

  $floatedMenuToggle.on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('is-opened')
    $floatedMenu.toggleClass('is-opened')
  })

  //Initial selectpicker
  $('.selectpicker').selectpicker()

  //Init scroll animation
  AOS.init({
    disable: 'mobile',
  })

  $('#data-toggle-amimated-tab-1').on('shown.bs.tab', function (e) {
    $('.name-the-forest__body .geographer').addClass('aos-animate')
  })
  $('#data-toggle-amimated-tab-1').on('hidden.bs.tab', function (e) {
    $('.name-the-forest__body .geographer').removeClass('aos-animate')
    //$('.chat__row.aos-init').removeClass('aos-animate')
  })

  // $('.chat__row.aos-init').removeClass('aos-animate')
  // $('#data-toggle-amimated-tab-3').on('shown.bs.tab', function (e) {
  //   $('.aos-init').addClass('aos-animate')
  //   $('.name-the-forest__body .geographer').removeClass('aos-animate')
  // })
  // $('#data-toggle-amimated-tab-3').on('hidden.bs.tab', function (e) {
  //   $('.chat__row.aos-init').removeClass('aos-animate')
  // })



  $('#chat-box').mousemove(function (e) {

    var wx = $(window).width();
    var wy = $(window).height();

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;

    var newx = x - wx / 1.5;
    var newy = y - wy / 1.5;

    $('.chat__row').each(function () {
      var speed = $(this).attr('data-speed');
      if ($(this).attr('data-revert')) speed *= -1;
      TweenMax.to($(this), 1, {
        x: (1 - newx * speed),
        y: (1 - newy * speed)
      });

    });

  });

})

//Initial read more plugin
$readMoreJS.init({
  target: '.read-more', // Selector of the element the plugin applies to (any CSS selector, eg: '#', '.'). Default: ''
  numOfWords: 40, // Number of words to initially display (any number). Default: 50
  toggle: true, // If true, user can toggle between 'read more' and 'read less'. Default: true
  moreLink: 'Read more', // The text of 'Read more' link. Default: 'read more ...'
  lessLink: 'Read less', // The text of 'Read less' link. Default: 'read less'
})