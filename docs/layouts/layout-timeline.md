# layout-timeline

## Cuándo usar
- Secuencia de eventos/pasos lineales (4-6 nodos típicos).
- Roadmaps, hitos de proyecto, procesos con orden claro.

## Markup mínimo
```html
<article class="slide-body layout-timeline">
  <div class="timeline-container">
    <div class="timeline-item">
      <div class="timeline-bullet"></div>
      <div class="timeline-content">
        <h4>Paso 1</h4>
        <p>Descripción breve.</p>
      </div>
    </div>
    <div class="timeline-connector"></div>
    <div class="timeline-item">
      <div class="timeline-bullet"></div>
      <div class="timeline-content">
        <h4>Paso 2</h4>
        <p>Descripción breve.</p>
      </div>
    </div>
  </div>
</article>
```

## Componentes recomendados
- `timeline-item`, `timeline-connector`, bullets de serie.
- Dentro de cada item: `badge`, `feature-list` corta (1-3 bullets), `icon-circle` pequeño.

## Capacidad sugerida
- 4-6 items con 15-25 palabras cada uno.
- Si hay mucho texto por paso, usar `layout-process-flow` o dividir en dos slides.

## Anti-patrones
- No eliminar conectores/bullets (rompe la línea visual).
- Evita más de 7 items; se vuelve ilegible en mobile.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
