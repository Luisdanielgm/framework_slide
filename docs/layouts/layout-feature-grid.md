# layout-feature-grid

## Cuándo usar
- Lista de features/beneficios en tarjetas uniformes.
- 3-6 items con icono/título/texto corto.

## Markup mínimo
```html
<article class="slide-body layout-feature-grid">
  <div class="feature-card surface-2 border-soft">
    <div class="icon-circle icon-sm icon-cyan"><i class="fa-solid fa-bolt"></i></div>
    <h4>Feature 1</h4>
    <p class="text-muted">Descripción breve.</p>
  </div>
  <div class="feature-card surface-2 border-soft">
    <div class="icon-circle icon-sm icon-amber"><i class="fa-solid fa-lock"></i></div>
    <h4>Feature 2</h4>
    <p class="text-muted">Descripción breve.</p>
  </div>
  <!-- más feature-card -->
</article>
```

## Variantes / casos
- Para grids compactos agrega `is-condensed` al article si necesitas menos gaps.
- Puedes mezclar `badge` o cifras pequeñas dentro de cada `feature-card`.

## Capacidad sugerida
- 8-25 palabras por card. Si necesitas párrafos largos, usa `layout-bento` o `layout-split`.

## Anti-patrones
- No uses divs genéricos sin `feature-card`; perderás alineación y espaciado.
- Evita más de 6-7 cards; dividir en otra slide si crece.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
