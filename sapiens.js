/* ==================================================
   SAPIENS FRAMEWORK - SCRIPT v4.0
   Motor de Layout Inteligente y Animaciones
   ================================================== */

(function (window) {
    "use strict";

    const Sapiens = {};

    /**
     * Verifica una diapositiva individual para detectar desbordamiento (overflow) o falta de contenido (underflow) y aplica las clases necesarias.
     * @param {HTMLElement} slide - El elemento de la diapositiva a verificar.
     */
    function checkSlideLayout(slide) {
        const slideBody = slide.querySelector('.slide-body');
        if (!slideBody) return;

        // Asegurar que los estilos estén calculados
        window.getComputedStyle(slideBody);

        const bodyHeight = slideBody.clientHeight;
        // Calcular la altura del contenido sumando las alturas de los hijos directos.
        // Esto es más confiable que scrollHeight para contenedores flex/grid.
        const contentHeight = Array.from(slideBody.children)
            .reduce((acc, el) => acc + el.offsetHeight, 0);

        // Limpiar clases anteriores
        slide.classList.remove('is-overflowing', 'has-extra-space');
        const previouslyForcedElement = slide.querySelector('.force-columns');
        if (previouslyForcedElement) {
            previouslyForcedElement.classList.remove('force-columns');
        }

        // --- Detección de Desbordamiento ---
        if (contentHeight > bodyHeight + 2) { // Verificación inicial de desbordamiento
            slide.classList.add('is-overflowing');

            // Usar requestAnimationFrame para permitir que el navegador aplique los nuevos estilos y vuelva a medir.
            requestAnimationFrame(() => {
                const newContentHeight = Array.from(slideBody.children)
                    .reduce((acc, el) => acc + el.offsetHeight, 0);

                // Si sigue desbordando, encontrar el elemento apropiado para aplicar columnas.
                if (newContentHeight > bodyHeight + 2) {
                    let elementToForceColumns = null;

                    // Manejo especial para diapositivas de introducción
                    if (slideBody.classList.contains('layout-intro')) {
                        const contentBox = slideBody.querySelector('.content-box');
                        if (contentBox) {
                            let tallestChildInContentBox = null;
                            let maxChildHeight = 0;
                            Array.from(contentBox.children).forEach(child => {
                                if (child.offsetHeight > maxChildHeight) {
                                    maxChildHeight = child.offsetHeight;
                                    tallestChildInContentBox = child;
                                }
                            });
                            elementToForceColumns = tallestChildInContentBox;
                        }
                    } else {
                        // Lógica original para todas las demás diapositivas
                        let tallestChild = null;
                        let maxChildHeight = 0;
                        Array.from(slideBody.children).forEach(child => {
                            if (child.offsetHeight > maxChildHeight) {
                                maxChildHeight = child.offsetHeight;
                                tallestChild = child;
                            }
                        });
                        elementToForceColumns = tallestChild;
                    }

                    if (elementToForceColumns) {
                        elementToForceColumns.classList.add('force-columns');
                    }
                }
            });
        }
        // --- Detección de Underflow (Espacio Extra) ---
        else if (bodyHeight > contentHeight * 1.5 && contentHeight > 0) {
            slide.classList.add('has-extra-space');
        }
    }

    /**
     * Inicializa animaciones escalonadas para elementos dentro de cada diapositiva.
     */
    function initAnimations() {
        const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduce) return;

        const slides = document.querySelectorAll('.slide-shell');
        slides.forEach(slide => {
            const elements = slide.querySelectorAll('h1, .card, li, .code-block, .card-interactive, .feature-list > *');
            const maxDelay = 0.6;

            elements.forEach((el, i) => {
                // Asegurar que el elemento no tenga ya la clase
                if (!el.classList.contains('animate-in')) {
                    el.classList.add('animate-in');
                    el.style.animationDelay = `${Math.min(i * 0.1, maxDelay)}s`;
                }
            });
        });
    }

    /**
     * Función principal para actualizar el layout de todas las diapositivas.
     */
    function checkAllSlidesLayout() {
        const slides = document.querySelectorAll('.slide-shell');
        if (slides.length === 0) return;
        slides.forEach(checkSlideLayout);
    }
    Sapiens.checkAllSlidesLayout = checkAllSlidesLayout;

    /**
     * Utilidad Debounce para limitar la tasa de ejecución de funciones.
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Punto de entrada. Espera a que cargue toda la ventana.
     */
    window.onload = function () {
        checkAllSlidesLayout();
        initAnimations();
    };

    // Re-verificar layout al redimensionar la ventana (con debounce)
    window.addEventListener('resize', debounce(() => {
        checkAllSlidesLayout();
    }, 200));

    // Exponer Sapiens al objeto global window
    window.Sapiens = Sapiens;

})(window);
