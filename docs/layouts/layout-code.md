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
- No usar contenedores custom que quiten `container-type` (ej. `content-primary`/`content-secondary`); usa dos hijos directos: `content-box` para texto y `code-block` para código.
- Evita imágenes pesadas; prioriza texto+code.

## Sugerencias para texto breve
- Si el texto es corto, usa `split-loose` en `layout-code` y apóyate en `text-lead`, `badge` o `icon-circle` en la columna de texto para equilibrar con el código.
- En prácticas guiadas, deja claro el contexto con un badge/lead breve; si la lista de pasos + código es larga, divide en dos slides o considera `layout-text-analysis`/`layout-split` para evitar overflow.

## Buenas practicas y variaciones

- Respeta la capacidad sugerida: si el texto/elementos exceden, divide en dos slides o migra a layouts mas text-heavy (`layout-split`/`layout-text-analysis`).
- Ajusta jerarquias con utilidades de texto (`text-lead`, `text-caption`, `text-hero`) en lugar de estilos inline; evita a?adir mas `content-box`/`card` de los que el layout soporta.
- Usa `badge` y `text-lead` al inicio para dar contexto (ej. “Practica guiada”) y mejorar legibilidad.
- Coloca bullets/ol en la columna de texto y deja la columna derecha solo para `code-block` para que el escaneo sea claro.
- Ajusta densidad con `split-tight` si falta altura o `split-loose` si sobra espacio.
- Si el codigo es muy largo, muestra solo el fragmento clave y enlaza a un recurso; o divide en dos slides (texto y luego codigo completo).
- Para pasos + fragmento extenso, considera migrar a `layout-text-analysis` (cuerpo + sidebar) o a `layout-split` con `text-lead`.

## Fondos y estilo
- Para quitar fondo/sombra pero mantener padding y alineacion, usa `content-box is-ghost` (o `content-box surface-transparent`).
- Para contraste, combina un `content-box` normal (`surface-2`/`surface-3` + `border-soft`) con otro `is-ghost`/`surface-0` segun necesidad.