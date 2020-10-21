$(document).ready(function() {
  //Mobile menu action
  $(function() {
    $(".navigation__toggle").on("click", function(e) {
      e.preventDefault();
      $(".navigation").toggleClass("navigation--is-opened");
      $(".navigation__overlay").toggleClass("navigation__overlay--is-opened");
    });

    $(".navigation__overlay").on("click", function(e) {
      e.preventDefault();
      $(this).toggleClass("navigation__overlay--is-opened");
      $(".navigation").removeClass("navigation--is-opened");
    });
  });

  //Initial Bootstrap popover
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

  //Initial Bootstrap select
  $(function() {
    $(".selectpicker").selectpicker();
  });

  //Initial Bootstrap tooltip
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //Get height of the page and set it to product box(for custom vertical scrollbar)
  $(function() {
    var divHeight = $("[data-get-heading-height]").height();
    $("[data-set-product-height]").css({ maxHeight: "calc(100vh - 260px - " + divHeight + "px)" });
  });

  //Box collapse open/close state
  $(function() {
    $(".box-collapse__toggle").on("click", function(e) {
      e.preventDefault();
      $(this)
        .parent()
        .toggleClass("is-opened");
    });
  });

  $(function() {
    var divHeight = $("[data-get-heading-height]").height();
    $("[data-set-box-collapse-height]").css({ maxHeight: "calc(100vh - 188px - " + divHeight + "px)" });
  });
});
