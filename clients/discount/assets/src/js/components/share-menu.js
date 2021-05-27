$(document).ready(function () {
  (function () {
    const $menu = $(".share-product-menu");
    const $menuToggle = $(".share-product-btn-open");
    const $menuClose = $(".share-product-btn-close");
    const $menuMask = $(".share-product-mask");
    const $body = $("body");
    $menuToggle.on("click", function (e) {
      e.preventDefault();
      $menu.toggleClass("is-active");
      $menuMask.toggleClass("is-active");
      $body.css("overflow", "hidden");
    });

    $menuClose.on("click", function (e) {
      e.preventDefault();
      $menu.removeClass("is-active");
      $menuMask.removeClass("is-active");
      $body.css("overflow", "");
    });

    $(document).on("click touchstart", function (e) {
      if (
        $(e.target).closest($menu).length == 0 &&
        $(e.target).closest($menuToggle).length == 0
      ) {
        $menu.removeClass("is-active");
        $menuMask.removeClass("is-active");
        $body.css("overflow", "");
      }
    });
  })();
});
