$("#player").on("click", function () {
  var active = $(this).toggleClass("active").hasClass("active");

  $(".hero").css("background", !active ? "" : "black");
  $(".hero").css("padding", !active ? "15px 15px 35px 15px" : "0");
  $("#player").css("max-width", !active ? "900px" : "100%");

  if (active) {
    $(".custom-overlay").toggle();
    $(".hero-title").hide();
    $(".hero-holder").removeClass("min-h-0");
    $("#player").removeClass("relative");
    $("#player").removeClass("max-w-[900px]");
  } else {
    $(".custom-overlay").toggle();
    $(".hero-title").show();
    $(".hero-holder").addClass("min-h-0");
    $("#player").addClass("relative");
    $("#player").addClass("max-w-[900px]");
  }
});
