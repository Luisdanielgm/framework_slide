# Guía de Uso - Sapiens Slide Framework (v0.6 Modular)

Framework moderno para crear presentaciones web responsivas. Arquitectura modular: core estable, temas por tokens, capa decor separada y componentes/layouts evolutivos.

---

## Inicio rápido

```html
<link rel="stylesheet" href="sapiens-core.css">
<link rel="stylesheet" href="sapiens-themes.css"><!-- opcional, tokens -->
<link rel="stylesheet" href="sapiens-decor.css"><!-- opcional, texturas -->
<link rel="stylesheet" href="sapiens-layouts.css"><!-- layouts base -->
<link rel="stylesheet" href="sapiens-components.css"><!-- componentes y layouts creativos -->
```

Estructura mínima:
```html
<body class="theme-ocean bg-blueprint">
  <div id="sapiens-slide" class="slide-shell surface-1 border-soft">
    <div class="decorative grid-lines"></div>
    <header>
      <h1>Título de la Diapositiva</h1>
      <span class="header-badge">Categoría</span>
    </header>
    <article class="slide-body layout-hero">...</article>
    <footer>...</footer>
  </div>
</body>
```

---

## Archivos

```
sapiens-core.css        -> Base estructural/responsiva (estable)
sapiens-themes.css      -> Temas rápidos (tokens)
sapiens-decor.css       -> Texturas/adornos opcionales (capa decor)
sapiens-layouts.css     -> Layouts base (hero, split, code, bento, intro)
sapiens-components.css  -> Componentes UI y layouts creativos (evolutivo)
sapiens.js              -> Motor inteligente (overflow/underflow + animaciones + densidad en intro/hero)
examples/               -> Galería de ejemplos lista para abrir
docs/                   -> Arquitectura y theming
legacy/                 -> Versión monolítica (deprecated)
```

---

## Layouts disponibles

**Layouts Base (sapiens-layouts.css):**
- **Hero** (80-250 palabras) - Slides introductorias, conclusiones  
- **Split** (200-500 palabras) ⭐ Ideal para texto denso - Análisis, investigación
- **Code** (150-400 palabras) - Tutoriales, documentación técnica
- **Bento** (120-250 palabras) - Comparación de 4 conceptos
- **Intro** (80-250 palabras) - Portadas, slides de sección

**Layouts Creativos (sapiens-components.css):**
- **Text Analysis** (250-500 palabras) ⭐ Ideal para académico - Análisis con hallazgos destacados
- **Timeline** (100-250 palabras) - Procesos cronológicos
- **Timeline Curved** (150-300 palabras) - Evolución con contexto detallado
- **Process Detailed** (200-450 palabras) - Metodologías paso a paso
- **Circular Diagram** - Ciclos y relaciones circulares
- **Comparison** (180-350 palabras) - Análisis antes/después, pros/cons
- **Stats** - Métricas y estadísticas
- **Process Flow** - Flujos de proceso
- **Isometric** - Visualizaciones 3D
- **Feature Grid** - Grids de características
- **Header Logos** - Logos y partners
- **Smart Grid** - Grid inteligente con Container Queries

Abre `index.html` para ver la galería completa.

**Capacidad de contenido**: Ver `docs/LAYOUT_CONTENT_CAPACITY.md` para guía detallada sobre cuánto texto soporta cada layout.

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

Componentes sensibles a tokens:
- Header `h1` usa degradado basado en `--text-main`/`--text-muted`.
- `code-block` y `content-box` usan fondos/textos derivados de tokens de tema.
- Superficies/bordes/pills/badges dependen de sus tokens.

---

## Decoraciones (sapiens-decor.css)

Clases opt-in para texturas y remates:
- Fondos: `bg-blueprint`, `bg-watercolor`, `bg-wood`, `bg-dots`, `bg-noise-soft`, `bg-icons`, `bg-aurora`, `bg-stripes-soft`, `bg-halftone`, `bg-fiber`, `bg-grid-glow`, `bg-molecules`.
- Remates/decorativos: `.grid-lines`, `.orb`, `.watermark`, `.torn-edge`, `.decorative-shape`.

---

## Ejemplos

- Galería: `index.html` (links a todas las categorías).
- Intro: `creative-intro*.html`.
- Hero: `hero.html`, `intelligent-layout-test.html`.
- Split: `split.html`, `modular-demo.html`.
- Otros: `code.html`, `bento.html`, `timeline.html`, `circular-diagram.html`, `process-flow.html`, `comparison.html`, `isometric.html`, `feature-grid.html`, `header-logos.html`, `smart-grid.html`, `stats.html`.
- Tokens manuales: opcional; puedes sustituir un tema por un bloque `<style>` con el contrato completo.

---

## Responsive

**Sistema multi-capa:**
- **Exterior (core):** ratio 16:9, centrado, sin scroll en desktop; modo página en <768px; safe-area y compactación inteligente de header/footer.
- **Interior (components/layouts):** Container Queries por ancho/alto; clases `is-overflowing/has-extra-space` aplicadas por `sapiens.js` reducen fuentes/padding o fuerzan columnas.
- **JavaScript inteligente:** detecta overflow/underflow con histéresis y ajusta columnas si hace falta. Densidad automática por layout: Intro/Hero (`intro-dense|tight|cozy|loose`), Split/Code (`split-tight|loose`), Stats (`stats-tight|loose`), Timeline/Process (`timeline-tight|loose`), Text-analysis/Comparison (`analysis-tight|loose`), Circular (`circular-tight|loose`), Bento/Smart-grid (`grid-tight|loose`). Tablet y móviles pequeños compactan más y, en móviles muy reducidos, se habilita scroll interno oculto solo en casos extremos.

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

## Contribuir

1) Nuevos componentes/layouts -> `sapiens-components.css` + ejemplo en `examples/`.
2) Nuevos temas -> `sapiens-themes.css`.
3) Nuevas texturas/adornos -> `sapiens-decor.css`.
4) Layouts base -> `sapiens-layouts.css`.
5) No modificar `sapiens-core.css` salvo cambios estructurales mayores.

---

Versión: 0.6 | Última actualización: 2025-11-26
