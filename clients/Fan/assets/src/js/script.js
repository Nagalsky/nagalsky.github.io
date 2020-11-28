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