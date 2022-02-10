$(document).ready(function () {
  (function () {
    setTimeout(function () {
      $(".page-switch").trigger("click");
    }, 900000);

    $(".page-switch").on("click", function (e) {
      e.preventDefault();
      $("body").addClass("page-switched");

      var defaultAnchorOffset = 10;

      var anchor = $(this).attr("data-attr-scroll");

      var anchorOffset = $("#" + anchor).attr("data-scroll-offset");
      if (!anchorOffset) anchorOffset = defaultAnchorOffset;

      $("html,body").animate(
        {
          scrollTop: $("#" + anchor).offset().top - anchorOffset,
        },
        500
      );
    });

    $(".scroll-to").on("click", function (e) {
      e.preventDefault();

      var defaultAnchorOffset = 10;

      var anchor = $(this).attr("data-attr-scroll");

      var anchorOffset = $("#" + anchor).attr("data-scroll-offset");
      if (!anchorOffset) anchorOffset = defaultAnchorOffset;

      $("html,body").animate(
        {
          scrollTop: $("#" + anchor).offset().top - anchorOffset,
        },
        500
      );
    });
  })();
});
