$(document).ready(function () {
  const el = $("#hero-form-select");
  const apiURL = "https://www.stockhawk.io/api/instruments";

  el.select2({
    ajax: {
      url: function (params) {
        return `${apiURL}/${params.term}`;
      },
      dataType: "json",
      delay: 250,
      data: function () {
        return null;
      },
      processResults: function (data) {
        return {
          results: $.map(data, function (e) {
            return { id: e.instrumentId, name: e.name, symbol: e.symbol };
          }),
        };
      },
      cache: true,
    },
    theme: "hero-form-select",
    width: $(this).data("width")
      ? $(this).data("width")
      : $(this).hasClass("w-full")
      ? "100%"
      : "style",
    placeholder: "Enter tickers or companies to get started...",
    closeOnSelect: false,
    escapeMarkup: function (markup) {
      return markup;
    },
    minimumInputLength: 1,
    templateResult: formatRepo,
    templateSelection: formatRepoSelection,
    dropdownParent: $('.hero-form'),
  });

  el.on("change", function () {
    var none = $(this).find("option:selected").length;

    if (none === 0) {
      $(".select2-search").removeAttr("style");
    } else {
      $(".select2-search").css('flex-grow', '0');
    }
  });

  function formatRepo(repo) {
    if (repo.loading) {
      return repo.text;
    }

    var markup = `
      <div class='flex items-center'>
        <div class='symbol' style='margin-right: 20px;'>${repo.symbol}</div>
        <div class='name'>${repo.name}</div>
      </div>`;

    return markup;
  }

  function formatRepoSelection(repo) {
    return repo.name || repo.text;
  }
});
