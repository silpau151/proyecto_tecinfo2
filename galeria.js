document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen-contenedor');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            const imageUrl = this.querySelector('img').src;
            alert(`Has hecho clic en: ${imageUrl}`);
            // Aquí puedes agregar una funcionalidad más compleja, como abrir un modal con la imagen.
        });
    });
});
