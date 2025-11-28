# layout-intro

## Cuándo usar
- Portada o slide creativa con 1 bloque central.
- Resumen breve de módulo o conclusión corta.
- Mensaje clave con pocos bullets (4-6) o un lead.

## Markup mínimo
```html
<article class="slide-body layout-intro">
  <div class="content-box surface-2 border-soft">
    <p class="badge">Badge opcional</p>
    <h2>Título</h2>
    <p class="text-lead">Lead breve.</p>
    <ul class="feature-list">
      <li>Bullet 1</li>
      <li>Bullet 2</li>
    </ul>
  </div>
</article>
```

## Componentes recomendados
- `content-box` o `card` (1 bloque central).
- `badge`/`header-badge`, `feature-list`, `layout-smart-grid` compacto, `icon-circle`/`stat-card` (pocos).

## Capacidad sugerida
- Óptimo: 80-150 palabras. Máx: 200-250 antes de compactar agresivo.

## Anti-patrones
- No usar contenedores custom (`content-primary`, etc.).
- No meter decor (`grid-lines`, `orb`, etc.) dentro del `<article>`.
- Evita más de 1-2 bloques hermanos; es un layout de centro único.

## Errores comunes detectados
- Usar `<div class="content-primary">` u otros wrappers sin `.content-box`/`.card`. Solución: envolver el contenido en un solo `content-box` central:
  ```html
  <article class="slide-body layout-intro">
    <div class="content-box surface-2 border-soft">
      <h2>Título</h2>
      <p class="text-lead">Lead breve.</p>
      <ul class="feature-list"><li>Bullet</li></ul>
    </div>
  </article>
  ```
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
## Buenas practicas y variaciones

- Respeta la capacidad sugerida: si el texto/elementos exceden, divide en dos slides o migra a layouts mas text-heavy (`layout-split`/`layout-text-analysis`).
- Ajusta jerarquias con utilidades de texto (`text-lead`, `text-caption`, `text-hero`) en lugar de estilos inline; evita a?adir mas `content-box`/`card` de los que el layout soporta.
- Centra un solo `content-box`/`card` con `badge` opcional y `text-lead`; usa `feature-list` corta.
- Ajusta densidad (`intro-tight`/`intro-loose`) manteniendo 1 bloque principal; si hay mas de 2 bloques, migra a `layout-split` o `hero`.
- Usa `icon-circle`/`stat-card` solo en poca cantidad para no romper el enfoque central.
- Si necesitas dividir contenido, crea dos slides en vez de agregar columnas.