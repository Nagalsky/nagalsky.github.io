$(document).ready(function () {
  (function () {
    setTimeout(function () {
      $(".page-switch").trigger("click");
    }, 600000);

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

      var countDownDate = new Date().getTime() + 15 * 60 * 1000;

      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("counter").innerHTML = minutes + ":" + seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById(
            "counter-message"
          ).innerHTML = `Please hurry! Your package is only reserved for a limited period of time.`;
        }
      }, 1000);
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
