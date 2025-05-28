document.addEventListener('DOMContentLoaded', function() {
    const consejoCards = document.querySelectorAll('.consejo-card');

    consejoCards.forEach(card => {
        const mostrarDetalleBtn = card.querySelector('.mostrar-detalle');
        const detalleDiv = card.querySelector('.detalle');
        const alertaBtn = card.querySelector('.alerta');

        mostrarDetalleBtn.addEventListener('click', function() {
            detalleDiv.classList.toggle('oculto');
            mostrarDetalleBtn.textContent = detalleDiv.classList.contains('oculto') ? 'Ver más' : 'Ocultar';
        });

        alertaBtn.addEventListener('click', function() {
            alert(`¡Entendido! Tendré más cuidado con ${card.querySelector('h2').textContent.toLowerCase()}.`);
        });

        // Animación sutil al cargar
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
            card.style.opacity = 1;
        }, 100 * Array.from(consejoCards).indexOf(card)); // Retardo para cada tarjeta
    });

    // Animación para el encabezado
    const header = document.querySelector('header');
    header.style.transform = 'translateY(-20px)';
    header.style.opacity = 0;
    setTimeout(() => {
        header.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
        header.style.transform = 'translateY(0)';
        header.style.opacity = 1;
    }, 300);
});
