//Scroll to element
$(document).ready(function () {
  $(".scroll").click(function (e) {
    var id = $(this).attr("href");

    // target element
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - 10;

    // animated top scrolling
    $("body, html").animate({ scrollTop: pos }, 800, "swing");
  });
});
