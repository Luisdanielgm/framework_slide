# Guía de plantilla (capa exterior)
Cómo armar una slide desde `<body>` hasta `<article>`/header/footer. El contenido interno del `<article>` se documenta aparte.

## Orden de CSS recomendado
```html
<link rel="stylesheet" href="sapiens-core.css">
<link rel="stylesheet" href="sapiens-themes.css">
<link rel="stylesheet" href="sapiens-decor.css">
<link rel="stylesheet" href="sapiens-layouts.css">
<link rel="stylesheet" href="sapiens-components.css">
```

## Estructura base (markup)
```html
<body class="theme-ocean bg-blueprint">
  <div id="sapiens-slide" class="slide-shell surface-1 border-soft">
    <!-- Overlays opcionales: se declaran al inicio para que queden debajo del contenido -->
    <div class="decorative grid-lines"></div>
    <div class="decorative orb orb-1"></div>
    <div class="decorative orb orb-2"></div>
    <div class="watermark">DRAFT</div>
    <div class="decorative-shape shape-star shape-spot-1"></div>
    <div class="decorative-shape shape-circle shape-spot-2"></div>
    <div class="decorative-shape shape-triangle shape-spot-3"></div>
    <div class="torn-edge"></div><!-- si quieres el borde rasgado -->

    <header>
      <h1>Título</h1>
      <span class="header-badge">Badge</span>
    </header>

    <article class="slide-body layout-hero">
      <!-- contenido interno (layouts/componentes) -->
    </article>

    <footer>
      <span>Texto izq</span>
      <span>Texto der</span>
    </footer>
  </div>
</body>
```

## Body
- Tema: clase `theme-*` (ver `sapiens-themes.css`).
- Fondo opcional (decor): clase `bg-*` (`bg-blueprint`, `bg-watercolor`, `bg-wood`, `bg-dots`, `bg-noise-soft`, `bg-icons`).
- No poner overlays aquí; van dentro del shell. Mantén el body solo para tema/textura global.

## Shell (`#sapiens-slide` / `.slide-shell`)
- Clases opcionales: superficies/bordes (`surface-0..3`, `border-soft`/`border-strong`).
- Overlays (opcionales): `grid-lines`, `orb orb-1/2`, `watermark`/`watermark-soft`, `decorative-shape` (`shape-star/circle/triangle` + `shape-spot-1/2/3`), `torn-edge`.
- Estructura fija: header → main → footer (sin clases necesarias; el core los estiliza por elemento).
- Buenas prácticas: coloca overlays inmediatamente después de abrir el shell; evita que decoraciones queden debajo del footer al final. Solo `torn-edge` puede ir al final si buscas ese efecto.

## Header
- Elemento `<header>` semántico.
- Contiene `<h1>` y opcionalmente `.header-badge` (span).
- Sin clase requerida (el core aplica estilos al elemento).

## Footer
- Elemento `<footer>` semántico.
- Dos spans (o más) para textos. Sin clases requeridas; el core lo estiliza por elemento.

## Main
- `<article class="slide-body layout-...">`.
- `layout-*` proviene de `sapiens-layouts.css` (hero/split/code/bento/intro) o de `sapiens-components.css` para creativos (timeline, comparison, etc.).
- El contenido interno se documenta aparte; aquí solo se define el contenedor/layout.
- Si usas overlays, no los metas dentro de `<article>`; deben ir fuera para no interferir con la lógica de overflow.

## Notas
- Añade overlays al inicio del shell para mantener el stacking; solo `torn-edge` puede ir al final si buscas ese efecto.
- Header/footer y compactaciones por overflow funcionan aunque no haya clases (`header`, `footer`, `h1`, `.header-badge`).
- El JS (`sapiens.js`) requiere que el contenedor principal tenga `class="slide-shell"`.
- Prefiere usar clases de tema/decor en `body` y evita estilos inline que rompan la detección de overflow.
