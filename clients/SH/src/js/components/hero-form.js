$(document).ready(function () {
  const el = $("#hero-form-select");
  const hiddenIdsField = $("#array-ids");
  const dropdownParent = $(".hero-form");
  const searchField = $(".select2-search__field");
  const apiURL = "https://www.stockhawk.io/api/instruments";

  const formatRepo = (repo) => {
    repo.loading ? dropdownParent.addClass('empty') : dropdownParent.removeClass('empty');
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
          }),
        };
      },
      cache: true,
    },
    escapeMarkup: (markup) => markup,
    width: '100%',
    placeholder: "Enter tickers or companies to get started...",
    closeOnSelect: false,
    templateResult: formatRepo,
    templateSelection: formatRepoSelection,
    dropdownParent: dropdownParent,
  }).on('select2:select', function (e) {
    dropdownParent.addClass('hide-search');
  }).on('select2:close', function (e) {
    dropdownParent.removeClass('hide-search');
  });

  el.on("change", () => {
    let arrIDs = [];
    arrIDs = el.val();

    hiddenIdsField.val(arrIDs.join(','));
  });
});
