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
- No inventes wrappers custom (`.timeline`, `.timeline-step`, etc.); usa `timeline-container` con `timeline-item` y `timeline-connector` para mantener el grid y la línea.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
## Buenas practicas y variaciones

- Respeta la capacidad sugerida: si el texto/elementos exceden, divide en dos slides o migra a layouts mas text-heavy (`layout-split`/`layout-text-analysis`).
- Ajusta jerarquias con utilidades de texto (`text-lead`, `text-caption`, `text-hero`) en lugar de estilos inline; evita a?adir mas `content-box`/`card` de los que el layout soporta.
- Usa `timeline-container` con 4-6 `timeline-item` y `timeline-connector`; agrega `icon-circle` + `badge` para jerarquia.
- Mant?n 15-25 palabras por item (`text-caption` ayuda a compactar).
- Si necesitas mas texto por paso, cambia a `layout-process-flow` o divide en dos slides.
- Para mas de 7 items, separa en varias slides o usa la version curva solo si cabe el texto.