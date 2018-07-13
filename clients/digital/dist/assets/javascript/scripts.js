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

  $('.dropdown-toggle-mobile').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('dropdown-toggle-mobile--is-active');
    $(this).parent().toggleClass('nav-link--is-active');
    $(this).parent().next('.dropdown-menu').toggleClass('dropdown-menu--is-open');
  });


});
