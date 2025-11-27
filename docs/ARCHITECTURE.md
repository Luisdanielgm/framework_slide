# Arquitectura CSS Modular - Sapiens Framework (v0.6)

El framework está dividido en capas para que la base no cambie y puedas iterar en temas, decor y layouts sin tocar el core.

```
sapiens-core.css        -> Base estructural/responsiva (estable)
sapiens-themes.css      -> Temas rápidos basados en tokens
sapiens-decor.css       -> Texturas/adornos opcionales (consume tokens)
sapiens-layouts.css     -> Layouts base (hero, split, code, bento, intro)
sapiens-components.css  -> Componentes UI y layouts creativos (evolutivo)
sapiens.js              -> Motor inteligente (overflow/underflow + animaciones)
```

---

## Capa 1: sapiens-core.css (~400 líneas)
Propósito: base estructural y sistema responsivo; NO se modifica para nuevos layouts o decor.

Incluye:
- Variables base (`:root`), reset, body centrado, safe-area.
- Contenedor (`#sapiens-slide` / `.slide-shell`), header/footer (semánticos, sin clases).
- Grid contenedor `.slide-body` y media queries generales.

Tócalo solo para cambios estructurales mayores.

---

## Capa 2: sapiens-themes.css
Propósito: paquetes de tokens listos; no define fondos ni layouts.

Incluye clases de tema (`theme-*`) que reescriben el contrato de tokens (`--bg-*`, `--accent-*`, `--text-*`, etc.).

---

## Capa 3: sapiens-decor.css
Propósito: texturas y adornos opt-in que consumen tokens del tema.

Incluye:
- Fondos: `bg-blueprint`, `bg-watercolor`, `bg-wood`, `bg-dots`, `bg-noise-soft`, `bg-icons`.
- Remates/decor: `.grid-lines`, `.orb`, `.watermark`, `.torn-edge`, `.decorative-shape`.

---

## Capa 4: sapiens-layouts.css
Propósito: layouts base reutilizables (hero, split, code, bento, intro).

Incluye grids principales, densidades responsivas y ajustes container-aware.

---

## Capa 5: sapiens-components.css
Propósito: componentes UI y layouts creativos (evolutivo).

Incluye timelines, diagramas circulares, comparaciones, stats, process flow, isometric, feature grid, header logos, smart grid y utilidades visuales.

---

## Capa 6: sapiens.js
Propósito: motor inteligente de overflow/underflow + animaciones.

Aplica clases `is-overflowing`/`has-extra-space` y fuerza columnas cuando detecta desbordes; inicializa animaciones escalonadas respetando `prefers-reduced-motion`.
