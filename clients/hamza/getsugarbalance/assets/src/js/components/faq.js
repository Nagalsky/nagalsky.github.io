$(document).ready(function () {
  $(".faq-toggle").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });
});
