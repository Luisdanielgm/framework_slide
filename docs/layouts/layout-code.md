# layout-code

## Cuándo usar
- Explicar fragmentos de código, APIs o pseudodiagramas.
- Necesitas columna de texto + columna de código/console.

## Markup mínimo
```html
<article class="slide-body layout-code">
  <div class="content-box surface-2 border-soft">
    <h3>Concepto</h3>
    <p>Descripción corta.</p>
    <ul class="feature-list">
      <li>Regla 1</li>
      <li>Regla 2</li>
    </ul>
  </div>
  <pre class="code-block">// Código o JSON breve</pre>
</article>
```

## Componentes recomendados
- Izquierda: `content-box`, `feature-list`, `badge`.
- Derecha: `code-block` (evita bloques enormes), lista corta de comandos.

## Capacidad sugerida
- Óptimo: 150-250 palabras. Máx: 300-400 con compresión.
- Código: mantén bloques breves (5-20 líneas). Para más, dividir en varias slides.

## Anti-patrones
- No usar contenedores custom que quiten `container-type`.
- Evita imágenes pesadas; prioriza texto+code.
## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.
