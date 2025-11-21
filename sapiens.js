/* sapiensia.js - Lógica del Framework v1.0 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("🧠 Sapiensia Framework Iniciado");

  // 1. Sistema de Animación en Cascada
  // Busca elementos con la clase 'sapiens-fade-up' y los activa secuencialmente
  const animatedElements = document.querySelectorAll('.card, h1, .code-block, li');
  
  // Preparar elementos (ocultarlos inicialmente si no tienen la clase)
  animatedElements.forEach(el => {
    el.classList.add('sapiens-fade-up');
  });

  // Disparar animación
  setTimeout(() => {
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('sapiens-visible');
      }, index * 100); // 100ms de retraso entre cada elemento
    });
  }, 100);


  // 2. Auto-Fit Text (Prevención de desbordamiento simple)
  // Si el texto es muy largo para la tarjeta, reduce el tamaño de la fuente
  const textContainers = document.querySelectorAll('.card p, .card li, .code-block pre');
  
  textContainers.forEach(el => {
    // Comprobamos si el scrollHeight (altura real) es mayor que clientHeight (altura visible)
    // Nota: Esto funciona mejor si el contenedor tiene altura fija o max-height
    let parent = el.closest('.card') || el.closest('.code-block');
    
    if (parent) {
        // Lógica preventiva simple: si hay muchos caracteres, reducir un poco
        if (el.textContent.length > 300) {
            el.style.fontSize = "0.9em";
        }
        if (el.textContent.length > 500) {
            el.style.fontSize = "0.8em";
        }
    }
  });

});