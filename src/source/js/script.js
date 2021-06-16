(function() {
    
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
    });

    const accordeon = document.querySelectorAll('.service__accordeon-item-icon');

    for(let elem of accordeon){
    elem.addEventListener('click', () => {
    elem.classList.toggle('accordeon__active');
    });
    }

}());