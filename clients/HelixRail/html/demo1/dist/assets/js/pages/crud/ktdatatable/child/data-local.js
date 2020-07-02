"use strict";
// Class definition
var KTDatatableChildDataLocalDemo = (function() {
  // Private functions

  var subTableInit = function(e) {
    $("<div/>")
      .attr("id", "child_data_local_" + e.data.RecordID)
      .appendTo(e.detailCell)
      .KTDatatable({
        data: {
          type: "local",
          source: e.data.Orders,
          pageSize: 5
        },

        // layout definition
        layout: {
          scroll: true,
          height: 400,
          footer: false
        },

        sortable: true,

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
            title: "Form type"
          },
          {
            field: "StructureNumber",
            title: "Structure number"
          },
          {
            field: "QCSComplete",
            title: "QCS Complete",
            template: function(row) {
              var template = {
                1: {
                  title: "—",
                  class: " label-empty"
                },
                2: {
                  title: "PARTIAL",
                  class: " label-warning"
                }
              };
              return (
                '<span class="label font-black label-lg' +
                template[row.QCSComplete].class +
                ' label-inline">' +
                template[row.QCSComplete].title +
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
            title: "Signed off",
            template: function(row) {
              var template = {
                1: {
                  title: "—",
                  class: " label-empty"
                },
                2: {
                  title: "PARTIAL",
                  class: " label-warning"
                },
                3: {
                  title: "ACCEPTED",
                  class: " label-success bg-success-secondary"
                }
              };
              return (
                '<span class="label font-black label-lg' +
                template[row.SignedOff].class +
                ' label-inline">' +
                template[row.SignedOff].title +
                "</span>"
              );
            }
          }
        ]
      });
  };

  // demo initializer
  var mainTableInit = function() {
    var dataJSONArray = JSON.parse(
      `[
		  {"RecordID":1,"Foundation":"CU1/0.88/UP1","PlannedDate":"07/08/2019","CompletedDate":"10/08/2019","QCSUploaded":"0","LastUpload":"07/08/2019","QCSStatus":1,"SetOutToDesign":1,"SetOutToTolerances": 3,"CompletedToDesign": 1,"Completed": 3,"TQRaised": 3,"DeVegrequired": 3, "UXOclear": 3,"TrackMonitoring": 3,"ReadyForFoundation": 1,"Signedoff": 1, "Comments": "Archive", "Orders":[{"FormType":"Trial Hole QCS","StructureNumber":"CU1/1.216/DN","QCSComplete":2,"Uploaded":"07/08/2019 — 12:57 PM","SignedOff": 3}, {"FormType":"Trial Hole QCS2","StructureNumber":"CU1/1.216/DN2","QCSComplete":2,"Uploaded":"07/08/2019 — 12:57 PM","SignedOff": 3}, {"FormType":"Trial Hole QCS3","StructureNumber":"CU1/1.216/DN3","QCSComplete":2,"Uploaded":"07/08/2019 — 12:57 PM","SignedOff": 3}]},\n` +
        `{"RecordID":2,"Foundation":"CU1/0.88/UP2","PlannedDate":"11/08/2014","CompletedDate":"15/11/2020","QCSUploaded":"1","LastUpload":"07/08/2019","QCSStatus":2,"SetOutToDesign":1,"SetOutToTolerances": 3,"CompletedToDesign": 1,"Completed": 3,"TQRaised": 3,"DeVegrequired": 3, "UXOclear": 3,"TrackMonitoring": 3,"ReadyForFoundation": 1,"Signedoff": 1, "Comments": "Check, does this have to …", "Orders":[{"FormType":"Trial Hole QCS","StructureNumber":"CU1/1.216/DN","QCSComplete":2,"Uploaded":"07/08/2019 — 12:57 PM","SignedOff": 3}, {"FormType":"Trial Hole QCS2","StructureNumber":"CU1/1.216/DN2","QCSComplete":2,"Uploaded":"07/08/2019 — 12:57 PM","SignedOff": 3}, {"FormType":"Trial Hole QCS3","StructureNumber":"CU1/1.216/DN3","QCSComplete":2,"Uploaded":"07/08/2019 — 12:57 PM","SignedOff": 3}]},\n` +
        `{"RecordID":3,"Foundation":"CU1/0.88/UP3","PlannedDate":"07/04/2119","CompletedDate":"22/01/2022","QCSUploaded":"0","LastUpload":"07/08/2019","QCSStatus":2,"SetOutToDesign":1,"SetOutToTolerances": 3,"CompletedToDesign": 2,"Completed": 3,"TQRaised": 3,"DeVegrequired": 3, "UXOclear": 2,"TrackMonitoring": 3,"ReadyForFoundation": 1,"Signedoff": 1, "Comments": "Concrete barrier remove…", "Orders":[{"FormType":"Trial Hole QCS","StructureNumber":"CU1/1.216/DN","QCSComplete":2,"Uploaded":"07/08/2019 — 12:57 PM","SignedOff": 3}, {"FormType":"Trial Hole QCS2","StructureNumber":"CU1/1.216/DN2","QCSComplete":2,"Uploaded":"07/08/2019 — 12:57 PM","SignedOff": 3}, {"FormType":"Trial Hole QCS3","StructureNumber":"CU1/1.216/DN3","QCSComplete":2,"Uploaded":"07/08/2019 — 12:57 PM","SignedOff": 3}]}
	]`
    );

    var datatable = $("#kt_datatable").KTDatatable({
      // datasource definition
      data: {
        type: "local",
        source: dataJSONArray,
        pageSize: 10 // display 20 records per page
      },

      // layout definition
      layout: {
        scroll: false,
        height: null,
        footer: false
      },

      sortable: true,

      filterable: false,

      pagination: true,

      detail: {
        title: "Load sub table",
        content: subTableInit
      },

      search: {
        input: $("#kt_datatable_search_query"),
        key: "generalSearch"
      },

      // columns definition
      columns: [
        {
          field: "RecordID",
          title: "",
          sortable: false,
          width: 30,
          textAlign: "center"
        },
        {
          field: "Foundation",
          title: "Foundation #"
        },
        {
          field: "PlannedDate",
          title: "Planned date"
        },
        {
          field: "CompletedDate",
          title: "CompletedDate"
        },
        {
          field: "QCSUploaded",
          title: "QCS uploaded"
        },
        {
          field: "LastUpload",
          title: "LastUpload"
        },
        {
          field: "QCSStatus",
          title: "QCS status",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                title: "—",
                class: " label-empty"
              },
              2: {
                title: "PARTIAL",
                class: " label-warning"
              }
            };
            return (
              '<span class="label font-black label-lg' +
              template[row.QCSStatus].class +
              ' label-inline">' +
              template[row.QCSStatus].title +
              "</span>"
            );
          }
        },
        {
          field: "SetOutToDesign",
          title: "Set out to design",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                class: " table-badge-danger"
              },
              2: {
                class: " table-badge-success"
              }
            };
            return '<span class="table-badge' + template[row.SetOutToDesign].class + '">' + "</span>";
          }
        },
        {
          field: "SetOutToTolerances",
          title: "Set out to tolerances",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                class: " table-badge-danger"
              },
              2: {
                class: " table-badge-success"
              },
              3: {
                class: " table-badge-empty"
              }
            };
            return '<span class="table-badge' + template[row.SetOutToTolerances].class + '">' + "</span>";
          }
        },
        {
          field: "CompletedToDesign",
          title: "Completed to design",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                class: " table-badge-danger"
              },
              2: {
                class: " table-badge-success"
              },
              3: {
                class: " table-badge-empty"
              }
            };
            return '<span class="table-badge' + template[row.CompletedToDesign].class + '">' + "</span>";
          }
        },
        {
          field: "Completed",
          title: "Completed",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                class: " table-badge-danger"
              },
              2: {
                class: " table-badge-success"
              },
              3: {
                class: " table-badge-empty"
              }
            };
            return '<span class="table-badge' + template[row.Completed].class + '">' + "</span>";
          }
        },
        {
          field: "TQRaised",
          title: "TQ raised",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                class: " table-badge-danger"
              },
              2: {
                class: " table-badge-success"
              },
              3: {
                class: " table-badge-empty"
              }
            };
            return '<span class="table-badge' + template[row.TQRaised].class + '">' + "</span>";
          }
        },
        {
          field: "DeVegrequired",
          title: "De-Vegrequired",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                class: " table-badge-danger"
              },
              2: {
                class: " table-badge-success"
              },
              3: {
                class: " table-badge-empty"
              }
            };
            return '<span class="table-badge' + template[row.DeVegrequired].class + '">' + "</span>";
          }
        },
        {
          field: "UXOclear",
          title: "UXO clear",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                class: " table-badge-danger"
              },
              2: {
                class: " table-badge-success"
              },
              3: {
                class: " table-badge-empty"
              }
            };
            return '<span class="table-badge' + template[row.UXOclear].class + '">' + "</span>";
          }
        },
        {
          field: "TrackMonitoring",
          title: "Track monitoring",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                class: " table-badge-danger"
              },
              2: {
                class: " table-badge-success"
              },
              3: {
                class: " table-badge-empty"
              }
            };
            return '<span class="table-badge' + template[row.TrackMonitoring].class + '">' + "</span>";
          }
        },
        {
          field: "ReadyForFoundation",
          title: "Ready for foundation",
          // callback function support for column rendering
          template: function(row) {
            var template = {
              1: {
                class: " table-badge-danger"
              },
              2: {
                class: " table-badge-success"
              },
              3: {
                class: " table-badge-empty"
              }
            };
            return '<span class="table-badge' + template[row.ReadyForFoundation].class + '">' + "</span>";
          }
        },
        {
          field: "Comments",
          title: "Comments"
        },

        {
          field: "Actions",
          title: "",
          sortable: false,
          width: "auto",
          template: function() {
            return `
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
    // Public functions
    init: function() {
      // init dmeo
      mainTableInit();
    }
  };
})();

jQuery(document).ready(function() {
  KTDatatableChildDataLocalDemo.init();
});
