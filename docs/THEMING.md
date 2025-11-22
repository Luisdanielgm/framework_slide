# 🎨 Sistema de temas y tokens

El objetivo es que cada diapositiva se personalice sin tocar reglas de CSS, solo reasignando **tokens**. Así se mantiene la abstracción y el HTML se limita a clases reutilizables.

## Tokens base disponibles (contrato mínimo)

Todos los tokens están declarados por defecto en `:root` dentro de `sapiens-core.css`. `sapiens-components.css` los consume sin redefinirlos y los temas viven ahora en `sapiens-themes.css`, así que cualquier IA puede sobrescribirlos dentro de un `<style>` o confiar en un tema ya definido. Los nombres son el contrato estable y deben respetarse.

- `--bg-1` y `--bg-2`: degradado de fondo principal.
- `--accent-1` y `--accent-2`: colores primarios/gradientes.
- `--text-main` y `--text-muted`: texto base y secundario.
- `--surface-0` … `--surface-3`: niveles de superficie con blur incremental.
- `--border-soft` y `--border-strong`: bordes suaves y marcados.
- `--accent-strong` y `--accent-soft`: gradientes listos para chips, badges y fondos suaves.
- `--badge-bg`, `--pill-bg`, `--pill-shadow`: tokens para pills/badges.
- `--font-body` y `--font-head`: tipografías para texto y títulos.

Puedes sobrescribirlos en el `body`, en `#sapiens-slide` o en cualquier contenedor. Los valores definidos más cerca del componente
ganan precedencia por cascada.

```html
<body class="theme-ocean">
    <div id="sapiens-slide" class="surface-1 border-soft">
        ...
    </div>
</body>
```

## Temas rápidos (paquetes de tokens ya definidos)

Listos para usar sin escribir CSS extra. Carga `sapiens-themes.css` y aplica la clase en `body`, `#sapiens-slide` o cualquier wrapper.

- `.theme-ocean`: azules/cyan luminosos.
- `.theme-sunset`: naranjas y rosas cálidos.
- `.theme-forest`: verdes frescos con contraste suave.

Actualmente hay **3 temas predefinidos**. Cada uno define **todo el contrato de tokens** (fondos, acentos, texto, superficies, bordes, pills, sombras y gradientes). Puedes extenderlos o crear otros manteniendo los mismos nombres de token.

Equivalente con atributo: `data-theme="ocean|sunset|forest"`. Si además declaras un `<style>` con tokens manuales, esos valores ganan por cascada sobre la clase de tema.

## Utilidades de color y superficie

| Clase | Uso |
|-------|-----|
| `.surface-0` a `.surface-3` | Fondos glassmorphism con blur progresivo. |
| `.border-soft` / `.border-strong` | Bordes con opacidad predeterminada. |
| `.text-strong` / `.text-subtle` | Texto principal o secundario basado en tokens. |
| `.text-accent` | Texto con gradiente `accent-1 → accent-2`. |
| `.pill` / `.pill-sm` | Chips/pastillas con borde y sombra. |
| `.card-accent` | Variante de tarjeta con sombra/glow y borde fuerte. |
| `.bg-accent-soft` | Fondo degradado suave listo para bloques decorativos. |
| `.badge-glow` | Badges con glow controlado. |

> Tip: combínalas con las utilidades existentes (spacing, alineación, sombras) para armar slides sin CSS adicional.

## Cómo consume tokens una IA

1. **Opción A: aplicar un tema existente**

```html
<body class="theme-ocean">
    <div id="sapiens-slide" class="surface-1 border-soft">
        ...
    </div>
</body>
```

2. **Opción B: definir tokens manualmente** (sobrescriben cualquier tema aplicado porque están más abajo en la cascada)

```html
<head>
  <style>
    :root {
      --bg-1: #0b0f19;
      --bg-2: #16213d;
      --accent-1: #7c3aed;
      --accent-2: #06b6d4;
      --text-main: #f8fafc;
      --text-muted: #9ca3af;
      --border-soft: rgba(255,255,255,0.08);
      --border-strong: rgba(255,255,255,0.16);
      --font-body: 'Inter', sans-serif;
      --font-head: 'Poppins', sans-serif;
    }
  </style>
</head>
<body>
    ...
</body>
```

Puedes combinar ambas: aplicar `class="theme-ocean"` y luego redefinir solo los tokens que quieras ajustar en un `<style>`. Los
tokens definidos manualmente ganan.

## Estado actual y ejemplos que puedes reutilizar

- **Temas disponibles hoy:** `theme-ocean`, `theme-sunset`, `theme-forest`. Todas las utilidades (`surface-*`, pills, badges, bordes) ya leen sus tokens.
- **Ejemplos con clase de tema:** `bento.html`, `circular-diagram.html`, `creative-intro.html`, `hero.html`, `modular-demo.html`, `split.html`, `timeline.html` (aplican la clase en `<body>` y no necesitan CSS adicional).
- **Ejemplos con tokens inyectados:** `code.html` (solo tokens) y `stats.html` (tokens + se puede eliminar el `<style>` y dejar un tema). Ambos definen el contrato completo de tokens para mantenerse alineados con los temas.

> Tip: para probar el contrato de tokens, elimina la clase de tema en un ejemplo, mantén el bloque `<style>` y verás que conserva colores y contraste. Si quitas el `<style>`, basta con poner `class="theme-ocean"` (u otro tema) en `<body>`.

## Extender o crear tu propio tema

Sobrescribe solo los tokens que necesites y mantén los nombres del contrato.

```css
/* Añádelo en un <style> o en tu propio CSS */
.theme-midnight {
    --bg-1: #0a0a14;
    --bg-2: #121225;
    --accent-1: #7c3aed;
    --accent-2: #22d3ee;
    --text-main: #f8f9ff;
    --text-muted: #a7b0d9;
    --font-body: 'Inter', sans-serif;
    --font-head: 'Poppins', sans-serif;
}
```

Usa las utilidades existentes (`surface-*`, `pill`, `badge-glow`, etc.) y se adaptarán automáticamente al nuevo esquema.
