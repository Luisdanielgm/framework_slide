# layout-bento

## Cuándo usar
- 3-4 ideas iguales con formato de mosaico (2x2 en desktop).
- Resumen de funcionalidades, ventajas o features.

## Markup mínimo
```html
<article class="slide-body layout-bento">
  <div class="content-box surface-2 border-soft">
    <h3>Bloque 1</h3>
    <p>Texto corto.</p>
  </div>
  <div class="content-box surface-2 border-soft">
    <h3>Bloque 2</h3>
    <p>Texto corto.</p>
  </div>
  <div class="content-box surface-2 border-soft">
    <h3>Bloque 3</h3>
    <p>Texto corto.</p>
  </div>
  <div class="content-box surface-2 border-soft">
    <h3>Bloque 4</h3>
    <p>Texto corto.</p>
  </div>
</article>
```

## Componentes recomendados
- `content-box`/`card` en cada celda; usa `span-row`/`span-col` si necesitas celdas grandes.
- `icon-circle`, `feature-list` corta, `badge` por bloque.

## Capacidad sugerida
- Óptimo: 40-70 palabras por bloque. Total 160-280 palabras.
- Máx: bloques compactos; si crece, divide en otra slide.

## Anti-patrones
- No mezclar decor dentro del grid.
- Evita textos largos en una sola celda; distribuye para mantener balance visual.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
