let indiceCarrusel = 0;
const imagenes = document.querySelectorAll('.imagen-carrusel-header');

function mostrarImagenCarrusel(n) {
    imagenes.forEach((imagen, i) => {
        imagen.classList.remove('active');
        if (i === n) {
            imagen.classList.add('active');
        }
    });
}

function moverCarrusel(direccion) {
    indiceCarrusel += direccion;
    
    if (indiceCarrusel < 0) {
        indiceCarrusel = imagenes.length - 1;
    } else if (indiceCarrusel >= imagenes.length) {
        indiceCarrusel = 0;
    }

    mostrarImagenCarrusel(indiceCarrusel);
}

// Rotación automática (opcional)
setInterval(() => {
    moverCarrusel(1);
}, 5000);
