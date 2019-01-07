$(document).ready(function() {
  //Sidebar toggle
  $("#sidebar-toggle").on("");

  var $menu = $("#sidebar");
  var $menuToggle = $("#sidebar-toggle, #sidebar-close");
  var $menuMask = $("#sidebar-mask");
  $($menuToggle).on("click", function() {
    $menuToggle.toggleClass("active");
    $menu.toggleClass("active");
    $menuMask.toggleClass("active");
  });

  $(document).on("click touchstart", function(e) {
    if (
      $(e.target).closest($menu).length == 0 &&
      $(e.target).closest($menuToggle).length == 0
    ) {
      $menuToggle.removeClass("active");
      $menu.removeClass("active");
      $menuMask.removeClass("active");
    }
  });
});
