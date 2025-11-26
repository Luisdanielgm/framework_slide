# Guía de Uso - Sapiens Slide Framework (v0.5 Modular)

Framework moderno para crear presentaciones web responsivas. Arquitectura modular: core estable, temas por tokens y componentes evolutivos.

---

## Inicio rápido

```html
<link rel="stylesheet" href="sapiens-core.css">
<link rel="stylesheet" href="sapiens-themes.css"><!-- opcional, temas -->
<link rel="stylesheet" href="sapiens-components.css">
```

Estructura mínima:
```html
<body class="theme-ocean">
  <div id="sapiens-slide" class="surface-1 border-soft">
    <div class="decorative grid-lines"></div>
    <header class="slide-header">
      <h1>Título de la Diapositiva</h1>
      <span class="header-badge">Categoría</span>
    </header>
    <main class="slide-body layout-hero">...</main>
    <footer class="slide-footer">...</footer>
  </div>
</body>
```

---

## Archivos

```
sapiens-core.css        -> Base estructural (estable)
sapiens-themes.css      -> Temas rápidos (tokens)
sapiens-components.css  -> Componentes UI (evolutivo)
sapiens.js              -> Animaciones básicas
examples/               -> 9+ slides de ejemplo
docs/                   -> Arquitectura y theming
legacy/                 -> Versión monolítica (deprecated)
```

---

## Layouts disponibles

**Layouts Base:**
- Hero, Split, Code, Bento, Intro

**Layouts Creativos:**
- Timeline, Circular Diagram, Comparison, Stats
- Process Flow, Isometric, Feature Grid, Header Logos
- Smart Grid (con Container Queries inteligentes)

Abre `index.html` para ver la galería completa.

---

## Temas y tokens

Temas listos (clase o `data-theme`, ver `sapiens-themes.css`):
- Base: `theme-ocean`, `theme-sunset`, `theme-forest`.
- Nature: `theme-nature-spring`, `theme-nature-desert`, `theme-nature-earth`, `theme-nature-ice`, `theme-nature-exotic`, `theme-nature-horizon`, `theme-nature-organic`, `theme-nature-arctic`.
- Pastel: `theme-pastel-playful`, `theme-pastel-dream`, `theme-pastel-spa`, `theme-pastel-sunset`, `theme-pastel-mediterranean`, `theme-pastel-cool`.
- Neon: `theme-neon-cyber`, `theme-neon-intense`, `theme-neon-cmyk`, `theme-neon-youth`, `theme-neon-candy`, `theme-neon-sunset`, `theme-neon-complementary`, `theme-neon-lime-purple`, `theme-neon-berry`, `theme-neon-chocolate`, `theme-neon-volcanic`, `theme-neon-cyan-red`.
- Retro: `theme-retro-warm`, `theme-retro-earthy`, `theme-retro-classic`, `theme-retro-pop`, `theme-retro-leather`, `theme-retro-luxury`.
- Neutral: `theme-neutral-slate`, `theme-neutral-cobalt`, `theme-neutral-modern`, `theme-neutral-luxe`, `theme-neutral-cool`, `theme-neutral-nautical`, `theme-neutral-warm`.
- Elegant: `theme-elegant-navy-gold`, `theme-elegant-corporate`, `theme-elegant-warm-grey`, `theme-elegant-classic-accent`, `theme-elegant-cream-wine`, `theme-elegant-festive`.
- Tech/Dark: `theme-tech-future-neon`, `theme-tech-innovative`, `theme-tech-dynamic`, `theme-dark-carbon`, `theme-dark-anthracite`, `theme-dark-gamer`.
- Fintech/Special: `theme-fintech-trust`, `theme-fintech-gradient`, `theme-fintech-growth`, `theme-nebula-code`, `theme-cyan-stats`.

Contrato de tokens (definido en core, reescrito por temas):
`--bg-*`, `--accent-*`, `--text-*`, `--surface-*`, `--border-*`, `--accent-strong`, `--accent-soft`, `--badge-bg`, `--pill-*`, `--glow-*`, `--font-body`, `--font-head`.

Puedes redefinirlos en un `<style>`; la cascada respeta el valor más cercano.

Componentes sensibles a tokens:
- Header `h1` usa degradado basado en `--text-main`/`--text-muted`.
- `code-block` y `content-box` usan fondos/textos derivados de tokens de tema.
- Superficies/bordes/pills/badges dependen de sus tokens.

---

## Utilidades y decoraciones

- Superficies: `.surface-0` a `.surface-3`
- Bordes: `.border-soft`, `.border-strong`
- Texto: `.text-strong`, `.text-subtle`, `.text-accent`
- Chips/badges: `.pill`, `.pill-sm`, `.badge`, `.badge-primary`, `.badge-gradient`, `.badge-glow`
- Fondos/remates: `.bg-accent-soft`, `.card-accent`, `.bg-blueprint`, `.torn-edge`
- Decorativos: `.orb`, `.grid-lines`, `.watermark`, `.decorative-shape`

---

## Ejemplos

- Con clase de tema (sin CSS inline): `bento.html`, `circular-diagram.html`, `creative-intro.html`, `hero.html`, `modular-demo.html`, `split.html`, `timeline.html`, `code.html`, `stats.html`.
- Tokens manuales: opcional; puedes sustituir un tema por un bloque `<style>` con el contrato completo.

---

## Responsive

**Sistema Multi-Capa de Adaptación:**
- **Desktop**: ratio 16:9, sin scroll, centrado perfecto
- **Tablet** (<1024px): layouts Split/Code a 1 columna
- **Móvil** (<768px): altura flexible, scroll vertical, padding reducido
- **Container Queries**: Algunos layouts se adaptan al tamaño del contenedor (no solo viewport)
  - Smart Grid: tarjetas horizontales en contenedores bajos
  - Timeline/Comparison/Circular: layouts verticales en contenedores estrechos
- **JavaScript Inteligente**: Detecta overflow/underflow y ajusta automáticamente fuentes y columnas

Ver `docs/ADAPTIVE_LAYOUTS.md` para detalles completos.

---

## Componentes rápidos

Card:
```html
<div class="card">
  <h2>Título</h2>
  <ul class="feature-list"><li>Item</li></ul>
</div>
```

Código:
```html
<div class="code-block">
  <div class="code-nav"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
  <pre><code>// tu código</code></pre>
</div>
```

Icono circular:
```html
<div class="icon-circle icon-lg icon-orange"><i class="fa-solid fa-pen-ruler"></i></div>
```

---

## Notas de implementación recientes

- El degradado del título del header usa los tokens de texto del tema (evita títulos lavados en fondos claros).
- `code-block` y `content-box` ahora toman colores de tokens (`--bg-1`, `--text-main`, `--text-muted`, `--border-strong`).
- Nuevas utilidades decorativas: `.bg-blueprint`, `.torn-edge`.
- Nuevos temas: `theme-nebula-code`, `theme-cyan-stats`.

---

## Contribuir

1) Nuevos componentes → `sapiens-components.css` + ejemplo en `examples/`.
2) Nuevos temas → `sapiens-themes.css`.
3) No modificar `sapiens-core.css` salvo cambios estructurales.

---

Versión: 0.5 | Última actualización: 2025-11-26
