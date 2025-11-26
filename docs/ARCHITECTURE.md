# Arquitectura CSS Modular - Sapiens Framework (v0.5)

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
- Contenedor (`#sapiens-slide` / `.slide-shell`), header/footer.
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

Agregar nuevas texturas aquí, no en core.

---

## Capa 4: sapiens-layouts.css
Propósito: layouts base y sus media queries.

Incluye:
- Layouts base: hero, split, code, bento, intro.
- Ajustes responsivos básicos (collapse split/code a 1 col, bento a lista en móvil, márgenes de content-box en alturas bajas).

Agregar/modificar layouts base aquí (no en core).

---

## Capa 5: sapiens-components.css (~1600 líneas)
Propósito: componentes y layouts creativos; puede evolucionar.

Incluye:
- Cards, badges, iconos, pills, content-box, code-block.
- Layouts creativos: timeline, circular, comparison, stats, process-flow, isometric, feature-grid, header-logos, smart-grid.
- Container Queries y ajustes responsivos específicos.
- Animaciones/utilidades de texto/spacing.

Agregar nuevos layouts creativos o componentes aquí.

---

## Motor JS: sapiens.js
Propósito: detección inteligente de overflow/underflow con histéresis y aplicación de clases:
- `.is-overflowing` (reduce fuentes/padding, puede forzar columnas).
- `.has-extra-space` (puede ampliar fuentes/centrar).
- `.is-landscape-tight` (paisajes bajos para truncado suave).

No depende de layouts concretos; es una capa transversal.

---

## Uso en proyectos (orden de carga)

```html
<link rel="stylesheet" href="sapiens-core.css">
<link rel="stylesheet" href="sapiens-themes.css">
<link rel="stylesheet" href="sapiens-decor.css">
<link rel="stylesheet" href="sapiens-layouts.css">
<link rel="stylesheet" href="sapiens-components.css">
```

Así el core queda inmutable; temas/decor/layouts/componentes pueden crecer sin romper la base.
