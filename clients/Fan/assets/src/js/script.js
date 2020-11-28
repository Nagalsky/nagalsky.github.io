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