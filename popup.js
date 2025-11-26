document.addEventListener("DOMContentLoaded", function(){
    // Objeto que almacena el contenido para cada regalo. 
    // Es fácil de mantener y modificar.
    const GIFT_CONTENTS = {
        'mensaje1': `
            <h3>¡Felicitaciones!</h3>
            <p>Has abierto el regalo número uno. Aquí tienes un mensaje especial de agradecimiento.</p>
        `,
        'mensaje2': `
            <h3>¡Felicitaciones!</h3>
            <p>Has abierto el regalo número dos. Aquí tienes un mensaje especial de agradecimiento.</p>
        `,
        'mensaje3': `
            <h3>¡Felicitaciones!</h3>
            <p>Has abierto el regalo número tres. Aquí tienes un mensaje especial de agradecimiento.</p>
        `,
        'mensaje4': `
            <h3>¡Felicitaciones!</h3>
            <p>Has abierto el regalo número cuatro. Aquí tienes un mensaje especial de agradecimiento.</p>
        `,
        'mensaje5': `
            <h3>¡Felicitaciones!</h3>
            <p>Has abierto el regalo número cinco. Aquí tienes un mensaje especial de agradecimiento.</p>
        `,
        'mensaje6': `
            <h3>¡Felicitaciones!</h3>
            <p>Has abierto el regalo número seis. Aquí tienes un mensaje especial de agradecimiento.</p>
        `,
        'mensaje7': `
            <h3>¡Felicitaciones!</h3>
            <p>Has abierto el regalo número siete. Aquí tienes un mensaje especial de agradecimiento.</p>
        `,
    };

    // 1. Obtener referencias de los elementos del DOM
    const giftsContainer = document.querySelector('.gifts-container');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupBody = document.getElementById('popup-body');
    const closeButton = document.getElementById('close-popup');

    /**
     * Muestra el contenido del popup basado en la clave del regalo.
     * @param {string} key La clave del contenido (ej: 'mensaje1').
     */
    function showPopup(key) {
        // 1. Obtener el contenido del objeto GIFT_CONTENTS
        const content = GIFT_CONTENTS[key] || '<h3>Error</h3><p>Contenido no encontrado.</p>';
        
        // 2. Inyectar el contenido en el cuerpo del popup
        popupBody.innerHTML = content;
        
        // 3. Mostrar el popup añadiendo la clase 'active'
        popupOverlay.classList.add('active');
    }

    // 4. Delegación de Eventos en el contenedor principal
    // Esto es más eficiente que añadir un listener a cada uno de los 7 gifts.
    giftsContainer.addEventListener('click', (event) => {
        // Buscar el elemento .gift más cercano al click
        const giftElement = event.target.closest('.gift');
        
        if (giftElement) {
            // Obtener la clave del contenido usando .dataset
            const contentKey = giftElement.dataset.contentKey; 
            
            if (contentKey) {
                showPopup(contentKey);
            }
        }
    });

    // 5. Cerrar el popup al clickear el botón de cerrar
    closeButton.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
    });

    // 6. Cerrar el popup al clickear fuera (en el overlay)
    popupOverlay.addEventListener('click', (event) => {
        // Si el click fue directamente en el overlay (no en el contenido)
        if (event.target === popupOverlay) {
            popupOverlay.classList.remove('active');
        }
    });
})