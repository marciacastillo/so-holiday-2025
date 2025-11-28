// --- LÓGICA DE LA LINTERNA ---
const torchOverlay = document.querySelector('body:not(.popup-opened) .torch-overlay');

// La función principal que se ejecuta cada vez que el ratón se mueve
function moveTorch(event) {
    if(!document.querySelector("body").classList.contains("popup-opened")){
    // 1. Obtener las coordenadas del ratón
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // 2. Definir los parámetros del gradiente
    const lightRadius = '80px'; // Radio de la parte transparente (luz)
    const darknessStart = '150px'; // Donde comienza la oscuridad

    // 3. Crear el nuevo estilo de background-image
    // Usamos las coordenadas del ratón (mouseX, mouseY) para posicionar el centro del gradiente
    const newBackground = `
        radial-gradient(circle at ${mouseX}px ${mouseY}px, 
            transparent ${lightRadius}, 
            rgba(0, 0, 0, 0.7) ${darknessStart} 
        )
    `;

    // 4. Aplicar el nuevo estilo
    torchOverlay.style.backgroundImage = newBackground;
    }
    
}

// 5. Agregar el listener del evento mousemove
document.addEventListener('mousemove', moveTorch);