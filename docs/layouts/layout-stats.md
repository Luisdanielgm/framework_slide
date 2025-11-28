# layout-stats

## Cuándo usar
- KPIs, métricas o comparativos numéricos en 3-6 tarjetas.
- Resumen ejecutivo de resultados con contexto breve.

## Markup mínimo
```html
<article class="slide-body layout-stats">
  <div class="stat-card surface-2 border-soft">
    <div class="stat-value">98%</div>
    <div class="stat-label">Disponibilidad</div>
    <p class="text-muted">Contexto corto.</p>
  </div>
  <div class="stat-card surface-2 border-soft">
    <div class="stat-value">24 ms</div>
    <div class="stat-label">Latencia</div>
    <p class="text-muted">Contexto corto.</p>
  </div>
</article>
```

## Componentes recomendados
- `stat-card` (valor + label + texto breve).
- Puede incluir `badge` pequeña o `icon-circle` discreto.

## Capacidad sugerida
- 3-6 métricas con 1-2 líneas de contexto cada una.
- Si necesitas texto largo, usa `layout-split` o `layout-hero`.

## Anti-patrones
- No mezclar tarjetas sin clase `stat-card` (perderás estilos y auto-espaciado).
- Evita párrafos largos dentro de cada tarjeta.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
