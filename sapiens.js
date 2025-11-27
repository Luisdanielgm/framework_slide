/* ==================================================
   SAPIENS FRAMEWORK - SCRIPT v0.6
   Motor de Layout Inteligente y Animaciones
   ================================================== */

(function (window) {
    "use strict";

    const Sapiens = {};

    /**
     * Medicion robusta del contenido (incluye gaps y scroll real).
     */
    function measureContent(slideBody) {
        const style = window.getComputedStyle(slideBody);
        const rowGap = parseFloat(style.rowGap || style.gap || 0) || 0;
        const children = Array.from(slideBody.children);
        const gaps = rowGap * Math.max(children.length - 1, 0);
        const childrenHeight = children.reduce((acc, el) => acc + el.getBoundingClientRect().height, 0);
        const measured = Math.max(slideBody.scrollHeight, Math.round(childrenHeight + gaps));
        return {
            bodyHeight: slideBody.clientHeight,
            contentHeight: measured
        };
    }

    /**
     * Elige el mejor candidato para forzar columnas cuando hay overflow.
     */
    function pickForceColumnsTarget(slideBody) {
        if (slideBody.classList.contains('layout-intro')) {
            const contentBox = slideBody.querySelector('.content-box');
            if (contentBox) {
                let tallest = null;
                let maxHeight = 0;
                Array.from(contentBox.children).forEach(child => {
                    const h = child.getBoundingClientRect().height;
                    if (h > maxHeight) {
                        maxHeight = h;
                        tallest = child;
                    }
                });
                if (tallest) return tallest;
            }
        }

        const preferred = slideBody.querySelector('.feature-list, .content-box, .badge-group, .layout-smart-grid');
        if (preferred) return preferred;

        let tallestChild = null;
        let maxChildHeight = 0;
        Array.from(slideBody.children).forEach(child => {
            const h = child.getBoundingClientRect().height;
            if (h > maxChildHeight) {
                maxChildHeight = h;
                tallestChild = child;
            }
        });
        return tallestChild;
    }

    /**
     * Verifica desbordamiento o underflow y aplica clases correctivas.
     */
    function checkSlideLayout(slide) {
        const slideBody = slide.querySelector('.slide-body');
        if (!slideBody) return;

        const isLandscapeTight = window.innerWidth > window.innerHeight && window.innerHeight < 820;
        slide.classList.toggle('is-landscape-tight', isLandscapeTight);

        const { bodyHeight, contentHeight } = measureContent(slideBody);
        const ratio = bodyHeight > 0 ? contentHeight / bodyHeight : 0;

        const prevState = slide.dataset.layoutState || 'normal';
        let nextState = 'normal';

        const OVERFLOW_ENTER = 1.02;
        const OVERFLOW_EXIT = 0.97; // hysteresis para no oscilar
        const UNDERFLOW_ENTER = 0.6; // bodyHeight > contentHeight * ~1.65
        const UNDERFLOW_EXIT = 0.75;

        if (ratio > OVERFLOW_ENTER || (prevState === 'overflow' && ratio > OVERFLOW_EXIT)) {
            nextState = 'overflow';
        } else if (ratio < UNDERFLOW_ENTER || (prevState === 'underflow' && ratio < UNDERFLOW_EXIT)) {
            nextState = 'underflow';
        }

        slide.dataset.layoutState = nextState;
        slide.classList.toggle('is-overflowing', nextState === 'overflow');
        slide.classList.toggle('has-extra-space', nextState === 'underflow');

        const previous = slide.querySelector('.force-columns');
        if (previous) previous.classList.remove('force-columns');

        if (nextState === 'overflow') {
            requestAnimationFrame(() => {
                const remeasure = measureContent(slideBody).contentHeight;
                if (remeasure > bodyHeight + 2) {
                    const target = pickForceColumnsTarget(slideBody);
                    if (target) target.classList.add('force-columns');
                }
            });
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
                if (!el.classList.contains('animate-in')) {
                    el.classList.add('animate-in');
                    el.style.animationDelay = `${Math.min(i * 0.1, maxDelay)}s`;
                }
            });
        });
    }

    /**
     * Funcion principal para actualizar el layout de todas las diapositivas.
     */
    function checkAllSlidesLayout() {
        const slides = document.querySelectorAll('.slide-shell');
        if (slides.length === 0) return;
        slides.forEach(checkSlideLayout);
    }
    Sapiens.checkAllSlidesLayout = checkAllSlidesLayout;

    /**
     * Utilidad Debounce para limitar la tasa de ejecucion de funciones.
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
     * Observadores y puntos de re-chequeo para mantener el layout estable.
     */
    function setupObservers() {
        const slides = document.querySelectorAll('.slide-shell');
        const debouncedCheck = debounce(checkAllSlidesLayout, 120);

        window.addEventListener('resize', debouncedCheck);
        window.addEventListener('orientationchange', debouncedCheck);

        slides.forEach(slide => {
            const body = slide.querySelector('.slide-body');
            if (!body) return;

            const ro = new ResizeObserver(debouncedCheck);
            ro.observe(slide);
            ro.observe(body);

            const mo = new MutationObserver(debouncedCheck);
            mo.observe(body, { childList: true, subtree: true, characterData: true });
        });

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(debouncedCheck).catch(() => {});
        }
        window.addEventListener('load', debouncedCheck);
    }

    /**
     * Punto de entrada. Espera a que cargue toda la ventana.
     */
    window.onload = function () {
        checkAllSlidesLayout();
        initAnimations();
        setupObservers();
    };

    // Exponer Sapiens al objeto global window
    window.Sapiens = Sapiens;

})(window);
