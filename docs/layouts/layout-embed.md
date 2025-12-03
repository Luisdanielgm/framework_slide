# layout-embed

## Cuándo usar
- Contenido interactivo embebido (juegos, simulaciones, artefactos HTML).
- Iframes que necesitan ocupar todo el espacio disponible del slide.
- Cualquier contenido externo que requiera aislamiento (sandbox).

## Markup mínimo
```html
<article class="slide-body layout-embed">
  <iframe 
    sandbox="allow-scripts allow-same-origin"
    srcdoc="<!DOCTYPE html><html>...</html>"
    title="Contenido interactivo">
  </iframe>
</article>
```

## Con contenedor (recomendado)
```html
<article class="slide-body layout-embed">
  <div class="embed-container">
    <iframe 
      sandbox="allow-scripts allow-same-origin"
      srcdoc="<!DOCTYPE html><html>...</html>"
      title="Simulación educativa">
    </iframe>
  </div>
</article>
```

## Variantes

### `.embed-padded`
Agrega padding interno para separar el iframe del borde del article.
```html
<article class="slide-body layout-embed embed-padded">
  ...
</article>
```

### `.embed-full`
Elimina bordes redondeados para que el contenido ocupe absolutamente todo el espacio.
```html
<article class="slide-body layout-embed embed-full">
  ...
</article>
```

## Atributos del iframe recomendados
- `sandbox="allow-scripts allow-same-origin"`: Permite scripts pero con aislamiento de seguridad.
- `srcdoc="..."`: El HTML del artefacto va aquí, no en `src`.
- `title="..."`: Accesibilidad - describe el contenido.
- `loading="lazy"`: Carga diferida si hay muchos iframes.

## Capacidad sugerida
- El iframe ocupa todo el espacio disponible del article.
- Altura mínima: 400px (300px en viewports pequeños, 250px en muy pequeños).
- No hay límite de contenido dentro del iframe; el contenido interno maneja su propio scroll.

## Anti-patrones
- No uses `layout-embed` para contenido estático; usa `layout-hero` o `layout-intro`.
- No combines con otros layouts (es un layout de propósito único).
- No pongas múltiples iframes; usa un iframe por slide.

## Buenas prácticas
- Siempre usa `sandbox` para seguridad.
- Incluye `title` para accesibilidad.
- El contenido del iframe debe ser responsive y manejar su propio overflow.
- Para artefactos que reportan resultados, implementa `postMessage` según el protocolo Sapiens.

## Densidad automática
- `embed-tight`: Sin padding (igual que sin modificador).
- `embed-loose`: Con padding generoso alrededor del iframe.

## Ejemplo completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Slide con artefacto</title>
  <link rel="stylesheet" href="...sapiens-core.css">
  <link rel="stylesheet" href="...sapiens-themes.css">
  <link rel="stylesheet" href="...sapiens-decor.css">
  <link rel="stylesheet" href="...sapiens-layouts.css">
  <link rel="stylesheet" href="...sapiens-components.css">
</head>
<body class="theme-tech-innovative">
  <div id="sapiens-slide" class="slide-shell surface-1 border-soft">
    <div class="decorative grid-lines"></div>
    
    <header>
      <h1>Simulación Interactiva</h1>
      <span class="header-badge">Actividad</span>
    </header>

    <article class="slide-body layout-embed">
      <div class="embed-container">
        <iframe 
          sandbox="allow-scripts allow-same-origin"
          srcdoc="<!DOCTYPE html><html><body>...juego...</body></html>"
          title="Juego de física">
        </iframe>
      </div>
    </article>

    <footer>
      <span>Física - Unidad 3</span>
      <span>5/15</span>
    </footer>
  </div>
  <script src="...sapiens.js"></script>
</body>
</html>
```

