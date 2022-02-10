$("#player").on("click", function () {
  var active = $(this).toggleClass("active").hasClass("active");
  if (active) {
    $(".custom-overlay").toggle();
  } else {
    $(".custom-overlay").toggle();
    $(".text").html("Tap to play");
  }
});
