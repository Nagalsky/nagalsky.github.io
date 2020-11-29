//Initial swiper card gallery
var mySwiper = new Swiper('.fundraise-cards-gallery', {
    loop: true,
    spaceBetween: 21,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor: true,

    navigation: {
        nextEl: '[data-arrow-slide="next"]',
        prevEl: '[data-arrow-slide="prev"]',
    },
})

var mySwiper2 = new Swiper('.fundraise-cards-gallery2', {
    loop: true,
    spaceBetween: 21,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor: true,

    navigation: {
        nextEl: '[data-arrow-slide="next2"]',
        prevEl: '[data-arrow-slide="prev2"]',
    },
})

var galleryThumbs = new Swiper('.gallery-box-cards-thumbs', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    noSwiping: true,
    autoHeight: true,
});
var galleryTop = new Swiper('.gallery-box-cards', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    navigation: {
        nextEl: '[data-arrow-slide="box-card-next"]',
        prevEl: '[data-arrow-slide="box-card-prev"]',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 32,
        },
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});



var galleryThumbnailsBottom = new Swiper('.gallery-thumbnails-bottom', {
    spaceBetween: 10,
    slidesPerView: 6,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        640: {
            slidesPerView: 8,
        },
    },
});
var galleryThumbnailsTop = new Swiper('.gallery-thumbnails-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.arrow--next',
        prevEl: '.arrow--prev',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    thumbs: {
        swiper: galleryThumbnailsBottom,
    },
});

$(document).ready(function() {
    //Comments form
    $(function() {
        $('.comments__btn-submit').attr('disabled', true);

        $('.comment__form textarea').on('keyup', function() {
            var textarea_value = $(".comment__form textarea").val();

            if (textarea_value != '') {
                $('.comments__btn-submit').attr('disabled', false);
            } else {
                $('.comments__btn-submit').attr('disabled', true);
            }
        });
    });

    //Initial rangeslider
    $(function() {

        var $document = $(document);
        var selector = '[data-rangeslider]';
        var $element = $(selector);

        // For ie8 support
        var textContent = ('textContent' in document) ? 'textContent' : 'innerText';

        // Example functionality to demonstrate a value feedback
        function valueOutput(element) {
            var value = element.value;
            var output = element.parentNode.getElementsByTagName('output')[0] || element.parentNode.parentNode.getElementsByTagName('output')[0];
            output[textContent] = value;
        }

        $document.on('input', 'input[type="range"], ' + selector, function(e) {
            valueOutput(e.target);
        });

        // Example functionality to demonstrate disabled functionality
        $document.on('click', '#js-example-disabled button[data-behaviour="toggle"]', function(e) {
            var $inputRange = $(selector, e.target.parentNode);

            if ($inputRange[0].disabled) {
                $inputRange.prop("disabled", false);
            } else {
                $inputRange.prop("disabled", true);
            }
            $inputRange.rangeslider('update');
        });

        // Example functionality to demonstrate programmatic value changes
        $document.on('click', '#js-example-change-value button', function(e) {
            var $inputRange = $(selector, e.target.parentNode);
            var value = $('input[type="number"]', e.target.parentNode)[0].value;

            $inputRange.val(value).change();
        });

        // Example functionality to demonstrate programmatic attribute changes
        $document.on('click', '#js-example-change-attributes button', function(e) {
            var $inputRange = $(selector, e.target.parentNode);
            var attributes = {
                min: $('input[name="min"]', e.target.parentNode)[0].value,
                max: $('input[name="max"]', e.target.parentNode)[0].value,
                step: $('input[name="step"]', e.target.parentNode)[0].value
            };

            $inputRange.attr(attributes);
            $inputRange.rangeslider('update', true);
        });

        // Example functionality to demonstrate destroy functionality
        $document
            .on('click', '#js-example-destroy button[data-behaviour="destroy"]', function(e) {
                $(selector, e.target.parentNode).rangeslider('destroy');
            })
            .on('click', '#js-example-destroy button[data-behaviour="initialize"]', function(e) {
                $(selector, e.target.parentNode).rangeslider({ polyfill: false });
            });

        // Example functionality to test initialisation on hidden elements
        $document
            .on('click', '#js-example-hidden button[data-behaviour="toggle"]', function(e) {
                var $container = $(e.target.previousElementSibling);
                $container.toggle();
            });

        // Basic rangeslider initialization
        $element.rangeslider({

            // Deactivate the feature detection
            polyfill: false,

            // Callback function
            onInit: function() {
                valueOutput(this.$element[0]);
            },

            // Callback function
            onSlide: function(position, value) {
                console.log('onSlide');
                console.log('position: ' + position, 'value: ' + value);
            },

            // Callback function
            onSlideEnd: function(position, value) {
                console.log('onSlideEnd');
                console.log('position: ' + position, 'value: ' + value);
            }
        });

    });

    $(function() {
        $('input[type="range"]').rangeslider({
            polyfill: false
        });
    });

});