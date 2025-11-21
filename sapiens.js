/* sapiens.js v2.0 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Animaciones de Entrada Suaves
    const elements = document.querySelectorAll('h1, .card, .code-block, li');
    
    // Configurar estado inicial
    elements.forEach(el => el.classList.add('s-fade'));

    // Disparar en cascada
    setTimeout(() => {
        elements.forEach((el, index) => {
            // Retraso progresivo basado en el índice, pero con un tope para que no tarde años
            const delay = Math.min(index * 50, 1000); 
            setTimeout(() => {
                el.classList.add('s-visible');
            }, delay);
        });
    }, 100);

    // 2. Ajuste de Fuente de Emergencia (Safety Check)
    // Si un elemento se desborda a pesar del CSS clamp, reducirlo
    const autoFit = () => {
        document.querySelectorAll('.card p, h2').forEach(el => {
            if(el.scrollHeight > el.clientHeight + 5) { // +5 margen error
                let size = parseFloat(window.getComputedStyle(el).fontSize);
                el.style.fontSize = (size * 0.9) + "px";
            }
        });
    };
    
    // Ejecutar al cargar y al redimensionar ventana
    window.addEventListener('load', autoFit);
    window.addEventListener('resize', autoFit);
});