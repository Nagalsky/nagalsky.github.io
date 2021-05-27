$(document).ready(function () {
  (function () {
    const $menu = $(".share-product-menu");
    const $menuToggle = $(".share-product-btn-open");
    const $menuClose = $(".share-product-btn-close");
    const $menuMask = $(".share-product-mask");
    const $body = $("body");

    $menuToggle.on("click", (event) => {
      if (navigator.share) {
        navigator
          .share({
            title: "WebShare API Demo",
            url: "https://codepen.io/ayoisaiah/pen/YbNazJ",
          })
          .then(() => {
            console.log("Thanks for sharing!");
          })
          .catch(console.error);
      } else {
        event.preventDefault();
        $menu.toggleClass("is-active");
        $menuMask.toggleClass("is-active");
        $body.css("overflow", "hidden");
      }
    });

    $menuClose.on("click", (event) => {
      event.preventDefault();
      $menu.removeClass("is-active");
      $menuMask.removeClass("is-active");
      $body.css("overflow", "");
    });

    $(document).on("click touchstart", (event) => {
      if (
        $(event.target).closest($menu).length == 0 &&
        $(event.target).closest($menuToggle).length == 0
      ) {
        $menu.removeClass("is-active");
        $menuMask.removeClass("is-active");
        $body.css("overflow", "");
      }
    });
  })();
});
