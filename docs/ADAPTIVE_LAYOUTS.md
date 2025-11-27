# Guía Completa de Responsividad - Sapiens Framework

El sistema está diseñado en capas para que las diapositivas se adapten desde desktop 16:9 hasta móvil, sin tocar el core.

---

## 1. Responsividad Exterior (core)
Definida en `sapiens-core.css`. Controla la relación slide/viewport:
- **Desktop/Tablet**: slide centrada (grid), ratio 16:9, sin scroll, `max-width: 1600px`.
- **Móvil (<768px)**: modo página (`display: block`, scroll vertical), sin aspect-ratio, altura automática, padding reducido, header reordenado, footer centrado.
- Safe-area aplicado al padding.
- No modificar esta capa para nuevos layouts.

---

## 2. Responsividad Base de Layouts
En `sapiens-layouts.css` (hero, split, code, bento, intro):
- Split/Code colapsan a 1 columna <1024px.
- Bento se vuelve lista <768px.
 - Márgenes de `content-box` en alturas bajas para hero/intro.
Recomendación: usar `<article class="slide-body ...">` y `<header>/<footer>` semánticos (ya estilizados por core).
Nuevos layouts base se agregan aquí, no en core.

---

## 3. Responsividad Interna (componentes/layouts creativos)
En `sapiens-components.css` + `sapiens.js`:
- Container Queries por ancho/alto para timeline, comparison, circular, smart-grid, etc.
- Ajustes específicos por layout creativo viven aquí.
- Densidad automática:
  - Intro/Hero: `intro-dense|intro-tight|intro-cozy|intro-loose` según ratio, nº de bloques y densidad de texto (con histéresis). Excluye `loose` si hay `stat-card` o `layout-smart-grid`. Breakpoints tablet y móvil pequeño compactan más; en móviles muy pequeños se habilita scroll interno oculto solo si es necesario.
  - Split/Code: `split-tight|split-loose` según ocupación y nº de bloques; compacta o amplía padding/gaps/typo de `content-box`.
  - Stats: `stats-tight|stats-loose` ajusta padding/gap de `stat-card`.
  - Timeline/Process-detailed/Process-flow: `timeline-tight|timeline-loose` ajusta gaps, padding de cards, conectores y números de paso (tight más agresivo).
  - Text-analysis/Comparison: `analysis-tight|analysis-loose` ajusta padding/gaps en paneles.
  - Circular: `circular-tight|circular-loose` escala nodos y gaps (tight más agresivo).
  - Bento/Smart-grid: `grid-tight|grid-loose` cambia gaps y padding en cards/grids.

---

## 4. Motor JS (sapiens.js)
- Detecta overflow/underflow con histéresis; aplica `.is-overflowing`, `.has-extra-space`, `.is-landscape-tight`.
- En overflow: reduce fuentes/padding (header/footer/content), compacta gaps; si persiste, aplica `.force-columns` al bloque más alto.
- Observa resize/orientation, ResizeObserver, MutationObserver y `document.fonts.ready`.
 - Header/footer se compactan aunque no tengan clases (se estilizan por elemento).

---

## 5. Decoración y temas
- Temas (`sapiens-themes.css`): solo tokens (`--bg-*`, `--accent-*`, `--text-*`, etc.).
- Decor (`sapiens-decor.css`): texturas opt-in (`bg-blueprint`, `bg-watercolor`, `bg-wood`, `bg-dots`, `bg-noise-soft`, `bg-icons`, `bg-aurora`, `bg-stripes-soft`, `bg-halftone`, `bg-fiber`, `bg-grid-glow`, `bg-molecules`), remates (`grid-lines`, `orb`, `watermark`, `torn-edge`).
- Carga recomendada: `core → themes → decor → layouts → components`.

---

## 6. Tabla de comportamiento por layout (resumen)
| Layout         | Capacidad Texto | Desktop             | Tablet/Container estrecho        | Móvil |
|----------------|-----------------|---------------------|----------------------------------|-------|
| Hero/Intro     | 80-250 palabras | Centrado, texto grande | Reduce fuentes (JS)            | Scroll, padding reducido |
| Split/Code     | **200-500 palabras** ⭐ | 2 col (50/50 o 45/55) | 1 col (<1024px)                 | 1 col |
| Bento          | 120-250 palabras | Grid 2x2            | Grid 2x2 (gaps ajustados)        | Lista |
| Timeline       | 100-250 palabras | Horizontal          | Vertical (CQ ancho)              | Vertical |
| Comparison     | 180-350 palabras | Dos paneles + divisor| 1 col (CQ ancho)                | 1 col |
| Circular       | Variable | Nodos en círculo    | Grid/lista (CQ ancho)            | Lista |
| Smart Grid     | Variable | Grid auto-fill      | Tarjetas horizontales (CQ alto)  | Lista |
| Stats          | Variable | Grid auto-fit       | Grid más denso                   | 1-2 col |
| Text Analysis  | **250-500 palabras** ⭐ | 2fr/1fr (main+sidebar) | 1 col (CQ ancho)              | 1 col |
| Timeline Curved| 150-300 palabras | Curva 5 nodos       | Lista vertical (CQ ancho)        | Lista |
| Process Detailed| 200-450 palabras | Grid auto-fit      | 1 col (CQ ancho)                 | 1 col |

**Nota**: ⭐ = Ideal para contenido text-heavy. Ver `docs/LAYOUT_CONTENT_CAPACITY.md` para detalles completos.

---

## 7. Buenas prácticas
- No toques `sapiens-core.css` para responsivo; usa `sapiens-layouts.css` y `sapiens-components.css`.
- Activa decoraciones con clases (`bg-*`, `grid-lines`, `orb`) sin mezclar con temas.
- Si un bloque específico debe dividirse, añade una clase opt-in y usa `.force-columns`.
- Comprueba soporte de Container Queries; hay fallbacks `@supports not (container-type: size)` para layouts críticos.

---

## 8. Troubleshooting
- **Se corta contenido**: verifica que `sapiens.js` esté cargado; reduce contenido o divide en dos slides; usa layouts que soporten columnas (`feature-list`, `content-box` con `.force-columns`).
- **Loop de adaptación**: histéresis en `sapiens.js` debería evitarlo; revisa que no haya estilos inline que cambien altura después del load.
- **Container Queries no aplican**: el navegador no las soporta; se aplica el fallback por `@supports not`.
