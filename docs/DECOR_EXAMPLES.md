# Ejemplos de uso de decoraciones

Todas las decoraciones son opt-in. Usa temas (`theme-*`) + texturas de fondo (`bg-*`) en el `<body>`, y overlays (`.decorative ...`) dentro del shell.

## Fondos (`sapiens-decor.css`, aplicar en `<body>`)
```html
<body class="theme-ocean bg-blueprint">
<body class="theme-forest bg-watercolor">
<body class="theme-elegant-festive bg-wood">
<body class="theme-neutral-slate bg-dots">
<body class="theme-tech-innovative bg-noise-soft">
<body class="theme-pastel-dream bg-icons">
```

## Overlays dentro del shell (añadir como hijos de `#sapiens-slide`)
```html
<div id="sapiens-slide" class="slide-shell surface-1 border-soft">
  <!-- Overlays (colócalos al inicio del shell, antes de header/main/footer) -->
  <div class="decorative grid-lines"></div>
  <div class="decorative orb orb-1"></div>
  <div class="decorative orb orb-2"></div>
  <div class="watermark">DRAFT</div>
  <div class="watermark watermark-soft">CONFIDENTIAL</div>
  <div class="decorative-shape shape-star shape-spot-1"></div>
  <div class="decorative-shape shape-circle shape-spot-2"></div>
  <div class="decorative-shape shape-triangle shape-spot-3"></div>
  <div class="torn-edge"></div>

  <header>...</header>
  <article class="slide-body layout-hero">...</article>
  <footer>...</footer>
</div>
```

Clases disponibles (overlays):
- Base: `.decorative` (posiciona absoluto, pointer-events: none).
- Rejilla: `.grid-lines`.
- Manchas difusas: `.orb orb-1`, `.orb orb-2`.
- Marca de agua: `.watermark`, `.watermark-soft`.
- Shapes: `.decorative-shape` + forma (`shape-star`, `shape-circle`, `shape-triangle`) + posición (`shape-spot-1/2/3`).
- Borde rasgado: `.torn-edge`.

## Combinaciones recomendadas
- Fondo + rejilla overlay: `body class="theme-ocean bg-blueprint"` + `<div class="decorative grid-lines"></div>`.
- Fondo acuarela + orbs: `body class="theme-forest bg-watercolor"` + `orb-1`, `orb-2`.
- Fondo madera sin overlay: `body class="theme-elegant-festive bg-wood">` (sin decoratives para un look limpio).
- Marca de agua: agrega `<div class="watermark">TEXTO</div>` (o `.watermark-soft`).
- Borde rasgado: `<div class="torn-edge"></div>` al final del shell.
- Coloca los overlays al inicio del shell (antes de header/main/footer) para mantener el stacking correcto; solo el borde rasgado puede ir al final si quieres que corte la base.

## Notas
- Fondos (`bg-*`) se aplican en `body` o en el shell como textura de fondo.
- Overlays (`grid-lines`, `orb`, `watermark`, `shape-*`, `torn-edge`) van dentro del shell; usan `position:absolute` y consumen tokens del tema.
- El orden de carga recomendado se mantiene: core → themes → decor → layouts → components. 
