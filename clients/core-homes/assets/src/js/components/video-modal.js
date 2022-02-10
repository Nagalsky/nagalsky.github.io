$(document).ready(function () {
  (function () {
    var url = $("#modal-video iframe").attr("src");
    $("#modal-video").on("hide.bs.modal", function () {
      $("#modal-video iframe").attr("src", "");
    });
    $("#modal-video").on("show.bs.modal", function () {
      $("#modal-video iframe").attr("src", url);
    });
  })();
});
