# 📖 Guía de Uso - Sapiens Slide Framework

> Framework moderno para crear presentaciones web impactantes, 100% responsive y fácil de usar.

## 🚀 Inicio Rápido

> **Tip:** Para ver todos los layouts en acción, abre el archivo `gallery.html` en tu navegador.

### Estructura Básica

Toda diapositiva sigue esta estructura HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Presentación</title>
    
    <!-- Framework CSS -->
    <link rel="stylesheet" href="sapiens.css">
    
    <!-- Font Awesome para iconos (opcional) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
    <div id="sapiens-slide">
        
        <!-- Decoraciones de fondo (opcional) -->
        <div class="decorative grid-lines"></div>
        <div class="decorative orb orb-1"></div>
        <div class="decorative orb orb-2"></div>

        <!-- Header -->
        <header class="slide-header">
            <h1>Título de la Diapositiva</h1>
            <span class="header-badge">Categoría</span>
        </header>

        <!-- Contenido Principal -->
        <main class="slide-body layout-TIPO">
            <!-- Tu contenido aquí -->
        </main>

        <!-- Footer -->
        <footer class="slide-footer">
            <span>Sección 1</span>
            <span>01 / 10</span>
        </footer>

    </div>

    <!-- Framework JS -->
    <script src="sapiens.js"></script>
</body>
</html>
```

---

## 📐 Layouts Disponibles

El framework incluye **8 layouts** principales (4 clásicos y 4 creativos) para cubrir todas tus necesidades:

### 🏛️ Layouts Base (Clásicos)

| Layout | Uso | Archivo Ejemplo |
|--------|-----|-----------------|
| **Hero** | Título centrado, ideal para portadas | `examples/hero.html` |
| **Split** | Dos columnas (texto + imagen/código) | `examples/split.html` |
| **Code** | Columna pequeña texto + columna ancha código | `examples/code.html` |
| **Bento** | Grid 2x2 para múltiples tarjetas | `examples/bento.html` |

### 🎨 Layouts Creativos (Nuevos)

| Layout | Uso | Archivo Ejemplo |
|--------|-----|-----------------|
| **Timeline** | Línea de tiempo horizontal con conectores | `examples/timeline.html` |
| **Circular** | Diagrama radial con nodo central | `examples/circular-diagram.html` |
| **Stats** | Tarjetas de estadísticas de alto impacto | `examples/stats.html` |
| **Intro** | Portada creativa con decoraciones | `examples/creative-intro.html` |

> **💡 Tip:** Abre el archivo `gallery.html` en tu navegador para ver un menú visual con todos estos ejemplos.

---

## 🎨 Personalización de Colores

### Opción 1: Variables CSS en el HTML

Cada diapositiva puede tener su propia paleta de colores:

```html
<style>
    #sapiens-slide {
        --bg-1: #13132b;       /* Fondo oscuro */
        --bg-2: #22223d;       /* Fondo medio */
        --accent-1: #ff4d8c;   /* Color primario */
        --accent-2: #5e72e4;   /* Color secundario */
    }
</style>
```

### Opción 2: Modificar sapiens.css

Edita las variables en la línea 4-11 de `sapiens.css`:

```css
:root {
    --bg-1: #0f172a;
    --bg-2: #1e293b;
    --accent-1: #3b82f6;
    --accent-2: #06b6d4;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
}
```

### Paletas Predefinidas

```css
/* Paleta Magenta */
--accent-1: #ff1493;
--accent-2: #ff69b4;

/* Paleta Púrpura */
--accent-1: #8b00ff;
--accent-2: #b548ff;

/* Paleta Cyan */
--accent-1: #00bfff;
--accent-2: #5fd4ff;

/* Paleta Naranja */
--accent-1: #ff6b35;
--accent-2: #ff9466;
```

---

## 🧩 Componentes UI

### Tarjetas (Cards)

```html
<div class="card">
    <h2>Título de la Tarjeta</h2>
    <ul class="feature-list">
        <li>Punto 1 con bala brillante</li>
        <li>Punto 2 con bala brillante</li>
        <li>Punto 3 con bala brillante</li>
    </ul>
</div>
```

### Bloques de Código

```html
<div class="code-block">
    <div class="code-nav">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <pre><code>// Tu código aquí
const mensaje = "Hola Mundo";
console.log(mensaje);</code></pre>
</div>
```

### Iconos Circulares

```html
<!-- Icono default (azul) -->
<div class="icon-circle icon-md">
    <i class="fas fa-rocket"></i>
</div>

<!-- Icono magenta grande -->
<div class="icon-circle icon-magenta icon-lg">
    <i class="fas fa-heart"></i>
</div>
```

**Tamaños disponibles**: `.icon-sm` (50px), `.icon-md` (80px), `.icon-lg` (120px), `.icon-xl` (160px)

**Colores disponibles**: `.icon-magenta`, `.icon-yellow`, `.icon-purple`, `.icon-cyan`, `.icon-orange`

### Badges

```html
<span class="badge">Default</span>
<span class="badge badge-primary">Primario</span>
<span class="badge badge-gradient">Gradiente</span>
```

---

## 📱 Responsive

El framework es **100% responsive** automáticamente:

| Breakpoint | Comportamiento |
|------------|----------------|
| **Desktop** (>1200px) | Ratio 16:9, todos los layouts en columnas |
| **Tablet** (768-1024px) | Split/Code → 1 columna, altura flexible |
| **Móvil** (<768px) | Todo en 1 columna, padding reducido |

### Comportamiento Específico por Layout

- **Timeline**: Horizontal en desktop → Vertical en móvil
- **Circular Diagram**: Nodos reposicionados y más pequeños en móvil
- **Stats**: 4 columnas → 2 columnas → 1 columna
- **Bento**: Grid 2x2 → Lista vertical

---

## 🎭 Decoraciones

### Orbs de Fondo (Luces difusas)

```html
<div class="decorative orb orb-1"></div>  <!-- Esquina superior derecha -->
<div class="decorative orb orb-2"></div>  <!-- Esquina inferior izquierda -->
```

### Grid Lines (Cuadrícula)

```html
<div class="decorative grid-lines"></div>
```

### Fondos Especiales

```html
<!-- Fondo blueprint (azul técnico con cuadrícula) -->
<div id="sapiens-slide" style="background-color: #5a7ba8; background-image: linear-gradient(rgba(255,255,255,0.08) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.08) 2px, transparent 2px); background-size: 40px 40px;">

<!-- Fondo con puntos -->
<div style="background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 20px 20px;">
```

### Marca de Agua

```html
<div class="watermark">CONFIDENCIAL</div>
```

---

## 🔧 Ejemplos Completos

Todos los ejemplos están en la carpeta `examples/`:

### Layouts Originales
- `hero.html` - Portada centrada
- `split.html` - Dos columnas
- `code.html` - Presentación de código
- `bento.html` - Grid de tarjetas

### Layouts Creativos
- `timeline.html` - Timeline horizontal
- `circular-diagram.html` - Diagrama radial
- `stats.html` - Tarjetas de estadísticas
- `creative-intro.html` - Intro con decoraciones

---

## ⚡ Tips y Trucos

### 1. Centrar Contenido Verticalmente

Usa flexbox en el slide-body:

```css
.slide-body {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### 2. Animaciones Personalizadas

Agrega clases `.animate-in` anivel de elemento:

```html
<div class="card animate-in" style="animation-delay: 0.2s;">
    <!-- contenido -->
</div>
```

### 3. Ocultar Footer

```html
<footer class="slide-footer" style="display: none;"></footer>
```

### 4. Cambiar Fuente

```html
<style>
    #sapiens-slide {
        --font-head: 'Roboto', sans-serif;
        --font-body: 'Open Sans', sans-serif;
    }
</style>
```

---

## 📦 Estructura de Archivos

```
framework_slide/
├── sapiens.css         # Framework CSS consolidado (v4.0)
├── sapiens.js          # Animaciones básicas
├── gallery.html        # Galería/Menú principal
├── examples/           # Carpeta con los 8 ejemplos
│   ├── hero.html
│   ├── split.html
│   ├── code.html
│   ├── bento.html
│   ├── timeline.html
│   ├── circular-diagram.html
│   ├── stats.html
│   └── creative-intro.html
└── README.md           # Esta guía
```

---

## 🆘 Solución de Problemas

### Los iconos no aparecen
- Verifica que Font Awesome esté cargado en el `<head>`
- Usa clases correctas: `fas fa-nombre-icono`

### El slide no es responsive
- Asegúrate de incluir: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### Los colores no cambian
- Verifica que las variables CSS estén dentro de `#sapiens-slide { }`
- Asegúrate de usar `--accent-1` y `--accent-2` correctamente

---

## 📚 Recursos

- [Font Awesome Icons](https://fontawesome.com/icons) - Librería de iconos
- [Google Fonts](https://fonts.google.com/) - Fuentes personalizadas
- [Coolors](https://coolors.co/) - Generador de paletas de colores

---

## 📄 Licencia

Framework Sapiens - Libre para uso personal y comercial.

---

**¿Necesitas ayuda?** Revisa los ejemplos en `examples/` o consulta la documentación completa.
