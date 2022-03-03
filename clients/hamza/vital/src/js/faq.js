$(document).ready(function () {
  $(".faq-item-toggle").on("click", function (e) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(this).offset().top,
      },
      500
    );
    var active = $(this).toggleClass("active").hasClass("active");
    e.preventDefault();
    $(this).next().toggle();
    $(this)
      .find(".faq-item-img")
      .css("transform", active ? "rotate(-180deg)" : "rotate(0deg)");
  });
});
