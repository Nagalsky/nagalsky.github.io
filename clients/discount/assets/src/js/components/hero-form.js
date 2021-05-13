$(document).ready(function () {
  (function () {
    $("#field-select-make").change(function () {
      $(this)
        .removeClass("form-select--is-active")
        .addClass("form-select--is-done");
      $("#field-select-model")
        .prop("disabled", false)
        .addClass("form-select--is-active");
    });
    $("#field-select-model").change(function () {
      $(this)
        .removeClass("form-select--is-active")
        .addClass("form-select--is-done");
      $("#field-select-year")
        .prop("disabled", false)
        .addClass("form-select--is-active");
    });
    $("#field-select-year").change(function () {
      $("#field-submit").prop("disabled", false);
    });
  })();
});
