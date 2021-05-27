$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(() => {
    if ($(this).scrollTop() > 200) {
      $(".scroll-to-top").addClass("is-visible");
    } else {
      $(".scroll-to-top").removeClass("is-visible");
    }
  });

  //Click event to scroll to top
  $(".scroll-to-top").click(() => {
    $("html, body").animate({ scrollTop: "0" });
  });
});
