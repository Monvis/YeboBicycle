(function() {
    
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
    });
}());

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination

    pagination: {
        el: '.swiper-pagination',
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
  
    // Navigation arrows

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});