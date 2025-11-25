/* sapiens.js v3.3 - Polished */
document.addEventListener("DOMContentLoaded", () => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const slide = document.querySelector('#sapiens-slide');
    if (!slide || prefersReduce) return;

    // Animación escalonada dentro del slide con tope de delay
    const elements = slide.querySelectorAll('h1, .card, li, .code-block, .card-interactive');
    const maxDelay = 0.6;

    elements.forEach((el, i) => {
        el.classList.add('animate-in');
        el.style.animationDelay = `${Math.min(i * 0.1, maxDelay)}s`;
    });
});
