$(document).ready(function () {
  const el = $("#hero-form-select");
  const hiddenIdsField = $("#array-ids");
  const apiURL = "https://www.stockhawk.io/api/instruments";

  const formatRepo = (repo) => {
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
  const formatRepoSelection = (repo) => repo.symbol || repo.text;

  el.select2({
    ajax: {
      url: (params) => `${apiURL}/${params.term}`,
      dataType: "json",
      delay: 250,
      data: () => null,
      processResults: (data) => {
        return {
          results: $.map(data, (e) => {
            return { id: e.instrumentId, name: e.name, symbol: e.symbol };
          }).sort((a, b) => a.symbol.localeCompare(b.symbol)),
        };
      },
      cache: true,
    },
    escapeMarkup: (markup) => markup,
    theme: "hero-form-select",
    width: $(this).data("width")
      ? $(this).data("width")
      : $(this).hasClass("w-full")
      ? "100%"
      : "style",
    placeholder: "Enter tickers or companies to get started...",
    closeOnSelect: false,
    minimumInputLength: 1,
    templateResult: formatRepo,
    templateSelection: formatRepoSelection,
    dropdownParent: $('.hero-form'),
  });

  el.on("change", () => {
    let arrIDs = [];
    arrIDs = el.val();

    hiddenIdsField.val(arrIDs.join(','));
  });
});
