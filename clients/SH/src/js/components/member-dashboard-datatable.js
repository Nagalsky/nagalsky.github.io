$(document).ready(() => {
  const watchlistsApiUrl = "https://www.stockhawk.io/api/watchlists";
  const watchListEntriesApiURL =
    "https://www.stockhawk.io/api/watchlistentries";
  const instrumentsApiURL = "https://www.stockhawk.io/api/instruments";
  const dataTableEl = $("#member-dashboard-datatable");
  let watchListId = null;
  let watchListEntriesId = null;
  const addWatchListEntriesBtn = $("#add-watchlistentries");
  const dashboardForm = $(".member-dashboard-form");
  const selectEl = "#member-dashboard-select";
  const tableParentBox = $(".table-holder");
  const tableSearchInput = $(".data-table-search-input");
  let watchListArray = [];

  /* 
    TODO: Change hardcoded token to real
  */
  const bearerToken =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NTQ0NzA2MCwiZXhwIjoxNjU1NTMzNDYwLCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.UBx2FnRog7iLcI4F7p97gCVV8RtxPEVyRsgsGq43qM50rn9SoZSenxCEW5xD2HNZl5rrS3YRZ27WMpUgbfUFm9vW5KFMshSGxJgOcbr4Yhb96iKqy09-K3MrrjkqzDrSlKFuVLBSA6kLxXqT8boZ-bkGHqUmrjWTrHiNyHuP4k4EKaqImYVOo2wAztj_fvnTeaJdmMADOS8YywGhNOf7Iyz2_uFCN8hAsqBBdUoaKqMbDRYJf8wmP5F-0F8n91JNULENNZ6IJgZCw-n731Ks4nmWbpAN78in44waJGrPjUKjdYlUK6kmNP3Wi0a3Lwduqi4_ziUF7o_M2f1BwKU4Gw";

  /* 
    Header for API call's
  */
  const myHeaders = new Headers({
    Authorization: `Bearer ${bearerToken}`,
    "Content-Type": "application/json",
    Cookie:
      "ApplicationGatewayAffinity=7a04715ad5252cab2e2e787b5376885f; ApplicationGatewayAffinityCORS=7a04715ad5252cab2e2e787b5376885f",
  });

  /* 
    Check if page has select for adding new tickers, if not, api calls will not started
  */
  if (!dashboardForm.length) {
    return;
  }

  /* 
    Call for getting watch list id and then call to getting data for table, based on watch list id
  */
  (() => {
    NProgress.start();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(watchlistsApiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        watchListId = data[0].watchlistId || null;
      })
      .then(() => {
        /* 
          Call for getting data for datatable
        */
        table = dataTableEl.DataTable({
          ajax: {
            url: `${watchListEntriesApiURL}/${watchListId}`,
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
            cache: true,
            type: "GET",
            dataSrc: function (data) {
              data.length
                ? tableParentBox.removeClass("hidden")
                : tableParentBox.addClass("hidden");
              NProgress.done();
              return data;
            },
          },
          destroy: true,
          bSort: false,
          bInfo: false,
          dom: '<"table-responsive"t>',
          bPaginate: false,
          columns: [
            { data: "instrumentName" },
            { data: "symbol" },
            {
              data: null,
              mRender: (row) => {
                return `
                    <input
                      type="text"
                      placeholder="Amount"
                      value="${row.amount}"
                      data-id="${row.instrumentId}"
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
                      data-id="${row.instrumentId}"
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
                      data-id="${row.instrumentId}"
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
                    <button class="btn-delete p-3 text-red500" data-id="${row.instrumentId}">
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
              const data = table.row($(this).parents("tr")).data();
              const newVal = (data.amount = $(this).val());

              const payload = {
                ...data,
                newVal,
              };

              tableEditRow(payload);
            });
            $(".field-open-price").on("change", function (e) {
              const data = table.row($(this).parents("tr")).data();
              const newVal = (data.openPrice = $(this).val());

              const payload = {
                ...data,
                newVal,
              };

              tableEditRow(payload);
            });
            $(".field-comment").on("change", function (e) {
              const data = table.row($(this).parents("tr")).data();
              const newVal = (data.comment = $(this).val());

              const payload = {
                ...data,
                newVal,
              };

              tableEditRow(payload);
            });
            $(".btn-delete").on("click", function (e) {
              tableDeleteRow(e.target.getAttribute("data-id"));
            });
          },
        });
      })
      .catch((error) => {
        console.log("getWatchlists error: ", error);
      });
  })();

  /* 
    Datatable initializing
  */
  table = dataTableEl.DataTable();
  table.destroy();

  /* 
    Search field for searching items in datatable
  */
  tableSearchInput.on("keyup", function () {
    table.search(this.value).draw();
  });

  /* 
    Form for adding new tickers from select
  */
  const select = new TomSelect(selectEl, {
    valueField: "instrumentId",
    labelField: "symbol",
    searchField: ["symbol", "name"],
    plugins: ["dropdown_input"],
    onChange: (value) => {
      watchListEntriesId = value;
      select.clearOptions();
      console.log("watchListArray old", watchListArray);
      const data = watchListArray.filter(
        (element) => element.instrumentId === +value
      );
      watchListArray = data;
      console.log("watchListArray new", watchListArray);
    },
    load: (query, callback) => {
      const url = `${instrumentsApiURL}/${encodeURIComponent(query)}`;
      NProgress.start();
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          watchListArray = json;
          callback(json);
          NProgress.done();
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

  /* 
    Event for call to api for adding new tickers
  */
  addWatchListEntriesBtn.on("click", () => {
    (() => {
      if (!watchListEntriesId || !watchListId) {
        return;
      }

      let raw = JSON.stringify({
        Amount: 1234,
        OpenPrice: 12.3,
        Comment: "hihihi",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      NProgress.start();

      fetch(
        `${watchListEntriesApiURL}/${watchListId}/${watchListEntriesId}`,
        requestOptions
      )
        .then((response) => response.text())
        .then(() => {
          select.clear();
          table.ajax.reload(null, false);
          NProgress.done();
        })
        .catch((error) => error);
    })();
  });

  /* 
    Remove table item
  */
  function tableDeleteRow(id) {
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    NProgress.start();

    fetch(`${watchListEntriesApiURL}/${watchListId}/${id}`, requestOptions)
      .then((response) => response.text())
      .then(() => {
        table.ajax.reload(null, false);
        NProgress.done();
      })
      .catch((error) => error);
  }

  /* 
    Edit table item
  */
  function tableEditRow(data) {
    const payload = JSON.stringify({
      Amount: +data.amount,
      OpenPrice: +data.openPrice,
      Comment: data.comment,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: payload,
      redirect: "follow",
    };

    NProgress.start();

    fetch(
      `${watchListEntriesApiURL}/${data.watchlistId}/${data.instrumentId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then(() => {
        table.ajax.reload(null, false);
        NProgress.done();
      })
      .catch((error) => error);
  }

  /* 
    jQuery mask for fiels
  */
  $(document).on("focus", ".field-amount", function () {
    $(this).mask("0000000000");
  });
  $(document).on("focus", ".field-open-price", function () {
    $(this).mask("00.0000");
  });
});
