document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.imagen-contenedor');
    let lightbox = null; // Variable para almacenar el elemento lightbox

    // Función para crear y mostrar el lightbox
    function openLightbox(imageSrc, imageAlt) {
        // Si el lightbox ya existe, lo eliminamos para evitar duplicados
        if (lightbox) {
            document.body.removeChild(lightbox);
            lightbox = null;
        }

        lightbox = document.createElement('div');
        lightbox.id = 'lightbox'; // Asignar un ID para futuros estilos
        lightbox.classList.add('lightbox'); // Asignar una clase para estilos
        lightbox.innerHTML = `
            <span class="close-button">&times;</span>
            <img src="${imageSrc}" alt="${imageAlt}" class="lightbox-content">
        `;
        document.body.appendChild(lightbox);

        // Mostrar el lightbox
        setTimeout(() => { // Pequeño retraso para la transición CSS
            lightbox.classList.add('active');
        }, 10);

        // Cerrar lightbox al hacer clic fuera de la imagen o en el botón de cerrar
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox || event.target.classList.contains('close-button')) {
                closeLightbox();
            }
        });

        // Cerrar lightbox con la tecla ESC
        document.addEventListener('keydown', handleEscapeKey);
    }

    // Función para cerrar el lightbox
    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            lightbox.addEventListener('transitionend', () => { // Espera la transición antes de remover
                if (lightbox && !lightbox.classList.contains('active')) { // Asegúrate de que no se ha vuelto a activar
                     document.body.removeChild(lightbox);
                     lightbox = null;
                }
            }, { once: true }); // Ejecutar el listener solo una vez
            document.removeEventListener('keydown', handleEscapeKey);
        }
    }

    // Manejar la tecla ESC para cerrar el lightbox
    function handleEscapeKey(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    }

    // Añadir event listeners a cada contenedor de imagen
    imageContainers.forEach(container => {
        const image = container.querySelector('img');
        const imageSrc = image.src;
        const imageAlt = image.alt;

        container.addEventListener('click', () => {
            openLightbox(imageSrc, imageAlt);
        });
    });

    // --- Estilos de Lightbox adicionales (se pueden añadir directamente al CSS) ---
    // Si quieres que el lightbox aparezca con una animación suave, añade esto a tu archivo CSS
    const lightboxStyles = `
        .lightbox {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro semitransparente */
            z-index: 1000;
            opacity: 0; /* Inicialmente invisible */
            visibility: hidden; /* Oculto para no interferir con clics */
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .lightbox.active {
            opacity: 1;
            visibility: visible;
        }

        .lightbox-content {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain; /* Asegura que la imagen completa sea visible */
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            transform: scale(0.8); /* Pequeño efecto de escala */
            transition: transform 0.3s ease;
        }

        .lightbox.active .lightbox-content {
            transform: scale(1);
        }

        .close-button {
            position: absolute;
            top: 20px;
            right: 30px;
            color: white;
            font-size: 40px;
            cursor: pointer;
            z-index: 1001; /* Asegura que esté sobre la imagen */
            transition: color 0.2s ease;
        }

        .close-button:hover {
            color: #ccc;
        }
    `;

    // Añadir los estilos del lightbox directamente al head del documento
    // (Alternativamente, puedes copiarlos en tu archivo 'estilos_galeria.css')
    const styleElement = document.createElement('style');
    styleElement.textContent = lightboxStyles;
    document.head.appendChild(styleElement);
});
