$(document).ready(function () {
  (function () {
    $("#field-select-make").on("change", () => {
      $(this)
        .removeClass("form-select--is-active")
        .addClass("form-select--is-done");
      $("#field-select-model")
        .prop("disabled", false)
        .addClass("form-select--is-active");
    });
    $("#field-select-model").on("change", () => {
      $(this)
        .removeClass("form-select--is-active")
        .addClass("form-select--is-done");
      $("#field-select-year")
        .prop("disabled", false)
        .addClass("form-select--is-active");
    });
    $("#field-select-year").on("change", () => {
      $(this)
        .removeClass("form-select--is-active")
        .addClass("form-select--is-done");
      $("#field-submit").prop("disabled", false);
    });
  })();
});
