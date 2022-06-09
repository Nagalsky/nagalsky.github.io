$(document).ready(function () {
  const el = $(".hero-form-select");
  const apiURL = "https://stockhawkapi.azurewebsites.net/instruments";

  el.select2({
    theme: "hero-form-select",
    width: $(this).data("width")
      ? $(this).data("width")
      : $(this).hasClass("w-full")
      ? "100%"
      : "style",
    placeholder: "Enter tickers or companies to get started...",
    closeOnSelect: false,
    minimumInputLength: 1,
    ajax: {
      url: function (params) {
        return `${apiURL}/${params.term}`;
      },
      dataType: "json",
      delay: 250,
      data: function () {
        return null;
      },
      processResults: function (data, params) {
        // parse the results into the format expected by Select2
        // since we are using custom formatting functions we do not need to
        // alter the remote JSON data, except to indicate that infinite
        // scrolling can be used

        console.log("data", data);

        // params.page = params.page || 1;

        // return {
        //   results: data.items,
        //   pagination: {
        //     more: params.page * 30 < data.total_count,
        //   },
        // };
      },
      cache: true,
    },
  });
  // .on("select2:unselecting", function () {
  //   $(this).data("unselecting", true);
  // })
  // .on("select2:opening", function (e) {
  //   var none = $(this).find("option:selected").length;

  //   if ($(this).data("unselecting") && none !== 0) {
  //     $(this).removeData("unselecting");
  //     e.preventDefault();
  //   }
  // });

  // el.on("change", function () {
  //   var none = $(this).find("option:selected").length;

  //   if (none === 0) {
  //     $(".select2-search").removeClass("hidden");
  //   } else {
  //     $(".select2-search").addClass("hidden");
  //   }
  // });
});
