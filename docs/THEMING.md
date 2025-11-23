# Sistema de temas y tokens

Personaliza cada slide sin escribir nuevas reglas: los componentes consumen tokens y los temas los redefinen.

## Contrato de tokens (mínimo)

Declarados en `:root` dentro de `sapiens-core.css` y consumidos por `sapiens-components.css`:
- Fondos: `--bg-1`, `--bg-2`
- Acentos: `--accent-1`, `--accent-2`, `--accent-strong`, `--accent-soft`
- Texto: `--text-main`, `--text-muted`
- Superficies: `--surface-0` a `--surface-3`
- Bordes: `--border-soft`, `--border-strong`
- Pills/Badges: `--badge-bg`, `--pill-bg`, `--pill-shadow`
- Sombras: `--glow-1`, `--glow-2`
- Tipos: `--font-body`, `--font-head`

Puedes sobrescribirlos en cualquier scope (`:root`, `body`, `#sapiens-slide`). La cascada usa el valor más cercano al componente.

## Temas rápidos (sapiens-themes.css)

Listos para usar en `body`, `#sapiens-slide` o cualquier wrapper. Equivalente con atributo: `data-theme="..."`. Cada tema redefine TODO el contrato anterior; si además defines un `<style>` con tokens manuales, esos valores ganan por cascada.

- Base: `theme-ocean`, `theme-sunset`, `theme-forest`.
- Nature: `theme-nature-spring`, `theme-nature-desert`, `theme-nature-earth`, `theme-nature-ice`, `theme-nature-exotic`, `theme-nature-horizon`, `theme-nature-organic`, `theme-nature-arctic`.
- Pastel: `theme-pastel-playful`, `theme-pastel-dream`, `theme-pastel-spa`, `theme-pastel-sunset`, `theme-pastel-mediterranean`, `theme-pastel-cool`.
- Neon: `theme-neon-cyber`, `theme-neon-intense`, `theme-neon-cmyk`, `theme-neon-youth`, `theme-neon-candy`, `theme-neon-sunset`, `theme-neon-complementary`, `theme-neon-lime-purple`, `theme-neon-berry`, `theme-neon-chocolate`, `theme-neon-volcanic`, `theme-neon-cyan-red`.
- Retro: `theme-retro-warm`, `theme-retro-earthy`, `theme-retro-classic`, `theme-retro-pop`, `theme-retro-leather`, `theme-retro-luxury`.
- Neutral: `theme-neutral-slate`, `theme-neutral-cobalt`, `theme-neutral-modern`, `theme-neutral-luxe`, `theme-neutral-cool`, `theme-neutral-nautical`, `theme-neutral-warm`.
- Elegant: `theme-elegant-navy-gold`, `theme-elegant-corporate`, `theme-elegant-warm-grey`, `theme-elegant-classic-accent`, `theme-elegant-cream-wine`, `theme-elegant-festive`.
- Tech/Dark: `theme-tech-future-neon`, `theme-tech-innovative`, `theme-tech-dynamic`, `theme-dark-carbon`, `theme-dark-anthracite`, `theme-dark-gamer`.
- Fintech/Special: `theme-fintech-trust`, `theme-fintech-gradient`, `theme-fintech-growth`, `theme-nebula-code`, `theme-cyan-stats`.

## Ejemplos prácticos

Aplicar un tema:
```html
<body class="theme-ocean">
  <div id="sapiens-slide" class="surface-1 border-soft">...</div>
</body>
```

Inyectar tokens manuales (sobrescribe el tema aplicado):
```html
<style>
:root {
  --bg-1: #0b0f19;
  --bg-2: #16213d;
  --accent-1: #7c3aed;
  --accent-2: #06b6d4;
  --text-main: #f8fafc;
  --text-muted: #9ca3af;
  --font-body: 'Inter', sans-serif;
  --font-head: 'Poppins', sans-serif;
}
</style>
```

Componentes sensibles a tokens:
- Header `h1`: degradado con `--text-main`/`--text-muted`.
- `code-block`: fondo y texto derivados de `--bg-1`, `--text-main`, `--text-muted`, `--border-strong`.
- `content-box`: fondo mezclado con `--bg-1` y textos con `--text-*`.
- Superficies, bordes, pills y badges leen sus tokens específicos.

Utilidades de color/superficie:
- `.surface-0` a `.surface-3`, `.border-soft`, `.border-strong`
- `.text-strong`, `.text-subtle`, `.text-accent`
- `.pill`, `.pill-sm`, `.badge-glow`, `.bg-accent-soft`, `.card-accent`
- Decorativos reutilizables: `.bg-blueprint`, `.torn-edge`

## Estado de ejemplos

- Con clase de tema (sin CSS inline): `bento.html`, `circular-diagram.html`, `creative-intro.html`, `hero.html`, `modular-demo.html`, `split.html`, `timeline.html`, `code.html`, `stats.html`.
- Tokens manuales (solo si quieres probar): puedes reemplazar el tema por un `<style>` con el contrato completo.

## Crear tu propio tema

```css
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

Mantén los nombres del contrato; el resto de componentes se adaptará automáticamente.
