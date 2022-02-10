$(document).ready(function () {
  (function () {
    // const $menuClose = $(".share-product-btn-close");
    // $menuClose.on("click", (event) => {
    //   event.preventDefault();
    //   $menu.removeClass("is-active");
    //   $menuMask.removeClass("is-active");
    //   $body.css("overflow", "");
    // });

    function getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/iPad|iPhone|iPod/.test(userAgent)) {
        // use ios icon
        $(".share-product-device").addClass("is-ios");
      } else {
        $(".share-product-device").removeClass("is-ios");
      }
    }

    getMobileOperatingSystem();
  })();
});
