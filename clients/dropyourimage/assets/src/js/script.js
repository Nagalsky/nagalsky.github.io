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

  //Get height of the page and set it to collapse box(for custom vertical scrollbar)
  $(function() {
    var divHeight = $("[data-get-heading-height]").height();
    $("[data-set-box-collapse-height]").css({ maxHeight: "calc(100vh - 188px - " + divHeight + "px)" });
  });

  //Bootstrap colorpickers
  $(function() {
    $("#colorpicker")
      .colorpicker({
        inline: true,
        container: true,
        extensions: [
          {
            name: "swatches",
            options: {
              colors: {
                tetrad1: "#000",
                tetrad2: "#000",
                tetrad3: "#000",
                tetrad4: "#000"
              },
              namesAsValues: false
            }
          }
        ]
      })
      .on("colorpickerChange colorpickerCreate", function(e) {
        var colors = e.color.generate("tetrad");

        colors.forEach(function(color, i) {
          var colorStr = color.string(),
            swatch = e.colorpicker.picker.find('.colorpicker-swatch[data-name="tetrad' + (i + 1) + '"]');

          swatch
            .attr("data-value", colorStr)
            .attr("title", colorStr)
            .find("> i")
            .css("background-color", colorStr);
        });
      });

    $("#colorpicker2")
      .colorpicker({
        inline: true,
        container: true,
        extensions: [
          {
            name: "swatches",
            options: {
              colors: {
                tetrad1: "#000",
                tetrad2: "#000",
                tetrad3: "#000",
                tetrad4: "#000"
              },
              namesAsValues: false
            }
          }
        ]
      })
      .on("colorpickerChange colorpickerCreate", function(e) {
        var colors = e.color.generate("tetrad");

        colors.forEach(function(color, i) {
          var colorStr = color.string(),
            swatch = e.colorpicker.picker.find('.colorpicker-swatch[data-name="tetrad' + (i + 1) + '"]');

          swatch
            .attr("data-value", colorStr)
            .attr("title", colorStr)
            .find("> i")
            .css("background-color", colorStr);
        });
      });
  });

  //Resume box opne/close action
  $(function() {
    $(".resume__open").on("click", function(e) {
      e.preventDefault();
      $(this)
        .closest(".resume")
        .addClass("is-opened");
    });
  });

  $(function() {
    $(".resume__close").on("click", function(e) {
      e.preventDefault();
      $(this)
        .closest(".resume")
        .removeClass("is-opened");
    });
  });

  //Show hide password in input type password
  $(".btn-field-show-password").on("click", function(e) {
    var target = e.currentTarget;
    $(target).hasClass("show") ? hidePassword($(target)) : showPassword($(target));
  });
  function hidePassword(e) {
    e.removeClass("show").addClass("hide");
    e.parent()
      .next("input")
      .attr("type", "password");
  }
  function showPassword(e) {
    e.removeClass("hide").addClass("show");
    e.parent()
      .next("input")
      .attr("type", "text");
  }

  //Edit field action
  $(function() {
    $(".btn-edit-field").on("click", function(e) {
      e.preventDefault();
      $(this).addClass("invisible");
      $(this)
        .parent()
        .find("input")
        .removeClass("form-control--secondary")
        .focus();
      $(this)
        .parent()
        .find(".btn-close-edit-field")
        .removeClass("invisible");
    });

    $(".btn-close-edit-field").on("click", function(e) {
      e.preventDefault();
      $(this).addClass("invisible");
      $(this)
        .parent()
        .find("input")
        .addClass("form-control--secondary");
      $(this)
        .parent()
        .find(".btn-edit-field")
        .removeClass("invisible");
    });
  });
});
