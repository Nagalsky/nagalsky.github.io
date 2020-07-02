"use strict";
// Class definition

var KTDatatableAutoColumnHideDemo = (function() {
  // Private functions

  var data = [
    {
      RecordID: 1,
      Foundation: "CU1/0.88/UP",
      PlannedDate: "07/08/2019",
      CompletedDate: "10/08/2019",
      QCSUploaded: "1",
      ShipName: "Gerhold Inc",
      ShipAddress: "698 Oriole Pass",
      CompanyEmail: "hboule0@hp.com",
      CompanyAgent: "Hayes Boule",
      CompanyName: "Casper-Kerluke",
      Currency: "BRL",
      Notes: "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
      Department: "Shoes",
      Website: "thetimes.co.uk",
      Latitude: -7.0179497,
      Longitude: -52.3613378,
      ShipDate: "10/15/2017",
      PaymentDate: "2016-07-28 03:44:46",
      TimeZone: "America/Santarem",
      TotalPayment: "$563997.38",
      Gender: "M",
      Status: 5,
      Type: 1,
      Actions: null
    }
  ];

  // basic demo
  var demo = function() {
    var datatable = $("#kt_datatable").KTDatatable({
      // datasource definition
      data: {
        type: "local",
        source: data,
        pageSize: 10,
        saveState: false,
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true
      },

      layout: {
        scroll: false
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
          field: "Foundation",
          title: "Foundation #"
        },
        {
          field: "PlannedDate",
          title: "Planned date"
        },
        {
          field: "CompletedDate",
          title: "Completed date"
        },
        {
          field: "QCSUploaded",
          title: "QCS uploaded"
        },
        {
          field: "CompanyName",
          title: "Company Name",
          width: "auto"
        },
        {
          field: "ShipAddress",
          title: "Ship Address"
        },
        {
          field: "Website",
          title: "Website"
        },
        {
          field: "TotalPayment",
          title: "Payment"
        },
        {
          field: "Notes",
          title: "Notes",
          width: 300
        },
        {
          field: "Status",
          title: "Status",
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: { title: "Pending", class: "label-light-primary" },
              2: { title: "Delivered", class: " label-light-danger" },
              3: { title: "Canceled", class: " label-light-primary" },
              4: { title: "Success", class: " label-light-success" },
              5: { title: "Info", class: " label-light-info" },
              6: { title: "Danger", class: " label-light-danger" },
              7: { title: "Warning", class: " label-light-warning" }
            };
            return (
              '<span class="label label-lg font-weight-bold' +
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
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: { title: "Online", state: "danger" },
              2: { title: "Retail", state: "primary" },
              3: { title: "Direct", state: "success" }
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
          title: "",
          sortable: false,
          width: 125,
          overflow: "visible",
          autoHide: false,
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
  KTDatatableAutoColumnHideDemo.init();
});
