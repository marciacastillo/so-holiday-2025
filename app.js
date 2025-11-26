// La función que se ejecutará en cada cambio de orientación
function checkOrientation() {
    const isLandscape = window.innerHeight < window.innerWidth;
    
    // Aquí puedes añadir lógica de JavaScript si lo necesitas, 
    // pero el CSS ya maneja la visibilidad de manera más eficiente.
    
    // Ejemplo de cómo manejarías las clases si no usaras las media queries:
    /*
    const fullContainer = document.querySelector('.full-container');
    const rotateMessage = document.querySelector('.rotate-message');
    
    if (isLandscape) {
        fullContainer.style.display = 'flex';
        rotateMessage.style.display = 'none';
    } else {
        fullContainer.style.display = 'none';
        rotateMessage.style.display = 'flex';
    }
    */
    
    console.log(`Orientación actual: ${isLandscape ? 'Landscape' : 'Portrait'}`);
}

// 1. Ejecutar la función cuando la página se carga
document.addEventListener('DOMContentLoaded', checkOrientation);

// 2. Ejecutar la función cada vez que la ventana cambie de tamaño (incluyendo giros)
window.addEventListener('resize', checkOrientation);

// NOTA: Para este caso, el CSS con @media screen and (orientation: ...) 
// es la forma **más sencilla y performante** de hacer el cambio de visibilidad.
// El JS es útil si necesitas ejecutar código (ej. pausar un juego, guardar estado) 
// cuando la orientación cambia.