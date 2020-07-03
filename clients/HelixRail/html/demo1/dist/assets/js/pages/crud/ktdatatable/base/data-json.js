"use strict";
// Class definition

var KTDatatableJsonRemoteDemo = (function() {
  // Private functions

  var fakeJson = [
    {
      RecordID: 1,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 2,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 3,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 4,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 5,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 6,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 7,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 8,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 9,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 10,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 11,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 12,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 13,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 14,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 15,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 16,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 17,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 18,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 19,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 20,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 21,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 22,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 23,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 24,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 25,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 26,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 27,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 28,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 29,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 30,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 31,
      FormType: "Trial Hole QCS1",
      StructureNumber: "CU1/1.216/DN1",
      QCSComplete: 1,
      Uploaded: "07/08/2019 — 12:57 PM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 32,
      FormType: "Trial Hole QCS2",
      StructureNumber: "CU1/1.216/DN2",
      QCSComplete: 1,
      Uploaded: "05/02/2017 — 13:22 AM",
      SignedOff: 1,
      Actions: null
    },
    {
      RecordID: 33,
      FormType: "Trial Hole QCS3",
      StructureNumber: "CU1/1.216/DN3",
      QCSComplete: 1,
      Uploaded: "01/11/2014 — 07:22 PM",
      SignedOff: 1,
      Actions: null
    }
  ];

  // basic demo
  var demo = function() {
    var datatable = $("#kt_datatable").KTDatatable({
      // datasource definition
      data: {
        type: "local",
        source: fakeJson,
        pageSize: 30
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
          field: "FormType",
          title: "Form type",
          autoHide: false
        },
        {
          field: "StructureNumber",
          title: "Structure number"
        },
        {
          field: "QCSComplete",
          title: "QCS Complete",
          autoHide: false,
          template: function(row) {
            var status = {
              1: {
                title: "PARTIAL",
                class: " label-warning"
              }
            };
            return (
              '<span class="label font-black label-lg' +
              status[row.QCSComplete].class +
              ' label-inline">' +
              status[row.QCSComplete].title +
              "</span>"
            );
          }
        },
        {
          field: "Uploaded",
          title: "Uploaded"
        },
        {
          field: "SignedOff",
          title: "Signed Off",
          autoHide: false,
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: {
                title: "ACCEPTED",
                class: " label-success bg-success-secondary"
              }
            };
            return (
              '<span class="label font-black label-lg' +
              status[row.SignedOff].class +
              ' label-inline">' +
              status[row.SignedOff].title +
              "</span>"
            );
          }
        },
        {
          field: "Actions",
          title: "",
          sortable: false,
          width: 125,
          autoHide: false,
          overflow: "visible",
          template: function() {
            return `
                <div class="text-right">
                    <div class="dropdown dropdown-inline">
                        <button class="btn btn-icon btn-icon-table" data-toggle="dropdown"
                        aria-expanded="false" type="button">
                        </button>

                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-md">
                        <ul class="navi navi-hover">
                            <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="svg-icon svg-icon-dark-50 navi-icon">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g data-name="Layer 2">
                                    <g data-name="edit">
                                        <rect width="24" height="24" opacity="0" />
                                        <path
                                        d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z" />
                                    </g>
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                                </span>
                                <span class="navi-text">Edit</span>
                            </a>
                            </li>
                            <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="svg-icon svg-icon-dark-50 navi-icon">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g data-name="Layer 2">
                                    <g data-name="edit-2">
                                        <rect width="24" height="24" opacity="0" />
                                        <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z" />
                                        <path
                                        d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z" />
                                    </g>
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                                </span>
                                <span class="navi-text">Edit Design</span>
                            </a>
                            </li>
                            <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="svg-icon svg-icon-dark-50 navi-icon">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g data-name="Layer 2">
                                    <g data-name="clipboard">
                                        <rect width="24" height="24" opacity="0" />
                                        <path
                                        d="M18 5V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM8 4h8v4H8V4zm11 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a1 1 0 0 1 1 1z" />
                                    </g>
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                                </span>
                                <span class="navi-text">Schedule a Job</span>
                            </a>
                            </li>
                            <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="svg-icon svg-icon-dark-50 navi-icon">
                                <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g data-name="Layer 2">
                                    <g data-name="layout">
                                        <rect width="24" height="24" opacity="0" />
                                        <path
                                        d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1zM5 18v-8h6v9H6a1 1 0 0 1-1-1zm13 1h-5v-9h6v8a1 1 0 0 1-1 1z" />
                                    </g>
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                                </span>
                                <span class="navi-text">View forms</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            `;
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
