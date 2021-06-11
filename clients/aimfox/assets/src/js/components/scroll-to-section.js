(function () {
  $("a[data-scroll]").click(function (e) {
    e.preventDefault();
    //Set Offset Distance from top to account for fixed nav
    var target = "#" + $(this).data("scroll");
    var $target = $(target);
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      800,
      "swing"
    );
  });
})();
