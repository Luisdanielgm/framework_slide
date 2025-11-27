# Guía de layouts y componentes (capa interior)
Cómo usar cada `layout-*` dentro de `<article class="slide-body ...">`, combinándolos con componentes nativos del framework.

## Convenciones base
- Carga CSS en orden: `sapiens-core.css`, `sapiens-themes.css`, `sapiens-decor.css`, `sapiens-layouts.css`, `sapiens-components.css`.
- Contenedor: `<article class="slide-body layout-...">` dentro del shell (`#sapiens-slide`). No metas decor (`grid-lines`, `orb`, etc.) dentro del article.
- Usa las clases tal cual; evita estilos inline que rompan la detección de overflow. El JS (`sapiens.js`) ajusta tamaños cuando detecta `is-overflowing`.
- Prefiere components prehechos (cards, icon-circle, badge, feature-list, layout-smart-grid) antes de crear divs sueltos.

## Layouts base (`sapiens-layouts.css`)
- `layout-hero`: bloque único fuerte. Útil para portada o idea central. Combínalo con `.content-box` o `.card` y bullets cortos. Ej: `examples/hero/hero.html`.
- `layout-split`: dos columnas (izq/der). Ideal para texto denso + soporte visual o lista. Usa `.content-box` o `.feature-list` en cada lado. Ej: `examples/split/split.html`.
- `layout-code`: explicación + código. Izquierda texto, derecha `<pre class="code-block">`. Ej: `examples/code/code.html`.
- `layout-bento`: grid 2x2 (colapsa a 1xN en mobile). Usa `.card`/`.content-box` y utilidades `.span-row`/`.span-col` según necesites. Ej: `examples/bento/bento.html`.
- `layout-intro`: centro único, buena para mensajes cortos o creativos. Ej: `examples/intro/creative-intro*.html`.
- `layout-text-analysis`: cuerpo + sidebar (`.text-analysis-content` + `.analysis-sidebar`). Ideal para 250-500 palabras con hallazgos.
- `layout-timeline`: nodos conectados; usa `.timeline-container`, `.timeline-item`, `.timeline-connector`.
- `layout-process-detailed`: pasos con imagen/texto; usa `.process-detailed-step`.
- `layout-process-flow`: pasos verticales con `.process-step` + `.step-number` y cards internas.
- `layout-timeline-curved`: nodos `.timeline-curved-node` sobre curva SVG.

## Layouts creativos (`sapiens-components.css` + layouts)
- `layout-timeline`: nodos lineales conectados con `.timeline-container`, `.timeline-item`, `.timeline-connector`. Ej: `examples/timeline/timeline.html`.
- `layout-circular`: hub central + hasta 6 nodos. Estructura: `.circular-center` y `.circular-nodes > .circular-node` (cada uno con `icon-circle` + `.node-label`). Ej: `examples/circular/circular-diagram.html`.
- `layout-comparison`: dos paneles + divisor `comparison-divider`. Ideal VS/Before-After. Ej: `examples/comparison/comparison.html`.
- `layout-stats`: tarjetas de métrica `.stat-card`. Ej: `examples/intro/creative-intro-stats.html`.
- `layout-process-flow`: pasos verticales con `process-step` y numeración automática. Ej: `examples/process-flow/process-flow.html`.
- `layout-feature-grid`: cuadrícula de features con `feature-card`. Ej: `examples/feature-grid/feature-grid.html`.
- `layout-smart-grid`: grid adaptativo (usa `.layout-smart-grid` dentro de hero/intro). Ej: `examples/smart-grid/smart-grid.html`.
- Text-heavy especiales (`docs/ADAPTIVE_LAYOUTS.md`):
- `layout-text-analysis`: cuerpo + sidebar con hallazgos. Ej: `examples/text-heavy/layout-text-analysis.html`.
- `layout-timeline-curved`: versión curva con SVG de fondo. Ej: `examples/text-heavy/layout-timeline-curved.html`.
- `layout-process-detailed`: pasos con imagen + texto. Ej: `examples/text-heavy/layout-process-detailed.html`.
- `layout-process-flow`: pasos verticales con cards internas. Ej: `examples/process-flow/process-flow.html`.

## Componentes frecuentes
- `content-box` / `card`: contenedores base con padding y borde suave.
- `feature-list`: lista de bullets estilizados (`li` internos).
- `badge`, `header-badge`, `pill`: chips cortas para estado/etiqueta.
- `icon-circle` (`icon-sm|md|lg|xl` + `icon-*` color): para nodos o acentos (ver `sapiens-components.css`).
- `layout-smart-grid`: para cards repetidas; agregar `is-condensed` para compactar.
- `code-block`: usa dentro de `layout-code` o donde necesites bloque monoespaciado.
- Utilidades: `mt-*`, `mb-*`, `gap-*`, `text-muted`, `text-lead`, `border-soft`, `surface-*`.

## Comportamiento inteligente en Intro/Hero
- Densidad automática: `sapiens.js` asigna `intro-dense`, `intro-tight`, `intro-cozy`, `intro-loose` según ratio ocupado, número de bloques y densidad de texto en `.content-box`. Histéresis evita saltos entre estados.
- Estilos por estado (`sapiens-layouts.css`):
  - `intro-dense/tight`: compactan padding, gaps, listas, grids, badges/pills, iconos y stats.
  - `intro-loose`: amplía padding/tipografías/gaps cuando hay pocos bloques y texto breve; excluido si hay `stat-card` o `layout-smart-grid`.
- Breakpoints extra: tablet (`max-width:1024px`) compacta padding/gaps; móviles pequeños (`max-width:540px` o `max-height:620px`) y extra pequeños (`max-width:430px` o `max-height:560px`) reducen más tamaños/gaps e incluyen scroll interno oculto como último recurso.

## Comportamiento inteligente en otros layouts
- Split/Code: clases `split-tight|split-loose` (padding/gaps/typo en content-box) según ocupación y nº de bloques.
- Stats: `stats-tight|stats-loose` compacta o amplía `stat-card` y gaps.
- Timeline/Process-detailed: `timeline-tight|timeline-loose` ajusta gaps en contenedores y pasos.
- Text-analysis/Comparison: `analysis-tight|analysis-loose` ajusta padding/gaps en paneles/sidebars.
- Circular: `circular-tight|circular-loose` modifica tamaño/gaps de nodos.
- Bento/Smart-grid: `grid-tight|grid-loose` afecta gaps y padding en cards/grids.

## Patrones de uso
- Header/Footer: no requieren clases; solo pon `<h1>` + `.header-badge` opcional en header, y 2 spans en footer.
- Overlays: declara `grid-lines`, `orb`, `decorative-shape`, `watermark` al inicio del shell para que queden debajo de `slide-body`.
- Temas y fondos: aplica `theme-*` y opcionalmente `bg-*` en `<body>`. No mezclar colores manuales con inline styles.
- Responsivo: los layouts usan Container Queries (`slideBody`) y `sapiens.js` añade `.is-overflowing`/`.has-extra-space`. No desactives `container-type` en `slide-body`.
- Densidad automática (sapiens.js + sapiens-layouts.css): intro/hero (`intro-*`), split/code (`split-*`), stats (`stats-*`), timeline/process/flow (`timeline-*`), text-analysis/comparison (`analysis-*`), circular (`circular-*`), bento/smart-grid (`grid-*`). Ajustan padding/gaps/typo según ratio/nº de nodos/texto; tablet/móvil compactan más y móviles muy pequeños activan scroll interno oculto.

## Ejemplo mínimo (hero)
```html
<article class="slide-body layout-hero">
  <div class="content-box">
    <h2>Idea central</h2>
    <ul class="feature-list">
      <li>Punto clave</li>
      <li>Dato breve</li>
    </ul>
  </div>
</article>
```

## Ejemplo mínimo (circular)
```html
<article class="slide-body layout-circular">
  <div class="circular-center">
    <div class="icon-circle icon-xl icon-magenta"><i class="fa-solid fa-brain"></i></div>
  </div>
  <div class="circular-nodes">
    <div class="circular-node">
      <div class="icon-circle icon-sm icon-cyan"><i class="fa-solid fa-cloud"></i></div>
      <div class="node-label">Cloud API</div>
    </div>
    <!-- hasta 6 nodos -->
  </div>
</article>
```

## Dónde profundizar
- `docs/TEMPLATE_GUIDE.md`: capa exterior (body/shell/overlays/header/footer).
- `docs/ADAPTIVE_LAYOUTS.md`: reglas responsivas y qué va en cada capa.
- `docs/LAYOUT_CONTENT_CAPACITY.md`: cuánta información cabe en cada layout.
- `docs/ARCHITECTURE.md`: roles de core, themes, decor, layouts, components.
- Ejemplos HTML en `examples/**` para cada layout citado.
