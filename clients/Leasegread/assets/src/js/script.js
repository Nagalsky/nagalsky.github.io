//Init swiper account gallery
var swiper = new Swiper("#account-gallery", {
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    speed: 600,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});