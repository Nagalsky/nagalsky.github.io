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
    closeOnSelect: false,
  })
    .on("select2:unselecting", function () {
      $(this).data("unselecting", true);
    })
    .on("select2:opening", function (e) {
      var none = $(this).find("option:selected").length;

      if ($(this).data("unselecting") && none !== 0) {
        $(this).removeData("unselecting");
        e.preventDefault();
      }
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
