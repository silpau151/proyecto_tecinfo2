document.addEventListener('DOMContentLoaded', function() {
    const miBoton = document.getElementById('miBoton');

    if (miBoton) {
        miBoton.addEventListener('click', function() {
            alert('¡El botón ha sido ক্লিকado!');
            // Aquí puedes agregar más funcionalidades al botón
        });
    }
});
