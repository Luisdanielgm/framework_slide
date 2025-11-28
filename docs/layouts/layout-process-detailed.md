# layout-process-detailed

## Cuándo usar
- Pasos con soporte visual (imagen/ícono) y texto descriptivo.
- Procedimientos con 3-5 etapas donde cada paso requiere contexto.

## Markup mínimo
```html
<article class="slide-body layout-process-detailed">
  <div class="process-detailed-step surface-2 border-soft">
    <div class="step-media">
      <div class="icon-circle icon-md icon-cyan"><i class="fa-solid fa-magnifying-glass"></i></div>
    </div>
    <div class="step-content">
      <h4>Paso 1 · Descubrir</h4>
      <p>Descripción corta del paso.</p>
      <ul class="feature-list">
        <li>Detalle 1</li>
        <li>Detalle 2</li>
      </ul>
    </div>
  </div>
  <!-- más process-detailed-step -->
</article>
```

## Variantes / casos
- Reemplaza `step-media` con una imagen/thumbnail si lo necesitas.
- Para menos texto, omite la lista y deja solo título + párrafo.

## Capacidad sugerida
- 3-5 pasos, 20-40 palabras por paso. Si el texto es mayor, usa `layout-split` o separa en varias slides.

## Anti-patrones
- No quitar `step-content`/`step-media`; estructura el alineado y responsivo.
- Evita mezclar decor internos; mantén solo cards/íconos en cada paso.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
## Buenas practicas y variaciones

- Respeta la capacidad sugerida: si el texto/elementos exceden, divide en dos slides o migra a layouts mas text-heavy (`layout-split`/`layout-text-analysis`).
- Ajusta jerarquias con utilidades de texto (`text-lead`, `text-caption`, `text-hero`) en lugar de estilos inline; evita a?adir mas `content-box`/`card` de los que el layout soporta.
- 3-4 pasos con `process-detailed-step`; cada uno con numero, titulo corto y texto de 50-90 palabras max.
- Usa imagen/placeholder 16:9 ligero; evita graficos pesados.
- Si los pasos son mas de 4 o el texto es muy largo, divide en dos slides o usa `layout-process-flow`.
- Ajusta densidad con `timeline-tight`/`timeline-loose` (aplica a estos steps) si falta/ sobra espacio.