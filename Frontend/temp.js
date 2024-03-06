document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.mySwiper', {
        // Your Swiper options go here
        slidesPerView: 1, // Number of slides to show in the viewport
        spaceBetween: 20, // Space between slides
        loop: true, // Enable loop mode
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Allow pagination bullets to be clickable
        },
    });

    mySwiper.on('slideChange', function () {
        var previousSlide = document.querySelector('.swiper-slide-prev');
        var currentSlide = document.querySelector('.swiper-slide-active');

        if (previousSlide) {
            previousSlide.style.opacity = 0;
        }

        currentSlide.style.opacity = 1;
    });
});
