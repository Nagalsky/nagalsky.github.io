$(document).ready(function () {
  (function () {
    $(".qty-control--minus").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest(".qty").find(".qty-input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      } else {
        value = 0;
      }

      $input.val(value);
    });

    $(".qty-control--plus").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest(".qty").find(".qty-input");
      var value = parseInt($input.val());

      if (value < 100) {
        value = value + 1;
      } else {
        value = 100;
      }

      $input.val(value);
    });

    // RESTRICT INPUTS TO NUMBERS ONLY WITH A MIN OF 0 AND A MAX 100
    $(".qty-input").on("blur", function () {
      var input = $(this);
      var value = parseInt($(this).val());

      if (value < 0 || isNaN(value)) {
        input.val(0);
      } else if (value > 100) {
        input.val(100);
      }
    });
  })();
});
