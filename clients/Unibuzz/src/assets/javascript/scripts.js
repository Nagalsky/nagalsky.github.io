$(document).ready(function() {
  //Sidebar toggle
  var $menu = $("#sidebar");
  var $menuToggle = $("#sidebar-toggle, #sidebar-close");
  var $menuMask = $("#sidebar-mask");
  var $body = $("body");
  $($menuToggle).on("click", function(e) {
    e.preventDefault();
    $menuToggle.toggleClass("active");
    $menu.toggleClass("active");
    $menuMask.toggleClass("active");
    $body.toggleClass("overflow-hidden");
  });

  $(document).on("click touchstart", function(e) {
    if (
      $(e.target).closest($menu).length == 0 &&
      $(e.target).closest($menuToggle).length == 0
    ) {
      $menuToggle.removeClass("active");
      $menu.removeClass("active");
      $menuMask.removeClass("active");
      $body.removeClass("overflow-hidden");
    }
  });

  //Card body collapse
  $(".card-toggle-btn").on("click", function(e) {
    e.preventDefault();
    $(this)
      .toggleClass("active")
      .parent()
      .next(".card-body")
      .slideToggle(300);
  });
});
