$(document).ready(function () {
  (function () {
    $(".navbar-toggler").on("click", function () {
      $(".navbar").toggleClass("navbar--is-opened");
      $("body").toggleClass("navbar--is-opened");
    });
  })();
});
