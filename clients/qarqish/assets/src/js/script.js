$(document).ready(function() {
  //Initial sticky header
  $(".header").stick_in_parent();

  //Select all checkboxes in cart
  $('[data-select="all"]').change(function() {
    var checkboxes = $(this)
      .closest(".cart-box")
      .find(":checkbox");
    checkboxes.prop("checked", $(this).is(":checked"));
  });
});
