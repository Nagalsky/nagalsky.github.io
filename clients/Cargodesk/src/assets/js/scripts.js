$(document).ready(function () {
  //Add/remove background for navbar(once you scroll down)
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
      $(".navbar").addClass("navbar--filled");
    } else {
      $(".navbar").removeClass("navbar--filled");
    }
  });
});