# layout-split

## Cuando usar
- Contenido denso: texto + soporte visual o lista extensa.
- Comparar hallazgos, explicar procesos con mas de 200 palabras.

## Markup minimo
```html
<article class="slide-body layout-split">
  <div class="content-box surface-2 border-soft">
    <h2>Titulo/visual</h2>
    <p class="text-muted">Usa imagen/diagrama o intro.</p>
  </div>
  <div class="content-box surface-2 border-soft">
    <h3>Hallazgos</h3>
    <ul class="feature-list">
      <li>Punto 1</li>
      <li>Punto 2</li>
      <li>Punto 3</li>
    </ul>
  </div>
</article>
```

## Componentes recomendados
- `content-box`/`card` en cada columna.
- `feature-list`, `badge`, `code-block` pequeno, graficos/diagramas.

## Capacidad sugerida
- Optimo: 200-300 palabras. Max: 400-500 (se compacta con auto-ajuste).

## Anti-patrones
- No mezclar decor interno en columnas.
- Evita mas de 2 columnas; este layout es 2 col de base.
- Si el texto es muy corto, usa `layout-hero`/`intro` en su lugar.

## Sugerencias para texto breve
- Si debes mantener `layout-split` con poco texto, usa `split-loose` para dar respiro y apóyate en `badge`, `icon-circle` y `feature-list` corta para que ninguna columna quede vacía.
- Usa `text-lead` en listas o párrafos clave para subir el tamaño/legibilidad sin romper el layout.

## Errores comunes detectados
- Envolver las columnas en wrappers custom (`content-primary`, `content-secondary`, etc.) en vez de usar directamente dos `content-box`/`card` hermanos (no hay estilos para esos wrappers). Solucion:
  ```html
  <article class="slide-body layout-split">
    <div class="content-box surface-2 border-soft">...</div>
    <div class="content-box surface-2 border-soft">...</div>
  </article>
  ```
- Dejar grandes bloques de texto sin dividir en la columna derecha/izquierda. Si el texto supera ~200-300 palabras totales, considera `layout-text-analysis` (cuerpo + sidebar) o separa en dos slides para evitar overflow.

## Variantes utiles
- `split-tight`: reduce el gap y el padding para caber en alto limitado o texto breve.
- `split-loose`: abre el gap y el padding para dar respiro cuando el contenido es corto o muy visual.
- Puedes mezclar fondos por columna para mas variedad: deja una caja con `surface-0` o fondo transparente y la otra con `surface-2`/`surface-3` + `border-soft` para marcar contraste sin romper el layout. Usa `content-box is-ghost` (o `surface-transparent`) para quitar fondo/sombra conservando padding y alineacion del `content-box`.
## Buenas practicas y variaciones

- Respeta la capacidad sugerida: si el texto/elementos exceden, divide en dos slides o migra a layouts mas text-heavy (`layout-split`/`layout-text-analysis`).
- Ajusta jerarquias con utilidades de texto (`text-lead`, `text-caption`, `text-hero`) en lugar de estilos inline; evita a?adir mas `content-box`/`card` de los que el layout soporta.
- Dos hijos directos `content-box`/`card` sin wrappers custom; usa `split-tight` si falta altura o `split-loose` si quieres mas respiro.
- Coloca listas/ol o bullets en la columna de texto y deja visuals/codigo en la otra para lectura rapida.
- Para contrastes, mezcla `surface-0`/`is-ghost` en una columna y `surface-2/3 + border-soft` en la otra.
- Si el texto excede 400-500 palabras, migra a `layout-text-analysis` o divide en dos slides.