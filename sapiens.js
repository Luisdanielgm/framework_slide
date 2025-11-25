/* ==================================================
   SAPIENS FRAMEWORK - SCRIPT v4.0
   Intelligent Layout Engine & Animations
   ================================================== */

(function(window) {
    "use strict";

    const Sapiens = {};

    /**
     * Checks a single slide for overflow or underflow and applies the necessary classes.
     * @param {HTMLElement} slide - The slide element to check.
     */
    function checkSlideLayout(slide) {
        const slideBody = slide.querySelector('.slide-body');
        if (!slideBody) return;

        // Ensure styles are computed
        window.getComputedStyle(slideBody);

        const bodyHeight = slideBody.clientHeight;
        // Calculate content height by summing the heights of direct children.
        // This is more reliable than scrollHeight for flex/grid containers.
        const contentHeight = Array.from(slideBody.children)
                                   .reduce((acc, el) => acc + el.offsetHeight, 0);

        // Clean up previous classes
        slide.classList.remove('is-overflowing', 'has-extra-space');

        // --- Overflow Detection ---
        // If content is taller than the container (with a small tolerance)
        if (contentHeight > bodyHeight + 2) { // 2px tolerance
            slide.classList.add('is-overflowing');
            console.log(`Slide #${slide.id} is overflowing. Body Height = ${bodyHeight}, Content Height = ${contentHeight}`);
        }
        // --- Underflow Detection ---
        // If content is significantly smaller than the container
        else if (bodyHeight > contentHeight * 1.5 && contentHeight > 0) { // e.g., content takes less than 66% of space
            slide.classList.add('has-extra-space');
            console.log(`Slide #${slide.id} has extra space. Body Height = ${bodyHeight}, Content Height = ${contentHeight}`);
        } else {
             console.log(`Slide #${slide.id} is balanced. Body Height = ${bodyHeight}, Content Height = ${contentHeight}`);
        }
    }

    /**
     * Initializes staggered animations for elements within each slide.
     */
    function initAnimations() {
        const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduce) return;

        const slides = document.querySelectorAll('.slide-shell');
        slides.forEach(slide => {
            const elements = slide.querySelectorAll('h1, .card, li, .code-block, .card-interactive, .feature-list > *');
            const maxDelay = 0.6;

            elements.forEach((el, i) => {
                // Ensure the element doesn't already have the class
                if (!el.classList.contains('animate-in')) {
                    el.classList.add('animate-in');
                    el.style.animationDelay = `${Math.min(i * 0.1, maxDelay)}s`;
                }
            });
        });
    }

    /**
     * Main function to update layout for all slides.
     */
    function checkAllSlidesLayout() {
        const slides = document.querySelectorAll('.slide-shell');
        if (slides.length === 0) return;
        slides.forEach(checkSlideLayout);
    }
    Sapiens.checkAllSlidesLayout = checkAllSlidesLayout;
    window.checkAllSlidesLayout = checkAllSlidesLayout; // Expose globally for verification script

    /**
     * Entry point. Waits for the entire window to load.
     */
    window.onload = function() {
        checkAllSlidesLayout();
        initAnimations();
    };

    // Expose Sapiens to the global window object
    window.Sapiens = Sapiens;

})(window);
