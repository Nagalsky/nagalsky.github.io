$(document).ready(function(){

  //Scroll animation initial https://github.com/michalsnik/aos
  AOS.init({
    disable: 'mobile'
  });

  //Initial Slick slider
  $.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function () {
        $(this).children(selector).sort(function (childA, childB) {
            // * Prevent last slide from being reordered
            if($(childB).index() !== $(this).children(selector).length - 1) {
                return Math.round(Math.random()) - 0.5;
            }
        }.bind(this)).detach().appendTo(this);
    });

    return this;
  };
  $(".quote-carousel").randomize().slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    touchMove: false
  });

  $(".logos-carousel").randomize().slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    touchMove: false
  });

  $(".carousel").slick();

  //Sticky block Initial
  $(".sticky").stick_in_parent();

  //Scroll to element
  $('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    $('.navbar-collapse').removeClass('show');
    $('.navbar-toggle').addClass('collapsed');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
  });

  //Mobile menu action
  $('.navbar__toggle').on('click', function (e) {
    e.preventDefault();
    $('.navbar__collapse').addClass('navbar__collapse--is-open');
    $('body').addClass('ovh')
  });
  $('.navbar__close').on('click', function (e) {
    e.preventDefault();
    $('.navbar__collapse').removeClass('navbar__collapse--is-open');
    $('body').removeClass('ovh');
  });

  $('.dropdown').on('shown.bs.dropdown', function () {
    $('.navbar__collapse__logo').addClass('hidden')
  });
  $('.dropdown').on('hidden.bs.dropdown', function () {
    $('.navbar__collapse__logo').removeClass('hidden')
  });

  //Rotate logos
  /*function rotateLogosFunction () {
    var yourImages = ['assets/images/temp/facebook.svg', 'assets/images/temp/yahoo.svg','assets/images/temp/hubspot.svg','assets/images/temp/snapchat.svg', 'assets/images/temp/crimtan.svg', 'assets/images/temp/pinterest.svg', 'assets/images/temp/nielsen.svg', 'assets/images/temp/verve.svg', 'assets/images/temp/modemedia.svg', 'assets/images/temp/flyer.svg', 'assets/images/temp/infectious.svg', 'assets/images/temp/bbc.svg'];

    var imageArr = yourImages.map(function (src) {
      return {
        src: src,
        selected: false
      }
    });

    $(".img-rotate").each( function(index, $this){
      var freeImages = imageArr.filter(function (item) {
        return item.selected === false;
      })
      var randomImage = Math.floor(Math.random()*freeImages.length);
      var item = freeImages[randomImage];
      item.selected = true;
      $($this).attr("src", item.src);
    });

  }
  setInterval(rotateLogosFunction, 4000);*/

});
