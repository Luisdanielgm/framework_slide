document.addEventListener("DOMContentLoaded", () => {
    // Animación escalonada
    const elements = document.querySelectorAll('h1, .card, li, .code-block');
    elements.forEach((el, i) => {
        el.classList.add('animate-in');
        el.style.animationDelay = `${i * 0.1}s`;
    });
});