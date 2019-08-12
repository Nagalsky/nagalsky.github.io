$(document).ready(function() {
  // Offcanvas
  var $menu = $(".offcanvas");
  var $menuToggle = $(".offcanvas-toggle");
  var $menuMask = $(".offcanvas-mask");
  $($menuToggle).on("click", function() {
    $menu.toggleClass("offcanvas--opened");
    $menuMask.toggleClass("offcanvas-mask--opened");
  });
  $(".side-menu-close").on("click touchstart", function() {
    $menu.removeClass("offcanvas--opened");
    $menuMask.removeClass("offcanvas-mask--opened");
  });

  $(document).on("click touchstart", function(e) {
    if ($(e.target).closest($menu).length == 0 && $(e.target).closest($menuToggle).length == 0) {
      $menu.removeClass("offcanvas--opened");
      $menuMask.removeClass("offcanvas-mask--opened");
    }
  });
});
