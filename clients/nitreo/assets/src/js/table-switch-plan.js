$(document).ready(function () {
  (function () {
    $(".table-indicator--essential").on("click", function () {
      $(".table-indicator.table-indicator--recommended").removeClass(
        "table-indicator--recommended"
      );
      $(this).addClass("table-indicator--recommended");
      $(".btn-table-plan").html("Continue with Essential");
    });

    $(".table-indicator--speed").on("click", function () {
      $(".table-indicator.table-indicator--recommended").removeClass(
        "table-indicator--recommended"
      );
      $(this).addClass("table-indicator--recommended");
      $(".btn-table-plan").html("Continue with Speed");
    });
  })();
});
