document.addEventListener("DOMContentLoaded", function(){
    // 1. Obtener todos los elementos regalo para poder iterar sobre ellos
    const allGifts = document.querySelectorAll('.gift');
    const giftsContainer = document.querySelector('.gifts-container')

    // Función que pausa la animación en todos los elementos (excepto el activo)
    function pauseOtherGifts(elementToExclude) {
        allGifts.forEach(gift => {
            if (gift !== elementToExclude) {
                // Aplicar la clase .paused a todos los demás
                gift.classList.add('paused');
            }
        });
    }

    // Función que reanuda la animación en todos los elementos
    function resumeAllGifts() {
        allGifts.forEach(gift => {
            // Remover la clase .paused de todos
            gift.classList.remove('paused');
        });
    }

    // 2. Evento para cuando el ratón entra en un regalo (HOVER/MOUSEOVER)
    giftsContainer.addEventListener('mouseover', (event) => {
        const giftElement = event.target.closest('.gift');
        
        if (giftElement) {
            // Cuando el ratón está sobre un regalo, pausa todos los demás.
            pauseOtherGifts(giftElement);
            
            // El regalo activo ya detiene su animación por el :hover de CSS,
            // y fija el brillo máximo.
        }
    });

    // 3. Evento para cuando el ratón sale de un regalo (MOUSEOUT)
    giftsContainer.addEventListener('mouseout', (event) => {
        const giftElement = event.target.closest('.gift');
        
        if (giftElement) {
            // Cuando el ratón sale del regalo, reanuda la animación en todos.
            resumeAllGifts();
        }
        // NOTA: No necesitamos manejar aquí la lógica del click del popup (esa ya está separada).
    });

    // 4. Delegación de Eventos para el click (Mantenemos la lógica anterior de click)
    giftsContainer.addEventListener('click', (event) => {
        const giftElement = event.target.closest('.gift');
        
        if (giftElement) {
            const contentKey = giftElement.dataset.contentKey; 
            
            if (contentKey) {
                showPopup(contentKey);
            }
        }
    });
})