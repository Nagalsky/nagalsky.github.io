$(document).ready(function () {


  //Card gallery
  var cardsSwiper = new Swiper('.cards', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    slidesPerView: 1.1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })


  //Triographs gallery
  var triographsSwiper = new Swiper('.triographs', {
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
  var heroSwiper = new Swiper('.hero-gallery', {
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

  //Footer mobile action open/close
  $footer = $('.footer-secondary');
  $footerMenuToggle = $('.footer-secondary-toggle');

  $footerMenuToggle.on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('is-opened')
    $footer.toggleClass('is-opened')
  })

  //Floated social menu action open/close
  $floatedMenu = $('.floated-menu');
  $floatedMenuToggle = $('.floated-menu__item--toggle');

  $floatedMenuToggle.on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('is-opened')
    $floatedMenu.toggleClass('is-opened')
  })

  //Initial selectpicker
  $('.selectpicker').selectpicker()


})

//Initial read more plugin
$readMoreJS.init({
  target: '.read-more', // Selector of the element the plugin applies to (any CSS selector, eg: '#', '.'). Default: ''
  numOfWords: 40, // Number of words to initially display (any number). Default: 50
  toggle: true, // If true, user can toggle between 'read more' and 'read less'. Default: true
  moreLink: 'Read more', // The text of 'Read more' link. Default: 'read more ...'
  lessLink: 'Read less' // The text of 'Read less' link. Default: 'read less'
});