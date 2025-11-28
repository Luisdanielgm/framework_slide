# layout-text-analysis

## Cuándo usar
- Texto denso (250-500 palabras) con hallazgos o notas en sidebar.
- Informes, análisis de caso o resúmenes académicos.

## Markup mínimo
```html
<article class="slide-body layout-text-analysis">
  <div class="text-analysis-content surface-1">
    <h3>Título del análisis</h3>
    <p>Bloques de texto principal...</p>
    <p>Segundo párrafo...</p>
  </div>
  <aside class="analysis-sidebar surface-2 border-soft">
    <h4>Hallazgos</h4>
    <ul class="feature-list">
      <li>Insight 1</li>
      <li>Insight 2</li>
      <li>Insight 3</li>
    </ul>
  </aside>
</article>
```

## Variantes / casos
- Sidebar puede llevar métricas (`stat-card` pequeña) o bullets de riesgos/acciones.
- Para notas rápidas, usa `badge` dentro de la sidebar; para más texto, divide en 2-3 bullets.

## Capacidad sugerida
- 250-400 palabras en el cuerpo + 3-5 bullets en sidebar.
- Si el cuerpo supera 500 palabras, dividir en dos slides o usar `layout-split`.

## Anti-patrones
- No mezclar decor dentro del article.
- No remover `text-analysis-content` / `analysis-sidebar`; rompen el responsive.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
