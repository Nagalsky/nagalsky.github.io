(() => {
  const el = "#member-dashboard-select";
  const dashboardForm = document.querySelector(".member-dashboard-form");
  const apiURL = "https://www.stockhawk.io/api/instruments";
  let selectedVal = null;

  if (typeof dashboardForm != "undefined" && dashboardForm != null) {
    const select = new TomSelect(el, {
      valueField: "instrumentId",
      labelField: "symbol",
      searchField: ["symbol", "name"],
      plugins: ['dropdown_input'],
      onChange: (e) => {
        selectedVal = e;
        console.log('selectedVal+++ ', selectedVal)
        select.clearOptions();
      },
      load: (query, callback) => {
        const url = `${apiURL}/${encodeURIComponent(query)}`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            callback(json);
          })
          .catch(() => {
            callback();
          });
      },
      render: {
        option: (item, escape) => {
          return `
        <div class="flex items-center">
          ${
            item.symbol &&
            `<div style="margin-right: 20px;">${escape(item.symbol)}</div>`
          }
          <div>${escape(item.name)}</div> 
        </div>`;
        },
        item: (item, escape) => {
          return `<div>${escape(item.symbol)}</div>`;
        },
      },
    });
  }
})();
