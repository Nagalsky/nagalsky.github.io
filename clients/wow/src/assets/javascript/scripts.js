$(document).ready(function(){

	//Slick gallery initial
	$('.gallery').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		pauseOnFocus: false,
		pauseOnHover: false
	});
	$('.gallery-thumbnails').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$(".gallery-thumbnails, .gallery").slick("unslick");
		$('.gallery').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			pauseOnFocus: false,
			pauseOnHover: false
		});
		$('.gallery-thumbnails').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			focusOnSelect: true,
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		  ]
		});
  });


	//Magnific lighbox initial
	$('.lighbox-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.lighbox-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	//Input type file
	$(function() {

	  // We can attach the `fileselect` event to all file inputs on the page
	  $(document).on('change', ':file', function() {
	    var input = $(this),
	        numFiles = input.get(0).files ? input.get(0).files.length : 1,
	        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	    input.trigger('fileselect', [numFiles, label]);
	  });

	  // We can watch for our custom `fileselect` event like this
	  $(document).ready( function() {
	      $(':file').on('fileselect', function(event, numFiles, label) {

	          var input = $(this).parents('.input-group').find(':text'),
	              log = numFiles > 1 ? numFiles + ' files selected' : label;

	          if( input.length ) {
	              input.val(log);
	          } else {
	              if( log ) alert(log);
	          }

	      });
	  });

	});

	$('.btn-number').click(function(e){
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {

            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {

    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }

});


});
