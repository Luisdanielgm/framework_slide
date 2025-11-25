
window.addEventListener('load', () => {
    const slides = document.querySelectorAll('.slide');
    console.log(`Sapiens.js: Window loaded. Found ${slides.length} slides.`);

    slides.forEach((slide, index) => {
        const body = slide.querySelector('.slide-body');
        if (!body) {
            console.log(`Slide ${index + 1}: .slide-body not found.`);
            return;
        }

        // Usamos un retardo para dar tiempo al navegador a renderizar completamente.
        // El evento 'load' asegura que los recursos están, pero el renderizado puede tardar un instante más.
        setTimeout(() => {
            const bodyHeight = body.offsetHeight;
            const contentHeight = body.scrollHeight;
            const slideNumber = index + 1;

            console.log(`Slide ${slideNumber}: Body Height = ${bodyHeight}, Content Height = ${contentHeight}`);

            // Limpiamos clases anteriores para evitar estados conflictivos
            slide.classList.remove('is-overflowing', 'has-extra-space');

            if (contentHeight > bodyHeight + 1) { // +1 de umbral para evitar falsos positivos
                console.log(`Slide ${slideNumber}: Content is overflowing. Adding class 'is-overflowing'.`);
                slide.classList.add('is-overflowing');
            } else if (bodyHeight > contentHeight + 40) { // Umbral de 40px para considerarlo espacio extra
                console.log(`Slide ${slideNumber}: Content has extra space. Adding class 'has-extra-space'.`);
                slide.classList.add('has-extra-space');
            } else {
                console.log(`Slide ${slideNumber}: Content fits perfectly.`);
            }
        }, 150); // Aumentado ligeramente a 150ms por seguridad
    });
});
