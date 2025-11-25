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
        const previouslyForcedElement = slide.querySelector('.force-columns');
        if (previouslyForcedElement) {
            previouslyForcedElement.classList.remove('force-columns');
        }

        // --- Overflow Detection ---
        if (contentHeight > bodyHeight + 2) { // Initial overflow check
            slide.classList.add('is-overflowing');

            // Use requestAnimationFrame to allow the browser to apply the new styles and re-measure.
            requestAnimationFrame(() => {
                const newContentHeight = Array.from(slideBody.children)
                                              .reduce((acc, el) => acc + el.offsetHeight, 0);

                // If it's still overflowing, find the tallest child and apply columns to it.
                if (newContentHeight > bodyHeight + 2) {
                    let tallestChild = null;
                    let maxChildHeight = 0;
                    Array.from(slideBody.children).forEach(child => {
                        if (child.offsetHeight > maxChildHeight) {
                            maxChildHeight = child.offsetHeight;
                            tallestChild = child;
                        }
                    });

                    if (tallestChild) {
                        tallestChild.classList.add('force-columns');
                    }
                }
            });
        }
        // --- Underflow Detection ---
        else if (bodyHeight > contentHeight * 1.5 && contentHeight > 0) {
            slide.classList.add('has-extra-space');
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
