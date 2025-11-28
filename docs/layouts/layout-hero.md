# layout-hero

## Cuándo usar
- Idea central con énfasis en título + 1-2 apoyos.
- Portada o llamada a la acción con visual ligero (icono/gráfico).

## Markup mínimo
```html
<article class="slide-body layout-hero">
  <div class="content-box surface-2 border-soft">
    <h2>Título impactante</h2>
    <p class="text-lead">Mensaje clave en 1-2 líneas.</p>
    <ul class="feature-list">
      <li>Bullet corto</li>
      <li>Bullet corto</li>
    </ul>
  </div>
</article>
```

## Componentes recomendados
- `content-box`/`card`, `badge`, `feature-list`, `icon-circle`, `layout-smart-grid` pequeño.

## Capacidad sugerida
- Óptimo: 80-150 palabras. Máx: 200-250 (el auto-ajuste reducirá tipografía/gaps).

## Anti-patrones
- No dupliques columnas; si necesitas dos, usa `layout-split`.
- Evita textos largos sin dividir en bullets o párrafos cortos.

## Errores comunes detectados
- Párrafos extensos (200+ palabras) en un solo bloque dentro de hero. Solución: dividir en un lead breve + bullets, o migrar a `layout-split`/`layout-text-analysis` si el contenido es denso.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
## Buenas practicas y variaciones

- Respeta la capacidad sugerida: si el texto/elementos exceden, divide en dos slides o migra a layouts mas text-heavy (`layout-split`/`layout-text-analysis`).
- Ajusta jerarquias con utilidades de texto (`text-lead`, `text-caption`, `text-hero`) en lugar de estilos inline; evita a?adir mas `content-box`/`card` de los que el layout soporta.
- Usa `content-box`/`card` con `badge` y `text-lead` para contexto rapido; agrega `feature-list` corta para puntos clave.
- Ajusta densidad con `intro-tight`/`intro-loose` (auto) y cambia a `layout-split` si el texto supera la capacidad.
- Evita parrafos largos; divide en lead + bullets o migra a `layout-text-analysis` si hay mas contexto.
- Puedes combinar con `layout-smart-grid` compacto para highlights visuales.