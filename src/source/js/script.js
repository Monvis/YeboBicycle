// burgerMenu
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
});

// Slick slider ( jQuery )

$(function(){
    $('.slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });
})