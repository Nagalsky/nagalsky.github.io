$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = undefined;

  function initSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth < 768 && mySwiper == undefined) {
      mySwiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
      });
    } else if (screenWidth > 767 && mySwiper != undefined) {
      mySwiper.destroy();
      mySwiper = undefined;
      jQuery('.swiper-wrapper').removeAttr('style');
      jQuery('.swiper-slide').removeAttr('style');
    }
  }

  //Swiper plugin initialization
  initSwiper();

  //Swiper plugin initialization on window resize
  $(window).on('resize', function () {
    initSwiper();
  });


})