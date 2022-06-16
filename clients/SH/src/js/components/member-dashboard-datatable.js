$(document).ready(() => {
  const el = $("#member-dashboard-datatable");
  const tableParentBox = $(".datatable-holder");
  const tableSearchInput = $(".data-table-search-input");
  const selectEl = "#member-dashboard-select";
  const dashboardForm = document.querySelector(".member-dashboard-form");
  const instrumentsApiURL = "https://www.stockhawk.io/api/instruments";
  let selectedVal = null;
  const watchListEntriesApiURL =
    "https://nagalsky.github.io/clients/ajax-data/member-dashboard.txt";
  const bearerToken =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NTI4Njk4NywiZXhwIjoxNjU1MzczMzg3LCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.sdXF17SQxY4JA0W3st7d5JDftO0LoiDPwA2aTd61FhZGLqS8K1MZcQg5-kfvbgvuJCqeNoJMnJaqXhjfr05ZPJHzXE0e4Pn98pQoxAKk4VY7BCMnEQl0IigzT0DEr1SV-1NZT10ZWAv07Wvjsq225Wq_zvxplUTZZPCHbu2IAlVS5vgbH6Yi8znFQNVKBz1WSUqR6svJ_L7HcyKsGVUZs51mtbvBw8JwOfHbUEiMh-PJqE-DSb2RM-9Vaqyy35isl3HqiCx5tVr3kX8x2c9iw_aZ5D8rhtqTcw8Hb7qHdurzmGF_pthbzlrGd8ui2jvcumG6IVM3nliKyaXjzrCWuQ";

  //Form for adding new tickers
  if (typeof dashboardForm != "undefined" && dashboardForm != null) {
    const select = new TomSelect(selectEl, {
      valueField: "instrumentId",
      labelField: "symbol",
      searchField: ["symbol", "name"],
      plugins: ["dropdown_input"],
      onChange: (e) => {
        selectedVal = e;
        console.log("selectedVal+++ ", selectedVal);
        select.clearOptions();
      },
      load: (query, callback) => {
        const url = `${instrumentsApiURL}/${encodeURIComponent(query)}`;
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

  //Datatable
  const table = el.DataTable({
    // ajax: apiURL,
    ajax: {
      url: watchListEntriesApiURL,
      // headers: {
      //   Authorization: `Bearer ${bearerToken}`,
      // },
      cache: true,
      type: "GET",
      dataType: "json",
      dataSrc: (json) => json.data,
      beforeSend: function (response) {
        // console.log("beforeSend", response);
      },
      complete: function (response) {
        // console.log("complete: ", response);
      },
    },
    bSort: false,
    bInfo: false,
    dom: '<"table-responsive"t>',
    bPaginate: false,
    columns: [
      { data: "companyName" },
      { data: "symbol" },
      {
        data: null,
        mRender: (row) => {
          return `
            <input
              type="text"
              placeholder="Amount"
              value="${row.amount}"
              data-id="${row.id}"
              data-row="${row}"
              class="field-amount block w-full rounded border border-solid border-gray300 bg-white px-3 py-1.5 font-normal transition ease-in-out placeholder:text-gray400 focus:border-blue500 focus:outline-none"
            />
        `;
        },
      },
      {
        data: null,
        mRender: (row) => {
          return `
            <input
              type="text"
              placeholder="Open price"
              value="${row.openPrice}"
              data-id="${row.id}"
              class="field-open-price block w-full rounded border border-solid border-gray300 bg-white px-3 py-1.5 font-normal transition ease-in-out placeholder:text-gray400 focus:border-blue500 focus:outline-none"
            />
        `;
        },
      },
      {
        data: null,
        mRender: (row) => {
          return `
            <textarea
              placeholder="Comment"
              data-id="${row.id}"
              class="field-comment block w-full rounded border border-solid border-gray300 bg-white px-3 py-1.5 font-normal transition ease-in-out placeholder:text-gray400 focus:border-blue500 focus:outline-none resize-none"
            >${row.comment}</textarea>
        `;
        },
      },
      {
        orderable: false,
        data: null,
        mRender: (row) => {
          return `
            <div class="text-center">
              <button class="btn-delete p-3 text-red500" data-id="${row.id}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pointer-events-none	" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          `;
        },
      },
    ],
    drawCallback: () => {
      $(".field-amount").on("change", function (e) {
        console.log("field-amount value: ", $(this).val());
        console.log("field-amount id: ", e.target.getAttribute("data-id"));
        const data = table.row($(this).parents("tr")).data();
        console.log("data row: ", data);
      });
      $(".field-open-price").on("change", function (e) {
        console.log("field-open-price value: ", $(this).val());
        console.log("field-open-price id: ", e.target.getAttribute("data-id"));
      });
      $(".field-comment").on("change", function (e) {
        console.log("field-comment value: ", $(this).val());
        console.log("field-comment id: ", e.target.getAttribute("data-id"));
      });
      $(".btn-delete").on("click", function (e) {
        tableDeleteRow(e.target.getAttribute("data-id"));
      });
    },
  });

  tableSearchInput.on("keyup", function () {
    table.search(this.value).draw();
  });

  function tableDeleteRow(id) {
    console.log("tableDeleteRow id:", id);
  }
});
