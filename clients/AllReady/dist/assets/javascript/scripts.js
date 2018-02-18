$(document).ready(function(){

	/* ======== Expanded form action ======== */
	$('.form-expanded__field').focus(function(){
  	$('.form-expanded').addClass('form-expanded--opened');
		$('.header__inner').addClass('header__inner--has-expanded-form');
  });
	$(document).click(function(event) {
		if(!$(event.target).closest('.form-expanded').length) {
	    if($('.form-expanded').hasClass("form-expanded--opened")) {
	        $('.form-expanded').removeClass('form-expanded--opened');
					$('.header__inner').removeClass('header__inner--has-expanded-form');
	    }
	  };
	});

	/* ======== Expanded sidebar action ======== */
	$('.aside__list__link--toggle').on('click', function (e) {
  	e.preventDefault();
		$('.aside').toggleClass('aside--opened');
		$('.wrapper__inner').toggleClass('wrapper__inner--has-expanded-aside');
		$('.aside__link--has-collapse').addClass('collapsed');
		$('.aside .collapse').removeClass('show');
	});
	$('.aside__list__link--close-menu').on('click', function (e) {
  	e.preventDefault();
		$('.aside').removeClass('aside--opened');
		$('.wrapper__inner').removeClass('wrapper__inner--has-expanded-aside');
		$('.aside__link--has-collapse').addClass('collapsed');
		$('.aside .collapse').removeClass('show');
	});
	$(document).click(function(event) {
		if(!$(event.target).closest('.aside').length) {
	    if($('.aside').hasClass("aside--opened")) {
	        $('.aside').removeClass('aside--opened');
					$('.wrapper__inner').removeClass('wrapper__inner--has-expanded-aside');
					$('.aside .collapse').removeClass('show');
	    }
	  };
	});

	/* ======== Collapse toggle ======== */
	$('.collapse-toggle').on('click', function (e) {
  	e.preventDefault();
		$('.collapse-item').toggleClass('collapse-item--in');
	});



	/* ======== Popover initial - http://protip.rocks/ ======== */
	$.protip();

	/* ======== wysiwyg initial - https://summernote.org/getting-started ======== */
	$('.wysiwyg-editor').summernote({
		height: 140,
  	minHeight: null,
  	maxHeight: null,
  	focus: true
	});

	/* ======== Datepicker initial - https://www.npmjs.com/package/bootstrap-datepicker ======== */
	$('.datepicker').datepicker();

	/* ======== Table drag and drop - http://demo.itsolutionstuff.com/demo/demo-jquery-draggable-sortable-table-rows-example-demo-with-bootstrapexample.html ======== */
	$('.table--drag tbody').sortable();

	$(".table-sort-btn-up").click(function(e){
    var row = $(this).parents("tr:first");
    row.insertBefore(row.prev());
  });
	$(".table-sort-btn-down").click(function(e){
    var row = $(this).parents("tr:first");
    row.insertAfter(row.next());
  });


});
