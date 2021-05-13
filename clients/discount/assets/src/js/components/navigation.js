$(document).ready(function () {
  (function () {
    const $menu = $(".navigation");
    const $menuToggle = $(".navigation-toggle");
    const $menuClose = $(".navigation-close");
    const $menuMask = $(".navigation-mask");
    const $body = $("body");
    $menuToggle.on("click", function (e) {
      e.preventDefault();
      $menu.toggleClass("is-active");
      $menuMask.toggleClass("is-active");
      $body.toggleClass("modal-open");
    });

    $menuClose.on("click", function (e) {
      e.preventDefault();
      $menu.removeClass("is-active");
      $menuMask.removeClass("is-active");
      $body.removeClass("modal-open");
    });

    $(document).on("click touchstart", function (e) {
      if (
        $(e.target).closest($menu).length == 0 &&
        $(e.target).closest($menuToggle).length == 0
      ) {
        $menu.removeClass("is-active");
        $menuMask.removeClass("is-active");
        $body.removeClass("modal-open");
      }
    });
  })();
});
