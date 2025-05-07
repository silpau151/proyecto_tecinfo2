document.addEventListener('DOMContentLoaded', function() {
    const contenedoresImagen = document.querySelectorAll('.contenedor-imagen');

    contenedoresImagen.forEach(contenedor => {
        contenedor.addEventListener('click', function() {
            const imagen = this.querySelector('img');
            const rutaImagen = imagen.getAttribute('src');
            alert(`¡Imagen ক্লিকada! Ruta: ${rutaImagen}`);
            // Aquí puedes agregar funcionalidades más complejas, como mostrar la imagen en un modal
        });
    });
});
