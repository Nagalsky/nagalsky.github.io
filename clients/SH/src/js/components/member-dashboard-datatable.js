$(document).ready(() => {
  const el = $("#member-dashboard-datatable");
  const tableParentBox = $(".datatable-holder");
  const table = el.DataTable({
    ajax: "https://nagalsky.github.io/clients/ajax-data/member-dashboard.txt",
    initComplete: () => {
      tableParentBox.removeClass("before-initialize");
    },
    bSort: false,
    bInfo: false,
    dom: '<"table-responsive"t><"bottom"ilp>',
    pageLength: 5,
    lengthMenu: ["All"],
    bLengthChange: true,
    bPaginate: false,
    oLanguage: {
      sLengthMenu: "_MENU_",
    },
    columns: [{ data: "companyName" }],
  });

  $(".data-table-search-box input").on("keyup", function () {
    table.search(this.value).draw();
  });
});
