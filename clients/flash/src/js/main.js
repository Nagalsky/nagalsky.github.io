//main.js file

//Choose product item
window.onload = function () {
  var navs = [].slice.call(document.querySelectorAll(".product-item"));

  function toggle(clicked) {
    return function () {
      navs.forEach((el) =>
        el.classList.toggle("product-item-active", el == clicked)
      );
    };
  }
  navs.forEach((el) => el.addEventListener("click", toggle(el)));
};

//Initial phone dropdown
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  customContainer: "input-phone-box",
});

$(document).ready(function () {
  if ($(window).width() > 960) {
    $(".checkbox-action-scroll").click(function () {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#checkbox-action-scroll-to-desktop").offset().top,
        },
        600
      );
    });
  }
  if ($(window).width() < 960) {
    $(".checkbox-action-scroll").click(function () {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#checkbox-action-scroll-to-mobile").offset().top,
        },
        600
      );
    });
  }

  $(document).ready(function () {
    $(".product-item").click(function () {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#scroll-to").offset().top,
        },
        600
      );
    });
    $(".form-radio-scroll").click(function () {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#scroll-to-step2").offset().top,
        },
        600
      );
    });
  });
});
