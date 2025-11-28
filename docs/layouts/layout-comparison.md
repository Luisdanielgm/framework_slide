# layout-comparison

## Cuándo usar
- VS/Before-After, alternativas A/B o pros/contras.
- Necesitas dos paneles equivalentes con divisor central.

## Markup mínimo
```html
<article class="slide-body layout-comparison">
  <div class="content-box surface-2 border-soft">
    <p class="badge">Opción A</p>
    <h3>Headline</h3>
    <ul class="feature-list">
      <li>Fortaleza 1</li>
      <li>Fortaleza 2</li>
    </ul>
  </div>

  <div class="comparison-divider"></div>

  <div class="content-box surface-2 border-soft">
    <p class="badge">Opción B</p>
    <h3>Headline</h3>
    <ul class="feature-list">
      <li>Fortaleza 1</li>
      <li>Fortaleza 2</li>
    </ul>
  </div>
</article>
```

## Variantes / casos
- Before/After: usa badges “Antes” / “Después”.
- Pros/Contras: a la izquierda “Pros” y a la derecha “Contras” con bullets cortos.

## Capacidad sugerida
- 2-4 bullets por lado, 15-25 palabras cada uno. Si hay más texto, cambia a `layout-split`.

## Anti-patrones
- No quites `comparison-divider`; mantiene la separación visual.
- No mezcles decor dentro del article.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
## Buenas practicas y variaciones

- Respeta la capacidad sugerida: si el texto/elementos exceden, divide en dos slides o migra a layouts mas text-heavy (`layout-split`/`layout-text-analysis`).
- Ajusta jerarquias con utilidades de texto (`text-lead`, `text-caption`, `text-hero`) en lugar de estilos inline; evita a?adir mas `content-box`/`card` de los que el layout soporta.
- Dos paneles con textos balanceados; usa `comparison-divider` si aplica.
- Resume en 2-3 bullets por lado; para texto denso, migra a `layout-split` o `layout-text-analysis`.
- Usa `badge`/`icon-circle` para marcar VS o estados (Antes/Despues).
- Evita parrafos largos sin cortes; usa `text-lead` para mensajes clave.