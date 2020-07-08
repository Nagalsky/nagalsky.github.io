"use strict";
var KTDatatablesDataSourceHtml = (function() {
  var dataJSONArray = JSON.parse(
    '[[1,"Trial Hole QCS", "CU1/1.216/DN","warning","07/08/2019 — 12:57 PM","success", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x"],[1,"Trial Hole QCS", "CU1/1.216/DN","warning","07/08/2019 — 12:57 PM","success", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x"],[1,"Trial Hole QCS", "CU1/1.216/DN","warning","07/08/2019 — 12:57 PM","success", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x"],[1,"Trial Hole QCS", "CU1/1.216/DN","warning","07/08/2019 — 12:57 PM","success", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x"],[1,"Trial Hole QCS", "CU1/1.216/DN","warning","07/08/2019 — 12:57 PM","success", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x", "cell just for scroll-x"]]'
  );

  var initTable1 = function() {
    var table = $("#kt_datatable");

    // begin first table
    table.DataTable({
      data: dataJSONArray,
      pageLength: 25,
      scrollX: true,
      scrollCollapse: true,
      dom: '<"top"i>rt<"bottom"flp><"clear">',
      select: {
        style: "multi",
        selector: "td:first-child .checkable"
      },
      headerCallback: function(thead, data, start, end, display) {
        thead.getElementsByTagName("th")[0].innerHTML = `
			<label class="checkbox checkbox-single checkbox-solid checkbox-primary mb-0">
				<input type="checkbox" value="" class="group-checkable"/>
				<span></span>
			</label>`;
      },
      columnDefs: [
        {
          targets: 0,
          orderable: false,
          render: function(data, type, full, meta) {
            return `
				<label class="checkbox checkbox-single checkbox-primary mb-0">
					<input type="checkbox" value="" class="checkable"/>
					<span></span>
				</label>`;
          }
        },
        {
          targets: 3,
          render: function(data) {
            var status = {
              warning: { title: "Partial", class: "label-warning" },
              success: { title: "ACCEPTED", class: "label-success bg-success-secondary" }
            };
            if (typeof status[data] === "undefined") {
              return data;
            }
            return (
              '<span class="label font-black label-lg text-uppercase ' +
              status[data].class +
              ' label-inline">' +
              status[data].title +
              "</span>"
            );
          }
        },
        {
          targets: 5,
          render: function(data) {
            var status = {
              warning: { title: "Partial", class: "label-warning" },
              success: { title: "ACCEPTED", class: "label-success bg-success-secondary" }
            };
            if (typeof status[data] === "undefined") {
              return data;
            }
            return (
              '<span class="label font-black label-lg text-uppercase ' +
              status[data].class +
              ' label-inline">' +
              status[data].title +
              "</span>"
            );
          }
        },
        {
          targets: -1,
          title: "Actions",
          orderable: false,
          render: function(data, type, full, meta) {
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

    $("#kt_datatable_wrapper").on("change", ".group-checkable", function() {
      var set = $(this)
        .closest(".dataTables_scroll")
        .find("td:first-child .checkable");
      var checked = $(this).is(":checked");

      $(set).each(function() {
        if (checked) {
          $(this).prop("checked", true);
          table.rows($(this).closest("tr")).select();
        } else {
          $(this).prop("checked", false);
          table.rows($(this).closest("tr")).deselect();
        }
      });
    });
  };

  return {
    //main function to initiate the module
    init: function() {
      initTable1();
    }
  };
})();

jQuery(document).ready(function() {
  KTDatatablesDataSourceHtml.init();
});
