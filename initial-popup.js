 // --- Lógica para el Popup Inicial ---
const INITIAL_POPUP_KEY = 'initialPopupSeen';
const initialPopupOverlay = document.getElementById('initial-popup');
const acceptButton = document.getElementById('accept-btn');

/**
 * Verifica si el usuario ya vio el popup y lo muestra si es la primera vez.
 */
function checkAndShowInitialPopup() {
    // 1. Verificar si la clave existe en localStorage
    //desactivado por el momento
    //const hasSeenPopup = localStorage.getItem(INITIAL_POPUP_KEY);
    const hasSeenPopup = false; 

    if (!hasSeenPopup) {
        // 2. Si NO lo ha visto, mostramos el popup
        initialPopupOverlay.classList.add('show');
        document.querySelector("body").classList.add("popup-opened");
        document.querySelector("body").classList.add("initial-popup-opened");


    }
}

/**
 * Oculta el popup y marca que ya fue visto en localStorage.
 */
function hideAndMarkInitialPopup() {
    // Ocultar el popup
    initialPopupOverlay.classList.remove('show');
        document.querySelector("body").classList.remove("popup-opened");
        document.querySelector("body").classList.remove("initial-popup-opened");

    
    // Marcar en localStorage para que no se muestre de nuevo
    // Usamos 'true' como valor, podría ser una fecha si quisieras que expirara
    localStorage.setItem(INITIAL_POPUP_KEY, 'true');
}

// 3. Listener para el botón "Entendido"
acceptButton.addEventListener('click', hideAndMarkInitialPopup);

// 4. Ejecutar la función cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', () => {
    // Ejecutar el chequeo de orientación (si aún está en el JS)
    // checkOrientation(); // <-- Si lo mantuviste en el JS
    
    // Mostrar el popup inicial (si es la primera visita)
    checkAndShowInitialPopup();
});

// Nota sobre localStorage: El usuario puede borrar los datos de su navegador,
// o podrías usar sessionStorage si solo quieres que se muestre una vez por pestaña/sesión.
