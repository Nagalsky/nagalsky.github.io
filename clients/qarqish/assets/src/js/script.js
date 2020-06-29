$(document).ready(function() {
  //Initial sticky header
  //$(".header").stick_in_parent();
  $(window).scroll(function() {
    var sticky = $(".header"),
      scroll = $(window).scrollTop();

    if (scroll >= 1) sticky.addClass("header--has-shadow");
    else sticky.removeClass("header--has-shadow");
  });

  //Select all checkboxes in cart
  $('[data-select="all"]').change(function() {
    var checkboxes = $(this)
      .closest(".cart-box")
      .find(":checkbox");
    checkboxes.prop("checked", $(this).is(":checked"));
  });

  //Prevent autoclose cart dropdown menu
  $(".cart-bar__dropdown-menu").on("click", function(e) {
    e.stopPropagation();
  });

  //Close dropdown
  $(".btn-dropdown-close").on("click", function() {
    $(this)
      .parent()
      .removeClass("show")
      .removeAttr("style x-placement");
    $(this)
      .parent()
      .parent()
      .removeClass("show");
  });
});
