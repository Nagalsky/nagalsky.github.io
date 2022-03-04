$("#player").on("click", function () {
  var active = $(this).toggleClass("active").hasClass("active");

  if (active) {
    $(".custom-overlay").hide();
  } else {
    $(".custom-overlay").show();
  }
});
