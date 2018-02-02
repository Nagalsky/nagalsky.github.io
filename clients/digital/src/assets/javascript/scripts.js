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
    pauseOnHover: false
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

});
