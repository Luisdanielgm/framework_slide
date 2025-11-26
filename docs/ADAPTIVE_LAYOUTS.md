# Guía Completa de Responsividad - Framework Sapiens

Este documento detalla la arquitectura de responsividad del Framework Sapiens. El sistema está diseñado en capas para garantizar que las diapositivas se adapten perfectamente desde pantallas gigantes hasta móviles, sin que el desarrollador tenga que intervenir manualmente.

## 1. Responsividad Core (La Diapositiva vs. La Página)

Esta es la capa base definida en `sapiens-core.css`. Controla cómo se comporta el contenedor principal de la diapositiva (`#sapiens-slide` o `.slide-shell`) con respecto a la ventana del navegador.

### Comportamiento en Escritorio y Tablet (> 768px)
El framework trata la diapositiva como un **objeto fijo y centrado**, similar a una diapositiva de presentación tradicional (PowerPoint/Keynote), pero flexible.

- **Centrado Perfecto**: El `body` usa `display: grid; place-items: center;` para mantener la diapositiva siempre en el centro.
- **Relación de Aspecto 16:9**: La diapositiva intenta mantener siempre un ratio 16:9 (`aspect-ratio: 16/9`) para preservar el diseño visual.
- **Escalado Fluido**:
  - `width: 100%` con `max-width: 1600px`.
  - `height: 100%` (limitado por el viewport).
  - Esto significa que la diapositiva crecerá hasta llenar la pantalla, pero se detendrá si se vuelve demasiado ancha o alta, manteniendo sus proporciones.
- **Sin Scroll**: En este modo, el scroll de la página está desactivado (`overflow: hidden`) para garantizar una experiencia de "app" o presentación.

### Comportamiento en Móvil (< 768px)
Cuando el espacio es insuficiente para mantener el formato de diapositiva, el framework cambia radicalmente a un **modo de página web**.

- **Scroll Habilitado**: El `body` cambia a `display: block` y permite el scroll vertical (`overflow-y: auto`).
- **Altura Automática**: La diapositiva pierde su restricción de altura y ratio 16:9 (`height: auto; aspect-ratio: unset`). Crece tanto como su contenido lo necesite.
- **Adaptación de UI**:
  - El Header invierte su orden (Badge arriba, Título abajo).
  - El Footer se centra.
  - Los layouts de grid (Bento, Split) se colapsan a una sola columna.

> **⚠️ IMPORTANTE**: No modificar las reglas base de `body` y `.slide-shell` en `sapiens-core.css`. Estas garantizan la integridad estructural de la presentación.

---

## 2. Responsividad Inteligente (El Contenido)

Una vez que la diapositiva tiene su tamaño (definido por el Core), el contenido interno debe adaptarse. Aquí entra el sistema híbrido JS/CSS.

### A. Detección JavaScript (`sapiens.js`)
El script monitorea constantemente el contenido:

1. **Overflow (Desbordamiento)**: Si el contenido es más alto que la diapositiva.
   - **Acción**: Aplica clase `.is-overflowing`.
   - **Resultado**: CSS reduce automáticamente fuentes y paddings.
   - **Acción Secundaria**: Si sigue desbordando, busca el elemento más alto y le aplica `.force-columns` para dividirlo en dos columnas.

2. **Underflow (Espacio Extra)**: Si la diapositiva está muy vacía.
   - **Acción**: Aplica clase `.has-extra-space`.
   - **Resultado**: CSS aumenta las fuentes y centra el contenido para equilibrar visualmente.

3. **Redimensionamiento**: Un "listener" en el evento `resize` recalcula todo si el usuario cambia el tamaño de la ventana.

### B. Container Queries (CSS)
El framework usa `@container` en `.slide-body` para que los componentes reaccionen al tamaño de su *contenedor padre*, no de la pantalla.

- **Por Altura (`height < 600px`)**:
  - Usado por `layout-smart-grid`.
  - Transforma tarjetas verticales en horizontales compactas.
  - Oculta descripciones no esenciales.

- **Por Ancho (`width < 900px`)**:
  - Usado por `layout-timeline`, `layout-comparison`, `layout-circular`.
  - Transforma layouts horizontales complejos en listas verticales simples.

---

## 3. Comportamiento por Layout

Detalle de cómo responde cada layout a los cambios de tamaño:

| Layout | Escritorio | Tablet / Contenedor Estrecho | Móvil (< 768px) |
|--------|------------|------------------------------|-----------------|
| **Hero** | Centrado, texto grande | Reduce fuentes (JS Overflow) | Scroll vertical, texto normal |
| **Intro** | Portada centrada | Reduce fuentes, compacta cajas | Scroll vertical |
| **Split** | 2 Columnas (50/50) | 2 Columnas (ajusta gap) | 1 Columna (apilado) |
| **Code** | Código derecha, Texto izq | Código domina espacio | 1 Columna, código abajo |
| **Bento** | Grid 2x2 | Grid 2x2 (ajusta gap) | 1 Columna (lista de cajas) |
| **Timeline** | Horizontal con conectores | **Vertical** (Container Query) | Vertical |
| **Comparison** | 2 Columnas con divisor | **1 Columna** (Container Query) | 1 Columna |
| **Circular** | Nodos en círculo | **Grid/Lista** (Container Query) | Lista vertical |
| **Smart Grid** | Grid de tarjetas | **Tarjetas Horizontales** (CQ Altura) | Lista de tarjetas |
| **Stats** | Grid de números | Grid ajustado | Grid 1 columna |
| **Isometric** | Tarjetas 3D | 3D mantenido o reducido | 2D plano (opcional) |

---

## 4. Componentes Auto-Adaptables

Estos componentes funcionan dentro de cualquier layout y tienen su propia inteligencia:

- **`content-box`**: Caja contenedora principal.
  - Se compacta (`padding` reducido) si JS detecta overflow.
  - Se expande si hay underflow.

- **`feature-list`**: Lista de características (`<ul>`).
  - Se divide automáticamente en 2 columnas si recibe la clase `.force-columns` del script JS.
  - Usa `break-inside: avoid` para mantener los ítems íntegros.

- **`badge-group`**: Grupo de etiquetas/pills.
  - Usa Flexbox con `flex-wrap: wrap` para caer a nuevas líneas si no cabe.

---

## 5. Solución de Problemas (Troubleshooting)

### El contenido se corta o desaparece
- **Causa**: El contenido es excesivo incluso para la lógica de reducción.
- **Solución**:
  1. Verificar que `sapiens.js` esté cargado.
  2. Usar `layout-smart-grid` si son muchos ítems pequeños.
  3. Dividir el contenido en dos diapositivas.

### El layout no cambia al redimensionar
- **Causa**: El navegador no soporta Container Queries o JS falló.
- **Solución**:
  1. Verificar consola por errores JS.
  2. Asegurar que `.slide-body` tenga `container-type: size` (ya en core).

### Las fuentes se ven muy pequeñas
- **Causa**: Falso positivo de detección de overflow.
- **Solución**: Revisar si hay márgenes negativos o elementos invisibles que aumentan la altura calculada.

---

## 6. Guía para Nuevos Layouts

Si creas un nuevo layout, sigue estas reglas para mantener la responsividad:

1. **Usa Grid o Flexbox**: Nunca uses `float` o posicionamiento absoluto fijo.
2. **Define Container Queries**:
   ```css
   @container slideBody (width < 900px) {
       .mi-nuevo-layout { flex-direction: column; }
   }
   ```
3. **Soporta Móvil**: Asegúrate de que en `@media (max-width: 768px)` tu layout se vea bien en una sola columna.
4. **Integra con JS**: Usa las clases `.is-overflowing` para reducir márgenes o tamaños si es necesario:
   ```css
   .slide-shell.is-overflowing .mi-nuevo-layout { gap: 0.5rem; }
   ```
