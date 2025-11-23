# Arquitectura CSS Modular - Sapiens Framework (v0.5)

El framework se divide en tres archivos principales para aislar la base estable de los componentes que evolucionan:

```
sapiens-core.css        → Base estructural (estable)
sapiens-themes.css      → Temas rápidos basados en tokens (opcional)
sapiens-components.css  → Componentes UI (evolutivo)
```

---

## Estructura de archivos

### sapiens-core.css (~400 líneas)
Propósito: base estructural y sistema responsivo; no cambia en versiones menores.

Incluye:
- Variables CSS (`:root`) y tokens base
- Reset global y configuración de `body`
- Contenedor principal (`#sapiens-slide` / `.slide-shell`)
- Layouts base (hero, split, code, bento, intro)
- Header/footer (el título usa degradado derivado de `--text-main` y `--text-muted`)
- Media queries y lógica responsive
- Decoraciones de fondo (orbs, grid-lines)
- Tipografía base

Cuándo tocarlo:
- Solo en versiones mayores
- Cambios estructurales del layout
- Ajustes al sistema responsive

### sapiens-themes.css (temas predefinidos)
Propósito: paquetes de tokens listos para usar sin tocar componentes.

Incluye clases de tema que reescriben todo el contrato de tokens (también disponibles como `data-theme="..."`), entre ellas:
- Base: `theme-ocean`, `theme-sunset`, `theme-forest`.
- Nature: `theme-nature-spring`, `theme-nature-desert`, `theme-nature-earth`, `theme-nature-ice`, `theme-nature-exotic`, `theme-nature-horizon`, `theme-nature-organic`, `theme-nature-arctic`.
- Pastel: `theme-pastel-playful`, `theme-pastel-dream`, `theme-pastel-spa`, `theme-pastel-sunset`, `theme-pastel-mediterranean`, `theme-pastel-cool`.
- Neon: `theme-neon-cyber`, `theme-neon-intense`, `theme-neon-cmyk`, `theme-neon-youth`, `theme-neon-candy`, `theme-neon-sunset`, `theme-neon-complementary`, `theme-neon-lime-purple`, `theme-neon-berry`, `theme-neon-chocolate`, `theme-neon-volcanic`, `theme-neon-cyan-red`.
- Retro: `theme-retro-warm`, `theme-retro-earthy`, `theme-retro-classic`, `theme-retro-pop`, `theme-retro-leather`, `theme-retro-luxury`.
- Neutral: `theme-neutral-slate`, `theme-neutral-cobalt`, `theme-neutral-modern`, `theme-neutral-luxe`, `theme-neutral-cool`, `theme-neutral-nautical`, `theme-neutral-warm`.
- Elegant: `theme-elegant-navy-gold`, `theme-elegant-corporate`, `theme-elegant-warm-grey`, `theme-elegant-classic-accent`, `theme-elegant-cream-wine`, `theme-elegant-festive`.
- Tech/Dark: `theme-tech-future-neon`, `theme-tech-innovative`, `theme-tech-dynamic`, `theme-dark-carbon`, `theme-dark-anthracite`, `theme-dark-gamer`.
- Fintech/Special: `theme-fintech-trust`, `theme-fintech-gradient`, `theme-fintech-growth`, `theme-nebula-code`, `theme-cyan-stats`.

Cuándo tocarlo:
- Añadir/ajustar temas curados
- Mantener paridad de tokens con `sapiens-core.css`

### sapiens-components.css (~900 líneas)
Propósito: componentes y layouts creativos; puede evolucionar.

Incluye:
- Cards, badges, iconos, pills
- Code blocks (fondos y texto ahora ligados a tokens del tema)
- Layouts creativos (timeline, circular, stats, intro)
- Sistema de iconos y utilidades de texto/spacing
- Decoraciones creativas, animaciones
- Utilidades de fondo/remate (`bg-blueprint`, `torn-edge`)
- Ajustes inteligentes para hero/intro en alturas pequeñas

Cuándo tocarlo:
- Agregar/mejorar componentes o layouts
- Ajustes visuales menores
- Versiones menores/patch

---

## Uso en proyectos

### Local (core + themes + components)
```html
<link rel="stylesheet" href="sapiens-core.css">
<link rel="stylesheet" href="sapiens-themes.css"><!-- opcional, temas -->
<link rel="stylesheet" href="sapiens-components.css">
```

### Core estable por CDN + components locales
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@v0.5/sapiens-core.css">
<link rel="stylesheet" href="sapiens-components.css">
```

---

## Tokens y temas

Contrato de tokens (definido en `sapiens-core.css` y reescrito por cada tema):
`--bg-*`, `--accent-*`, `--text-*`, `--surface-*`, `--border-*`, `--accent-strong`, `--accent-soft`, `--badge-bg`, `--pill-*`, `--glow-*`, `--font-body`, `--font-head`.

Cómo usarlos:
- Aplica una clase/atributo de tema (`class="theme-ocean"` o `data-theme="ocean"`).
- O redefine tokens en un `<style>`; la cascada respeta el valor más cercano.

Componentes sensibles a tokens:
- Header title: degradado con `--text-main`/`--text-muted`.
- Code block y `content-box`: fondos/textos ligados a tokens del tema.
- Superficies/bordes/pills/badges usan los tokens declarados.

---

## Contribución

Para nuevos componentes:
1) Edita `sapiens-components.css`.
2) Agrega ejemplo en `examples/`.
3) Actualiza README.md y docs.
4) No toques `sapiens-core.css` salvo necesidad estructural.

Para cambios de base/layout:
1) Discutir y versionar como cambio mayor.

---

## Estructura del repositorio

```
framework_slide/
├── sapiens-core.css          # Base (estable)
├── sapiens-themes.css        # Temas (tokens)
├── sapiens-components.css    # Componentes (evolutivo)
├── sapiens.js
├── index.html                # Galería
├── examples/                 # Slides de ejemplo
├── docs/                     # Documentación
└── legacy/                   # Versión monolítica (deprecated)
```

---

Mantén los tokens y la arquitectura modular para asegurar compatibilidad y facilidad de actualización.
