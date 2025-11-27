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

---

## 4. Motor JS (sapiens.js)
- Detecta overflow/underflow con histéresis; aplica `.is-overflowing`, `.has-extra-space`, `.is-landscape-tight`.
- En overflow: reduce fuentes/padding (header/footer/content), compacta gaps; si persiste, aplica `.force-columns` al bloque más alto.
- Observa resize/orientation, ResizeObserver, MutationObserver y `document.fonts.ready`.
 - Header/footer se compactan aunque no tengan clases (se estilizan por elemento).

---

## 5. Decoración y temas
- Temas (`sapiens-themes.css`): solo tokens (`--bg-*`, `--accent-*`, `--text-*`, etc.).
- Decor (`sapiens-decor.css`): texturas opt-in (`bg-blueprint`, `bg-watercolor`, `bg-wood`, `bg-dots`, `bg-noise-soft`, `bg-icons`), remates (`grid-lines`, `orb`, `watermark`, `torn-edge`).
- Carga recomendada: `core → themes → decor → layouts → components`.

---

## 6. Tabla de comportamiento por layout (resumen)
| Layout         | Desktop             | Tablet/Container estrecho        | Móvil |
|----------------|---------------------|----------------------------------|-------|
| Hero/Intro     | Centrado, texto grande | Reduce fuentes (JS)            | Scroll, padding reducido |
| Split/Code     | 2 col (50/50 o 45/55) | 1 col (<1024px)                 | 1 col |
| Bento          | Grid 2x2            | Grid 2x2 (gaps ajustados)        | Lista |
| Timeline       | Horizontal          | Vertical (CQ ancho)              | Vertical |
| Comparison     | Dos paneles + divisor| 1 col (CQ ancho)                | 1 col |
| Circular       | Nodos en círculo    | Grid/lista (CQ ancho)            | Lista |
| Smart Grid     | Grid auto-fill      | Tarjetas horizontales (CQ alto)  | Lista |
| Stats          | Grid auto-fit       | Grid más denso                   | 1-2 col |
| Isometric      | Tarjetas 3D         | Puede reducir 3D                 | 2D plano opcional |

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
