# Sistema de temas y tokens

Los componentes consumen tokens; los temas los redefinen. Decor y layouts están en capas separadas.

## Contrato de tokens (mínimo)
Declarados en `:root` dentro de `sapiens-core.css` y consumidos por layouts/componentes:
- Fondos: `--bg-1`, `--bg-2`
- Acentos: `--accent-1`, `--accent-2`, `--accent-strong`, `--accent-soft`
- Texto: `--text-main`, `--text-muted`
- Superficies: `--surface-0` a `--surface-3`
- Bordes: `--border-soft`, `--border-strong`
- Pills/Badges: `--badge-bg`, `--pill-bg`, `--pill-shadow`
- Sombras: `--glow-1`, `--glow-2`
- Tipos: `--font-body`, `--font-head`

Puedes sobrescribirlos en cualquier scope (`:root`, `body`, `#sapiens-slide`). La cascada usa el valor más cercano al componente.

## Temas rápidos (sapiens-themes.css)
Listos para usar en `body`, `#sapiens-slide` o cualquier wrapper. Equivalente con atributo: `data-theme="..."`. Cada tema redefine TODO el contrato anterior; si además defines un `<style>` con tokens manuales, esos valores ganan por cascada.

Listado (resumen):
- Base: `theme-ocean`, `theme-sunset`, `theme-forest`.
- Nature, Pastel, Neon, Retro, Neutral, Elegant, Tech/Dark, Fintech/Special (ver archivo para lista completa).

## Decor (sapiens-decor.css)
Texturas/remates opt-in que consumen tokens del tema:
- Fondos: `bg-blueprint`, `bg-watercolor`, `bg-wood`, `bg-dots`, `bg-noise-soft`, `bg-icons`.
- Remates/decor: `grid-lines`, `orb`, `watermark`, `torn-edge`, `decorative-shape`.

Aplica un tema + decor por clase, e.g.:
```html
<body class="theme-ocean bg-watercolor">
  <div id="sapiens-slide" class="slide-shell surface-1 border-soft">...</div>
</body>
```

## Ejemplos prácticos

Aplicar un tema:
```html
<body class="theme-ocean">
  <div id="sapiens-slide" class="surface-1 border-soft">...</div>
</body>
```

Inyectar tokens manuales (sobrescribe el tema aplicado):
```html
<style>
:root {
  --bg-1: #0b0f19;
  --bg-2: #16213d;
  --accent-1: #7c3aed;
  --accent-2: #06b6d4;
  --text-main: #f8fafc;
  --text-muted: #9ca3af;
  --font-body: 'Inter', sans-serif;
  --font-head: 'Poppins', sans-serif;
}
</style>
```

Componentes sensibles a tokens:
- Header `h1`: degradado con `--text-main`/`--text-muted`.
- `code-block`: fondo y texto ligados a `--bg-*`, `--text-*`, `--border-strong`.
- `content-box`: fondo mezclado con `--bg-1`/`--bg-2` y textos con `--text-*`.
- Superficies/bordes/pills/badges leen sus tokens específicos.

## Orden de carga recomendado
```
sapiens-core.css
sapiens-themes.css
sapiens-decor.css
sapiens-layouts.css
sapiens-components.css
```

## Estado de ejemplos
- Layouts base: `hero.html`, `split.html`, `code.html`, `bento.html`.
- Intros: `creative-intro*.html`.
- Creativos: `timeline.html`, `circular-diagram.html`, `comparison.html`, `stats.html`, `feature-grid.html`, `header-logos.html`, `isometric.html`, `process-flow.html`, `smart-grid.html`.

Todos usan clases de tema (`theme-*`). Puedes reemplazar el tema por un `<style>` con tokens personalizados si lo prefieres.
