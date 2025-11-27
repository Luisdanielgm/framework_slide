/* ==================================================
   SAPIENS FRAMEWORK - SCRIPT v0.6
   Motor de Layout Inteligente y Animaciones
   ================================================== */

(function (window) {
    "use strict";

    const Sapiens = {};

    /**
     * Ajusta la densidad en layouts intro/hero según altura ocupada y número de nodos.
     */
function applyIntroDensity(slideBody) {
        if (!slideBody.classList.contains('layout-intro') && !slideBody.classList.contains('layout-hero')) return;

        const contentBox = slideBody.querySelector('.content-box');
        if (!contentBox) return;

        const visibleChildren = Array.from(contentBox.children).filter(el => el.offsetParent !== null);
        const childCount = visibleChildren.length;

        const bodyRect = slideBody.getBoundingClientRect();
        const boxRect = contentBox.getBoundingClientRect();
        const ratio = bodyRect.height > 0 ? boxRect.height / bodyRect.height : 0;
        const textLength = visibleChildren.reduce((acc, el) => acc + ((el.textContent || '').trim().length), 0);
        const textDensity = boxRect.height > 0 ? textLength / boxRect.height : textLength;
        const avgTextPerChild = childCount > 0 ? textLength / childCount : textLength;
        const hasStatCards = contentBox.querySelector('.stat-card') !== null;
        const hasSmartGrid = contentBox.querySelector('.layout-smart-grid') !== null;

        const prevDensity = slideBody.dataset.introDensity || 'intro-cozy';
        const prevHeight = parseFloat(slideBody.dataset.introHeight || '0');
        const heightDelta = prevHeight > 0 ? Math.abs(boxRect.height - prevHeight) / prevHeight : 1;

        const denseEnter = 0.88;
        const denseExit = 0.84;
        const tightEnter = 0.78;
        const tightExit = 0.74;
        const looseEnter = 0.65;
        const looseExit = 0.68;

        let densityClass = prevDensity;
        const denseByRatio = ratio >= denseEnter || (prevDensity === 'intro-dense' && ratio >= denseExit);
        const denseByCount = childCount >= 6 && ratio >= 0.8;
        const tightByRatio = ratio >= tightEnter || (prevDensity === 'intro-tight' && ratio >= tightExit);
        const tightByCount = childCount >= 5 && ratio >= 0.7;
        const looseByRatio = ratio < looseEnter || (prevDensity === 'intro-loose' && ratio < looseExit && childCount <= 4);
        const looseByText = textDensity < 0.9 && avgTextPerChild >= 30;
        const looseAllowed = !hasStatCards && !hasSmartGrid;

        if (denseByRatio || denseByCount) {
            densityClass = 'intro-dense';
        } else if (tightByRatio || tightByCount) {
            densityClass = 'intro-tight';
        } else if (looseByRatio && childCount <= 4 && looseByText && looseAllowed) {
            densityClass = 'intro-loose';
        } else {
            densityClass = 'intro-cozy';
        }

        // Evita saltos por cambios mínimos de altura
        if (heightDelta < 0.03) {
            densityClass = prevDensity;
        }

        slideBody.dataset.introHeight = boxRect.height.toFixed(2);
        slideBody.dataset.introDensity = densityClass;
        slideBody.classList.remove('intro-dense', 'intro-tight', 'intro-loose', 'intro-cozy');
        slideBody.classList.add(densityClass);
    }

    /**
     * Cálculo genérico de densidad (hijos visibles, ratio altura, texto).
     */
    function computeDensity(slideBody, targetSelector) {
        const target = targetSelector ? slideBody.querySelector(targetSelector) || slideBody : slideBody;
        const children = Array.from(target.children).filter(el => el.offsetParent !== null);
        const childCount = children.length;
        const rectBody = slideBody.getBoundingClientRect();
        const rectTarget = target.getBoundingClientRect();
        const ratio = rectBody.height > 0 ? rectTarget.height / rectBody.height : 0;
        const textLength = children.reduce((acc, el) => acc + ((el.textContent || '').trim().length), 0);
        const avgText = childCount > 0 ? textLength / childCount : textLength;
        return { childCount, ratio, textLength, avgText };
    }

    function applySplitDensity(slideBody) {
        const isSplit = slideBody.classList.contains('layout-split') || slideBody.classList.contains('layout-code');
        if (!isSplit) return;
        const { childCount, ratio, avgText } = computeDensity(slideBody);
        const prev = slideBody.dataset.splitDensity || 'split-cozy';
        const tight = ratio >= 0.82 || (prev === 'split-tight' && ratio >= 0.78) || childCount >= 5;
        const loose = ratio < 0.6 && childCount <= 3 && avgText < 140;
        let density = prev;
        if (tight) density = 'split-tight';
        else if (loose) density = 'split-loose';
        else density = 'split-cozy';
        slideBody.dataset.splitDensity = density;
        slideBody.classList.remove('split-tight', 'split-loose', 'split-cozy');
        slideBody.classList.add(density);
    }

    function applyStatsDensity(slideBody) {
        if (!slideBody.classList.contains('layout-stats')) return;
        const { childCount, ratio } = computeDensity(slideBody, '.layout-stats');
        const prev = slideBody.dataset.statsDensity || 'stats-cozy';
        const tight = ratio >= 0.84 || (prev === 'stats-tight' && ratio >= 0.8) || childCount >= 5;
        const loose = ratio < 0.6 && childCount <= 3;
        let density = prev;
        if (tight) density = 'stats-tight';
        else if (loose) density = 'stats-loose';
        else density = 'stats-cozy';
        slideBody.dataset.statsDensity = density;
        slideBody.classList.remove('stats-tight', 'stats-loose', 'stats-cozy');
        slideBody.classList.add(density);
    }

    function applyTimelineDensity(slideBody) {
        const isTimeline = slideBody.classList.contains('layout-timeline') || slideBody.classList.contains('layout-process-detailed') || slideBody.classList.contains('layout-process-flow');
        if (!isTimeline) return;
        const { childCount, ratio } = computeDensity(slideBody);
        const prev = slideBody.dataset.timelineDensity || 'timeline-cozy';
        const tight = ratio >= 0.78 || (prev === 'timeline-tight' && ratio >= 0.74) || childCount >= 5;
        const loose = ratio < 0.62 && childCount <= 3;
        let density = prev;
        if (tight) density = 'timeline-tight';
        else if (loose) density = 'timeline-loose';
        else density = 'timeline-cozy';
        slideBody.dataset.timelineDensity = density;
        slideBody.classList.remove('timeline-tight', 'timeline-loose', 'timeline-cozy');
        slideBody.classList.add(density);
    }

    function applyAnalysisDensity(slideBody) {
        const isAnalysis = slideBody.classList.contains('layout-text-analysis') || slideBody.classList.contains('layout-comparison');
        if (!isAnalysis) return;
        const { childCount, ratio, avgText } = computeDensity(slideBody);
        const prev = slideBody.dataset.analysisDensity || 'analysis-cozy';
        const tight = ratio >= 0.82 || (prev === 'analysis-tight' && ratio >= 0.78) || childCount >= 5;
        const loose = ratio < 0.6 && childCount <= 3 && avgText < 160;
        let density = prev;
        if (tight) density = 'analysis-tight';
        else if (loose) density = 'analysis-loose';
        else density = 'analysis-cozy';
        slideBody.dataset.analysisDensity = density;
        slideBody.classList.remove('analysis-tight', 'analysis-loose', 'analysis-cozy');
        slideBody.classList.add(density);
    }

    function applyCircularDensity(slideBody) {
        if (!slideBody.classList.contains('layout-circular')) return;
        const nodes = slideBody.querySelectorAll('.circular-node').length || slideBody.children.length;
        const { ratio } = computeDensity(slideBody);
        const prev = slideBody.dataset.circularDensity || 'circular-cozy';
        const tight = ratio >= 0.8 || (prev === 'circular-tight' && ratio >= 0.76) || nodes >= 5;
        const loose = ratio < 0.6 && nodes <= 3;
        let density = prev;
        if (tight) density = 'circular-tight';
        else if (loose) density = 'circular-loose';
        else density = 'circular-cozy';
        slideBody.dataset.circularDensity = density;
        slideBody.classList.remove('circular-tight', 'circular-loose', 'circular-cozy');
        slideBody.classList.add(density);
    }

    function applyGridDensity(slideBody) {
        const isBento = slideBody.classList.contains('layout-bento');
        const smartGrid = slideBody.querySelector('.layout-smart-grid');
        if (!isBento && !smartGrid) return;
        const target = smartGrid || slideBody;
        const { childCount, ratio, avgText } = computeDensity(target);
        const prev = slideBody.dataset.gridDensity || 'grid-cozy';
        const tight = ratio >= 0.82 || (prev === 'grid-tight' && ratio >= 0.78) || childCount >= 6;
        const loose = ratio < 0.6 && childCount <= 3 && avgText < 140;
        let density = prev;
        if (tight) density = 'grid-tight';
        else if (loose) density = 'grid-loose';
        else density = 'grid-cozy';
        slideBody.dataset.gridDensity = density;
        slideBody.classList.remove('grid-tight', 'grid-loose', 'grid-cozy');
        slideBody.classList.add(density);
    }

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

        applyIntroDensity(slideBody);
        applySplitDensity(slideBody);
        applyStatsDensity(slideBody);
        applyTimelineDensity(slideBody);
        applyAnalysisDensity(slideBody);
        applyCircularDensity(slideBody);
        applyGridDensity(slideBody);

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
        const debouncedCheck = debounce(checkAllSlidesLayout, 80);

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
            document.fonts.ready.then(() => {
                debouncedCheck();
                setTimeout(debouncedCheck, 320);
            }).catch(() => {});
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
