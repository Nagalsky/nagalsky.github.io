// var $post = $(".section-hidden");
// setInterval(function () {
//   $post.removeClass("section-hidden");
// }, 900000); // <---- You can change time here

// setTimeout(function () {
//   $(".page-switch").trigger("click");
// }, 900000);

// $(".page-switch").on("click", function (e) {
//   e.preventDefault();
//   $post.removeClass("section-hidden");

//   var defaultAnchorOffset = 10;

//   var anchor = $(this).attr("data-attr-scroll");

//   var anchorOffset = $("#" + anchor).attr("data-scroll-offset");
//   if (!anchorOffset) anchorOffset = defaultAnchorOffset;

//   $("html,body").animate(
//     {
//       scrollTop: $("#" + anchor).offset().top - anchorOffset,
//     },
//     500
//   );
// });
