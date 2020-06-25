$(document).ready(function() {
  //Initial sticky header
  $(".header").stick_in_parent();

  //Select all checkboxes in cart
  $("#select-all-checkboxes").change(function() {
    var checkboxes = $(this)
      .closest("body")
      .find(".cart-list")
      .find(":checkbox");
    checkboxes.prop("checked", $(this).is(":checked"));
  });
});
