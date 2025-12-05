# Análisis del Framework Sapiens (v0.6 Modular)

Este documento contiene un análisis técnico y funcional del framework **Sapiens**, un sistema CSS modular para la creación de presentaciones web.

## 1. ¿Qué es Sapiens?

Sapiens es un framework moderno diseñado para construir diapositivas utilizando estándares web (HTML, CSS y JS). A diferencia de herramientas visuales como PowerPoint o Keynote, Sapiens sigue una filosofía de **"Code-First"**, donde la estructura semántica y el diseño están desacoplados.

Su principal diferenciador es su **Motor de Diseño Inteligente**, que adapta automáticamente la tipografía, el espaciado y la distribución de los elementos según la cantidad de contenido y el dispositivo de visualización.

---

## 2. Arquitectura del Sistema

El framework está construido sobre una arquitectura modular de 5 capas:

### A. Capa Estructural (`sapiens-core.css`)
*   **Propósito:** Base inmutable del sistema.
*   **Responsabilidades:**
    *   Define el "Slide Shell" (contenedor principal) con un aspect ratio de 16:9.
    *   Establece las variables CSS globales (colores, fuentes, sombras).
    *   Maneja el comportamiento responsivo macro: En escritorio centra la diapositiva sin scroll; en móviles (<768px) la convierte en una página vertical con scroll natural.

### B. Capa de Layouts (`sapiens-layouts.css`)
Define las rejillas (CSS Grid) para organizar el contenido. Los layouts principales son:
*   **Hero / Intro:** Contenido centrado, ideal para títulos o frases de impacto.
*   **Split:** Pantalla dividida en dos columnas (simétrica).
*   **Code:** Variante de split optimizada para mostrar bloques de código a un lado y explicaciones al otro.
*   **Bento:** Grid de 4 cuadrantes para comparar conceptos.
*   **Smart Grid:** Rejilla flexible que usa `auto-fill` para acomodar tantas tarjetas como quepan.

### C. Capa de Componentes (`sapiens-components.css`)
Contiene los elementos de interfaz de usuario (UI) reutilizables:
*   **Tarjetas (`.card`):** Contenedores con efecto "glassmorphism" (fondo borroso).
*   **Bloques de Código (`.code-block`):** Estilizados como editores de texto (tipo VS Code o macOS).
*   **Badges y Pills:** Etiquetas para categorizar contenido.
*   **Gráficos CSS:** Elementos como `.layout-timeline`, `.layout-circular` o `.stat-card` para visualizar datos sin usar librerías externas de gráficos.

### D. Capa de Temas (`sapiens-themes.css`)
*   **Funcionamiento:** Basado estrictamente en **Design Tokens**.
*   **Mecanismo:** Los temas no escriben CSS nuevo, simplemente reasignan los valores de las variables CSS (por ejemplo, cambian `--bg-1` de negro a blanco, o `--accent-1` de azul a naranja).
*   **Variedad:** Incluye categorías como *Nature*, *Neon*, *Retro*, *Elegant*, *Tech*, etc.

### E. Motor Lógico (`sapiens.js`)
Es el componente "inteligente" del framework. Ejecuta un ciclo de observación en el navegador:
1.  **Medición:** Mide la altura del contenido vs. la altura de la diapositiva.
2.  **Cálculo de Densidad:** Determina si el contenido es "Escaso" (Cozy), "Apretado" (Tight) o "Denso" (Dense).
3.  **Adaptación:** Aplica clases modificadoras al DOM (ej. `.intro-dense`) que activan reglas CSS específicas para reducir fuentes y márgenes.
4.  **Gestión de Overflow:** Si el contenido desborda, intenta compactarlo. Si falla, habilita scroll interno o fuerza layouts multicolumna.

---

## 3. Características Clave

### Container Queries
El framework hace un uso extensivo de `@container`. Esto permite que los componentes internos reaccionen al tamaño de su contenedor padre (la diapositiva o una columna) en lugar de al tamaño de la ventana del navegador. Esto es crucial para la modularidad.

### Sistema de Decoración
Existe una capa separada (`sapiens-decor.css` y utilidades en core) para fondos y efectos visuales que no interfieren con la legibilidad:
*   `z-index` gestionado por capas (`--layer-base`, `--layer-decor`, `--layer-content`).
*   Fondos texturizados (puntos, ruido, gradientes, rejillas).

### Accesibilidad y Responsividad
*   Soporta `prefers-reduced-motion` para desactivar animaciones.
*   En pantallas táctiles pequeñas, la interfaz cambia radicalmente para ser legible (fuentes más grandes relativas al ancho, badges reubicados).

---

## 4. Conclusión

Sapiens v0.6 es un sistema robusto para desarrolladores que necesitan crear presentaciones de alta calidad visual de manera programática. Su arquitectura "inteligente" resuelve el problema más común de las diapositivas web: el desbordamiento de contenido y la inconsistencia visual en diferentes pantallas.
