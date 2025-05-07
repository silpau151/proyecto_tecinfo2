document.addEventListener('DOMContentLoaded', function() {
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    const carruselLista = document.querySelector('.carrusel-lista');
    const carruselItems = document.querySelectorAll('.carrusel-item');
    const botonAnterior = document.querySelector('.anterior');
    const botonSiguiente = document.querySelector('.siguiente');

    let indiceActual = 0;
    const numeroItems = carruselItems.length;

    function mostrarItem(indice) {
        if (indice < 0) {
            indiceActual = numeroItems - 1;
        } else if (indice >= numeroItems) {
            indiceActual = 0;
        } else {
            indiceActual = indice;
        }

        const translateX = -indiceActual * 100 + '%';
        carruselLista.style.transform = `translateX(${translateX})`;
    }

    botonAnterior.addEventListener('click', () => {
        mostrarItem(indiceActual - 1);
    });

    botonSiguiente.addEventListener('click', () => {
        mostrarItem(indiceActual + 1);
    });

    // Opcional: Autoplay del carrusel
    // let autoplayInterval = setInterval(() => {
    //     mostrarItem(indiceActual + 1);
    // }, 3000); // Cambia de imagen cada 3 segundos

    // Opcional: Detener el autoplay al pasar el ratón
    // carruselContenedor.addEventListener('mouseenter', () => {
    //     clearInterval(autoplayInterval);
    // });

    // carruselContenedor.addEventListener('mouseleave', () => {
    //     autoplayInterval = setInterval(() => {
    //         mostrarItem(indiceActual + 1);
    //     }, 3000);
    // });

    // Mostrar la primera imagen al cargar la página
    mostrarItem(indiceActual);
});
