$(document).ready(function () {
  const el = $(".hero-form-select");
  el.select2({
    theme: "hero-form-select",
    width: $(this).data("width")
      ? $(this).data("width")
      : $(this).hasClass("w-full")
      ? "100%"
      : "style",
    placeholder: $(this).data("placeholder"),
    minimumInputLength: 2,
  });

  el.on("change", function () {
    var none = $(this).find("option:selected").length;

    if (none === 0) {
      $(".select2-search").removeClass("hidden");
    } else {
      $(".select2-search").addClass("hidden");
    }
  });
});
