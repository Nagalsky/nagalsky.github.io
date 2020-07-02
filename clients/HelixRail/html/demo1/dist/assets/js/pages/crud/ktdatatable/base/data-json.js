"use strict";
// Class definition

var KTDatatableJsonRemoteDemo = (function() {
  // Private functions

  // basic demo
  var demo = function() {
    var datatable = $("#kt_datatable").KTDatatable({
      // datasource definition
      data: {
        type: "remote",
        source: "/html/demo1/dist/json/datatable-1.json",
        pageSize: 10
      },

      // layout definition
      layout: {
        scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
        footer: false // display/hide footer
      },

      // column sorting
      sortable: true,

      pagination: true,

      search: {
        input: $("#kt_datatable_search_query"),
        key: "generalSearch"
      },

      // columns definition
      columns: [
        {
          field: "RecordID",
          title: "#",
          sortable: false,
          width: 20,
          type: "number",
          selector: {
            class: ""
          },
          textAlign: "center"
        },
        {
          field: "OrderID",
          title: "Order ID"
        },
        {
          field: "Country",
          title: "Country",
          template: function(row) {
            return row.Country + " " + row.ShipCountry;
          }
        },
        {
          field: "ShipAddress",
          title: "Ship Address"
        },
        {
          field: "ShipDate",
          title: "Ship Date",
          type: "date",
          format: "MM/DD/YYYY"
        },
        {
          field: "Status",
          title: "Status",
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: {
                title: "Pending",
                class: " label-light-success"
              },
              2: {
                title: "Delivered",
                class: " label-light-primary"
              },
              3: {
                title: "Canceled",
                class: " label-light-primary"
              },
              4: {
                title: "Success",
                class: " label-light-success"
              },
              5: {
                title: "Info",
                class: " label-light-info"
              },
              6: {
                title: "Danger",
                class: " label-light-danger"
              },
              7: {
                title: "Warning",
                class: " label-light-warning"
              }
            };
            return (
              '<span class="label font-weight-bold label-lg' +
              status[row.Status].class +
              ' label-inline">' +
              status[row.Status].title +
              "</span>"
            );
          }
        },
        {
          field: "Type",
          title: "Type",
          autoHide: false,
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: {
                title: "Online",
                state: "danger"
              },
              2: {
                title: "Retail",
                state: "primary"
              },
              3: {
                title: "Direct",
                state: "success"
              }
            };
            return (
              '<span class="label label-' +
              status[row.Type].state +
              ' label-dot mr-2"></span><span class="font-weight-bold text-' +
              status[row.Type].state +
              '">' +
              status[row.Type].title +
              "</span>"
            );
          }
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 125,
          autoHide: false,
          overflow: "visible",
          template: function() {
            return '\
                        <div class="dropdown dropdown-inline">\
                            <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
                                <span class="svg-icon svg-icon-md">\
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                            <rect x="0" y="0" width="24" height="24"/>\
                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
                                        </g>\
                                    </svg>\
                                </span>\
                            </a>\
                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                                <ul class="navi flex-column navi-hover py-2">\
                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
                                        Choose an action:\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-print"></i></span>\
                                            <span class="navi-text">Print</span>\
                                        </a>\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-copy"></i></span>\
                                            <span class="navi-text">Copy</span>\
                                        </a>\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\
                                            <span class="navi-text">Excel</span>\
                                        </a>\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\
                                            <span class="navi-text">CSV</span>\
                                        </a>\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\
                                            <span class="navi-text">PDF</span>\
                                        </a>\
                                    </li>\
                                </ul>\
                            </div>\
                        </div>\
                    ';
          }
        }
      ]
    });

    $("#kt_datatable_search_status").on("change", function() {
      datatable.search(
        $(this)
          .val()
          .toLowerCase(),
        "Status"
      );
    });

    $("#kt_datatable_search_type").on("change", function() {
      datatable.search(
        $(this)
          .val()
          .toLowerCase(),
        "Type"
      );
    });

    $("#kt_datatable_search_status, #kt_datatable_search_type").selectpicker();
  };

  return {
    // public functions
    init: function() {
      demo();
    }
  };
})();

jQuery(document).ready(function() {
  KTDatatableJsonRemoteDemo.init();
});
