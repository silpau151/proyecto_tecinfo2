document.addEventListener('DOMContentLoaded', () => {
    const consejos = document.querySelectorAll('.consejo');
    const botonesAccion = document.querySelectorAll('.accion');

    // Animación de entrada de los consejos
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mostrar');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // La animación se activa cuando el 50% del elemento es visible

    consejos.forEach(consejo => {
        observer.observe(consejo);
    });

    // Interacción de los botones
    botonesAccion.forEach(boton => {
        boton.addEventListener('mouseover', () => {
            boton.style.transform = 'scale(1.05)';
            boton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.4)';
        });

        boton.addEventListener('mouseout', () => {
            boton.style.transform = 'scale(1)';
            boton.style.boxShadow = 'none';
        });

        boton.addEventListener('click', (event) => {
            const consejoNumero = event.target.parentNode.dataset.consejo;
            alert(`Has hecho clic en el consejo número ${consejoNumero}. ¡Recuerda tener precaución!`);
        });
    });
});
