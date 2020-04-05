$(document).ready(function () {
  //Scroll to element
  $('a[data-scroll]').click(function (e) {
    e.preventDefault();
    //Set Offset Distance from top to account for fixed nav
    var offset = 53;
    if ($(window).width() < 767) {
      offset = 59;
    }
    var target = ('#' + $(this).data('scroll'));
    var $target = $(target);
    //Animate the scroll to, include easing lib if you want more fancypants easings
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - offset
    }, 800, 'swing');
  });
})