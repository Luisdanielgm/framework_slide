# layout-process-flow

## Cuándo usar
- Flujo vertical de pasos cortos (3-6) con numeración automática.
- Checklists de implementación o fases secuenciales.

## Markup mínimo
```html
<article class="slide-body layout-process-flow">
  <div class="process-step surface-2 border-soft">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Definir alcance</h4>
      <p>Descripción breve del paso.</p>
    </div>
  </div>
  <div class="process-step surface-2 border-soft">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Diseñar</h4>
      <p>Descripción breve del paso.</p>
    </div>
  </div>
</article>
```

## Variantes / casos
- Puedes omitir números si usas bullets visuales; pero `step-number` mantiene la alineación.
- Añade `feature-list` corta dentro de `step-content` si cada paso necesita 1-2 bullets.

## Capacidad sugerida
- 3-6 pasos, 15-30 palabras por paso. Para más texto por paso, usa `layout-process-detailed`.

## Anti-patrones
- No anidar decor ni divs externos dentro de `process-step`.
- Evita más de 7 pasos; dividir en dos slides si crece.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
## Buenas practicas y variaciones

- Respeta la capacidad sugerida: si el texto/elementos exceden, divide en dos slides o migra a layouts mas text-heavy (`layout-split`/`layout-text-analysis`).
- Ajusta jerarquias con utilidades de texto (`text-lead`, `text-caption`, `text-hero`) en lugar de estilos inline; evita a?adir mas `content-box`/`card` de los que el layout soporta.
- Usa `process-step` con `step-number` y texto corto (1-3 lineas); 4-6 pasos es el rango optimo.
- Si cada paso requiere mas detalle, cambia a `layout-process-detailed` o `layout-split`.
- Mant?n consistentes los iconos/badges por paso para escaneo rapido.
- Evita listas largas dentro de un paso; separa en bullets cortos.