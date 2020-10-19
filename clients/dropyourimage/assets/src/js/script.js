$(document).ready(function() {
  //Mobile menu action
  $(".navigation__toggle").on("click", function(e) {
    e.preventDefault();
    $(".navigation").toggleClass("navigation--is-opened");
    $(".navigation__overlay").toggleClass("navigation__overlay--is-opened");
  });

  $(".navigation__overlay").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("navigation__overlay--is-opened");
    $(".navigation").removeClass("navigation--is-opened");
  });
});
