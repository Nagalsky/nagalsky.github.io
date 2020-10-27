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
    $(".box-collapse__toggle, .box-collapse__header").on("click", function(e) {
      e.preventDefault();
      $(this)
        .parent()
        .toggleClass("is-opened");
    });

    $(".box-collapse__header a").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
    });

    $(".box-collapse__checkbox").change(function() {
      if ($(this).is(":checked")) {
        $(this)
          .closest(".box-collapse--checkbox")
          .addClass("is-opened");
      } else {
        $(this)
          .closest(".box-collapse--checkbox")
          .removeClass("is-opened");
      }
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

  //Check checkbox while click on the paren box
  $(function() {
    $("[data-whole-box-check-checkbox]").on("click", function() {
      var checkbox = $(this)
        .parent()
        .parent()
        .find("[data-collapse-box]");
      $(this)
        .parent()
        .parent()
        .toggleClass("is-opened");
      checkbox.prop("checked", !checkbox.prop("checked"));
    });
  });

  $(function() {
    $("[data-collapse-box]").on("change", function(e) {
      if ($(this).is(":checked")) {
        $(this)
          .parent()
          .parent()
          .parent()
          .addClass("is-opened");
      } else {
        $(this)
          .parent()
          .parent()
          .parent()
          .removeClass("is-opened");
      }
    });
  });

  $(function() {
    $("[data-collapse-hidden-item]").on("change", function(e) {
      if ($(this).is(":checked")) {
        $(this)
          .closest(".box")
          .find(".box-hidden-item")
          .addClass("is-opened");
      } else {
        $(this)
          .closest(".box")
          .find(".box-hidden-item")
          .removeClass("is-opened");
      }
    });
  });

  $(function() {
    $("[data-radio-collapse-child]").on("change", function() {
      if ($(this).attr("value") == "show-box") {
        $(this)
          .closest(".box")
          .find(".box-hidden-childs")
          .addClass("is-opened", this.checked);
      } else {
        $(this)
          .closest(".box")
          .find(".box-hidden-childs")
          .removeClass("is-opened", this.unchecked);
      }
    });
  });

  $(function() {
    $("[data-radio-collapse-hidden-item]").on("change", function() {
      if ($(this).attr("value") == "show-box") {
        $(this)
          .closest(".box")
          .find(".box-hidden-item")
          .addClass("is-opened", this.checked);
      } else {
        $(this)
          .closest(".box")
          .find(".box-hidden-item")
          .removeClass("is-opened", this.unchecked);
      }

      if ($(this).attr("value") == "show-second-box") {
        $(this)
          .closest(".box")
          .find(".box-hidden-item-secondary")
          .addClass("is-opened", this.checked);
      } else {
        $(this)
          .closest(".box")
          .find(".box-hidden-item-secondary")
          .removeClass("is-opened", this.unchecked);
      }
    });
  });

  $(function() {
    $("[data-collapse-radio-hidden-item]").on("change", function() {
      if ($(this).attr("value") == "show-box") {
        $(this)
          .closest(".box")
          .find(".box-hidden-item, .box-hidden-childs")
          .addClass("is-opened", this.checked);
      } else {
        $(this)
          .closest(".box")
          .find(".box-hidden-item, .box-hidden-childs")
          .removeClass("is-opened", this.unchecked);
      }
    });
  });

  //Add form row(specificatie-nieuw page)
  $(function() {
    var collapseBtn = $("[data-add-row");
    var collapseHolder = $(".collapse-holder");
    var i = 0;

    collapseBtn.on("click", function() {
      $("<div />")
        .append(
          $(
            '<div class="form-group">' +
              '<div class="row no-gutters">' +
              '<div class="col-5 col-xxl-auto">' +
              '<label for="form-field-breedte' +
              i +
              '" class="tex-black200">Breedte</label>' +
              '<input type="text" id="form-field-breedte' +
              i +
              '" class="form-control">' +
              "</div>" +
              '<div class="col-2 col-xxl-1 text-center align-self-end mb-3">' +
              '<span class="fs-16 text-black200">X</span>' +
              "</div>" +
              '<div class="col-5 col-xxl-auto">' +
              '<label for="form-field-hoogte' +
              i +
              '" class="tex-black200">Hoogte</label>' +
              '<input type="text" id="form-field-hoogte' +
              i +
              '" class="form-control">' +
              "</div>" +
              "</div>"
          )
        )
        .appendTo(collapseHolder);
      i++;
    });
  });

  //Watermark change text
  $(function() {
    $(".watermark__radio").on("click", function() {
      if ($(this).attr("value") == "watermark__top-left") {
        $(".watermark__title").html("Linksboven");
      }
      if ($(this).attr("value") == "watermark__top-middle") {
        $(".watermark__title").html("Midden-Boven");
      }
      if ($(this).attr("value") == "watermark__top-right") {
        $(".watermark__title").html("Rechtsboven");
      }
      if ($(this).attr("value") == "watermark__middle-left") {
        $(".watermark__title").html("Midden-Links");
      }
      if ($(this).attr("value") == "watermark__middle-middle") {
        $(".watermark__title").html("Midden-Midden");
      }
      if ($(this).attr("value") == "watermark__middle-right") {
        $(".watermark__title").html("Midden-Rechts");
      }
      if ($(this).attr("value") == "watermark__bottom-left") {
        $(".watermark__title").html("Rechtsonder");
      }
      if ($(this).attr("value") == "watermark__bottom-middle") {
        $(".watermark__title").html("Midden-Onder");
      }
      if ($(this).attr("value") == "watermark__bottom-right") {
        $(".watermark__title").html("Rechtsonder");
      }
    });
  });

  //Bootstrap tooltip inside bootstra-table
  $(function() {
    $(".bootstrap-table tbody").on("mouseover", ".btn-icon", function() {
      $('[data-toggle="tooltip"]').tooltip({
        trigger: "hover",
        html: true
      });
    });
  });
});
