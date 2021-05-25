$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".scroll-to-top").addClass("is-visible");
    } else {
      $(".scroll-to-top").removeClass("is-visible");
    }
  });

  //Click event to scroll to top
  $(".scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: "0" });
  });
});
