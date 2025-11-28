# Guía rápida: temas y template exterior

Puntos esenciales para montar una slide con el framework Sapiens sin romper la detección automática de densidad/overflow.

## Orden de carga (CSS)
- Carga en este orden: `sapiens-core.css` → `sapiens-themes.css` → `sapiens-decor.css` → `sapiens-layouts.css` → `sapiens-components.css`.
- Si usas CDN, fija commit/tag para evitar cambios inesperados (ejemplo: `@d7f8e5cbf68ca48512b8c1d5e1df5bfdcb9ca9d8`).

## Body
- Aplica un tema: `class="theme-*"` (ej: `theme-tech-future-neon`, `theme-ocean`, `theme-zen`).
- Fondo opcional: añade `bg-*` si quieres textura global (`bg-blueprint`, `bg-aurora`, `bg-noise-soft`, etc.).
- Mantén el body limpio; no metas overlays aquí (van dentro del shell).

## Shell base
```html
<div id="sapiens-slide" class="slide-shell surface-1 border-soft">
  <!-- overlays opcionales aquí -->
  <header>
    <h1>Título</h1>
    <span class="header-badge">Badge</span>
  </header>
  <article class="slide-body layout-..."><!-- contenido interno --></article>
  <footer>
    <span>Texto izq</span>
    <span>Texto der</span>
  </footer>
</div>
```

## Overlays (decor)
- Declararlos justo al abrir el shell para que queden bajo el contenido: `grid-lines`, `orb orb-1/2`, `watermark`/`watermark-soft`, `decorative-shape shape-* shape-spot-*`, `torn-edge` (este puede ir al final si buscas borde rasgado).
- No mezclar overlays dentro del `<article>`.

## Script
- Incluye `sapiens.js` al final del body. Requiere que el contenedor tenga `class="slide-shell"` y que el `<article>` tenga `class="slide-body layout-*"` para aplicar auto-densidad.

## Plantilla mínima (con CDN fijado)
```html
<body class="theme-tech-future-neon">
  <div id="sapiens-slide" class="slide-shell surface-1 border-soft">
    <div class="decorative grid-lines"></div>
    <div class="decorative orb orb-1"></div>
    <div class="decorative orb orb-2"></div>
    <div class="watermark watermark-soft"></div>

    <header>
      <h1>Título</h1>
      <span class="header-badge">Subtítulo</span>
    </header>

    <article class="slide-body layout-hero">
      <div class="content-box">
        <h2>Idea central</h2>
        <ul class="feature-list"><li>Punto</li></ul>
      </div>
    </article>

    <footer><span>Izq</span><span>Der</span></footer>
  </div>
  <script src="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@d7f8e5cbf68ca48512b8c1d5e1df5bfdcb9ca9d8/sapiens.js"></script>
</body>
```

## Tip de superficies
- Si necesitas una columna sin fondo pero con padding/alineacion del `content-box`, usa la clase `is-ghost` (o `surface-transparent`) en ese bloque y deja el otro con `surface-2`/`surface-3` + `border-soft`.
