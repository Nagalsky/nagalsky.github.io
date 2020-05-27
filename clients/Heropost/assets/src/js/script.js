$(document).ready(function () {

  //Wizard step form initial
  var current_fs, next_fs, previous_fs;
  var opacity;

  $(".wizard__next-step").click(function () {

    current_fs = $(this).parent().parent();
    next_fs = $(this).parent().parent().next();

    //Add Class Active
    $("#progressbar li").eq($(".wizard__step").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
      opacity: 0
    }, {
      step: function (now) {
        // for making fielset appear animation
        opacity = 1 - now;

        current_fs.css({
          'display': 'none',
          'position': 'relative'
        });
        next_fs.css({
          'opacity': opacity,
          'display': 'flex',
        });
      },
      duration: 600
    });
  });

  $(".wizard__previous-step").click(function () {

    current_fs = $(this).parent().parent();
    previous_fs = $(this).parent().parent().prev();

    //Remove class active
    $("#progressbar li").eq($(".wizard__step").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({
      opacity: 0
    }, {
      step: function (now) {
        // for making fielset appear animation
        opacity = 1 - now;

        current_fs.css({
          'display': 'none',
          'position': 'relative'
        });
        previous_fs.css({
          'opacity': opacity,
          'display': 'flex',
        });
      },
      duration: 600
    });
  });



  //Range slider initial
  $(".js-range-slider").ionRangeSlider();

});