document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.getElementById('galeria');
    const leftArrow = document.getElementById('leftGaleria');
    const rightArrow = document.getElementById('rightGaleria');
    const wrapper = document.querySelector('.carousel-wrapper');

    if (galeria && leftArrow && rightArrow && wrapper) {
        leftArrow.addEventListener('click', function() {
            galeria.scrollLeft -= wrapper.offsetWidth;
        });

        rightArrow.addEventListener('click', function() {
            galeria.scrollLeft += wrapper.offsetWidth;
        });
    } else {
        console.error('No se encontraron los elementos necesarios para la galería.');
    }
});