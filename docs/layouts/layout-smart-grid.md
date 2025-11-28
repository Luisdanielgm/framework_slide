# layout-smart-grid

## Cuándo usar
- Colección de cards repetidas adaptables al ancho (auto-grid).
- Ideal dentro de `layout-hero` o `layout-intro` cuando tienes varias fichas cortas.

## Markup mínimo
```html
<article class="slide-body layout-hero">
  <div class="content-box">
    <h2>Título</h2>
    <div class="layout-smart-grid">
      <div class="content-box surface-2 border-soft">
        <h4>Item 1</h4>
        <p class="text-muted">Descripción breve.</p>
      </div>
      <div class="content-box surface-2 border-soft">
        <h4>Item 2</h4>
        <p class="text-muted">Descripción breve.</p>
      </div>
      <!-- más items -->
    </div>
  </div>
</article>
```

## Variantes / casos
- Usa `layout-smart-grid is-condensed` para reducir gaps cuando hay muchas cards pequeñas.
- Puedes mezclar `icon-circle`, `badge` o métricas cortas dentro de cada card.

## Capacidad sugerida
- 4-8 cards con 10-20 palabras cada una. Si cada card es larga, cambia a `layout-bento` o `layout-feature-grid`.

## Anti-patrones
- No uses divs sueltos sin `content-box`/`feature-card`; pierdes padding y bordes.
- Evita anidar decor internos; el grid gestiona solo cards.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
