$(document).ready(function(){
    //Scroll to element
    $("[data-scroll]").on("click", function(e) {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
        return false;
    });

    //Init swiper gallery
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.gallery-btn--next',
            prevEl: '.gallery-btn--prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
})