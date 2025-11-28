# layout-timeline-curved

## Cuándo usar
- Roadmaps/cronologías con recorrido curvo (visual más dinámico que la timeline lineal).
- 4-6 hitos conectados por una curva.

## Markup mínimo
```html
<article class="slide-body layout-timeline-curved">
  <div class="timeline-curved">
    <svg class="timeline-curve" viewBox="0 0 100 40" preserveAspectRatio="none">
      <path d="M0,30 Q25,10 50,20 T100,25" />
    </svg>
    <div class="timeline-curved-node" style="left: 5%">
      <div class="badge">Inicio</div>
      <div class="text-muted">Kickoff</div>
    </div>
    <div class="timeline-curved-node" style="left: 40%">
      <div class="badge">Hito 2</div>
      <div class="text-muted">Entrega parcial</div>
    </div>
    <div class="timeline-curved-node" style="left: 80%">
      <div class="badge">Final</div>
      <div class="text-muted">Release</div>
    </div>
  </div>
</article>
```

## Variantes / casos
- Usa `icon-circle` o emojis dentro de cada nodo si quieres más señal visual.
- Ajusta el path del SVG para curvas más suaves o escalonadas.

## Capacidad sugerida
- 4-6 nodos con 5-12 palabras cada uno. Si necesitas más texto por nodo, usa `layout-timeline` lineal o `process-detailed`.

## Anti-patrones
- No dejes nodos sin `timeline-curved-node`; mantienen el posicionamiento relativo a la curva.
- Evita más de 6 nodos; se solapan en mobile.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
