$(document).ready(() => {
  const el = $("#member-dashboard-datatable");
  const tableParentBox = $(".datatable-holder");
  const tableSearchInput = $(".data-table-search-input");
  const apiURL =
    "https://nagalsky.github.io/clients/ajax-data/member-dashboard.txt";

  const table = el.DataTable({
    ajax: apiURL,
    initComplete: () => {
      tableParentBox.removeClass("before-initialize");
    },
    bSort: false,
    bInfo: false,
    dom: '<"table-responsive"t>',
    bPaginate: false,
    columns: [
      { data: "companyName" },
      { data: "symbol" },
      {
        mData: "amount",
        mRender: (data) => {
          return `
            <input
              type="text"
              placeholder="Amount"
              value="${data}"
              class="field-amount block w-full rounded border border-solid border-gray300 bg-white px-3 py-1.5 font-normal transition ease-in-out placeholder:text-gray400 focus:border-blue500 focus:outline-none"
            />
        `;
        },
      },
      {
        mData: "openPrice",
        mRender: (data) => {
          return `
            <input
              type="text"
              placeholder="Open price"
              value="${data}"
              class="field-open-price block w-full rounded border border-solid border-gray300 bg-white px-3 py-1.5 font-normal transition ease-in-out placeholder:text-gray400 focus:border-blue500 focus:outline-none"
            />
        `;
        },
      },
      {
        mData: "comment",
        mRender: (data) => {
          return `
            <textarea
              placeholder="Comment"
              class="field-comment block w-full rounded border border-solid border-gray300 bg-white px-3 py-1.5 font-normal transition ease-in-out placeholder:text-gray400 focus:border-blue500 focus:outline-none resize-none"
            >${data}</textarea>
        `;
        },
      },
      {
        orderable: false,
        data: null,
        mRender: () => {
          return `
            <div class="text-center">
              <button class="p-3 text-red500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          `;
        },
      },
    ],
    drawCallback: () => {
      $(".field-amount").on("change", function () {
        console.log("field-amount value: ", $(this).val());
      });
      $(".field-open-price").on("change", function () {
        console.log("field-open-price value: ", $(this).val());
      });
      $(".field-comment").on("change", function () {
        console.log("field-comment value: ", $(this).val());
      });
    },
  });

  tableSearchInput.on("keyup", function () {
    table.search(this.value).draw();
  });
});
