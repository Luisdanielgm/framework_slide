# layout-circular

## Cuándo usar
- Hub central con hasta 6 nodos conectados.
- Mapas de stakeholders, ecosistemas o pilares de una idea.

## Markup mínimo
```html
<article class="slide-body layout-circular">
  <div class="circular-center">
    <div class="icon-circle icon-xl icon-magenta"><i class="fa-solid fa-brain"></i></div>
    <div class="text-muted">Centro</div>
  </div>
  <div class="circular-nodes">
    <div class="circular-node">
      <div class="icon-circle icon-sm icon-cyan"><i class="fa-solid fa-cloud"></i></div>
      <div class="node-label">Nodo 1</div>
    </div>
    <div class="circular-node">
      <div class="icon-circle icon-sm icon-amber"><i class="fa-solid fa-gear"></i></div>
      <div class="node-label">Nodo 2</div>
    </div>
  </div>
</article>
```

## Componentes recomendados
- `icon-circle` + `node-label` en cada nodo.
- Centro puede llevar `badge`/`stat-card` breve o texto corto.

## Capacidad sugerida
- Hasta 6 nodos, 5-12 palabras por nodo. Texto breve en el centro.

## Anti-patrones
- No poner párrafos largos en nodos.
- Evita más de 6 nodos; colapsa en mobile.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
