# 🏗️ Arquitectura CSS Modular - Sapiens Framework

## 📋 Visión General

El framework Sapiens se ha dividido en **tres archivos CSS principales** para mejorar la mantenibilidad y escalabilidad:

```
sapiens-core.css        → Base estructural (NO modificar frecuentemente)
sapiens-themes.css      → Temas rápidos basados en tokens (Opcional)
sapiens-components.css  → Componentes UI (Evolutivo)
```

---

## 📦 Estructura de Archivos

### **sapiens-core.css** (~400 líneas)
**Propósito:** Base estructural y sistema responsivo que NO debe cambiar en actualizaciones menores.

**Contenido:**
- ✅ Variables CSS (`:root`)
- ✅ Reset global
- ✅ Configuración de `body` y contenedor principal
- ✅ Sistema de layouts (hero, split, code, bento, etc.)
- ✅ Estructura de header/footer
- ✅ Media queries responsivos
- ✅ Decoraciones de fondo (orbs, grid-lines)
- ✅ Tipografía base

**Cuándo modificar:**
- ⚠️ Solo en versiones MAYORES (v0.5 → v1.0)
- ⚠️ Cambios estructurales fundamentales
- ⚠️ Revisión del sistema de grids

---

### **sapiens-themes.css** (temas predefinidos)
**Propósito:** Paquete independiente con clases de tema (`theme-ocean`, `theme-sunset`, `theme-forest`) que reescriben el contrato completo de tokens sin tocar componentes.

**Contenido:**
- ✅ Temas rápidos basados en tokens (solo custom properties)

**Cuándo modificar:**
- ✅ Añadir nuevos temas curados o ajustar paletas
- ✅ Mantener paridad con el contrato de tokens de `sapiens-core.css`

---

### **sapiens-components.css** (~900 líneas)
**Propósito:** Componentes UI que pueden evolucionar y expandirse según necesidades.

**Contenido:**
- ✅ Cards, badges, iconos
- ✅ Code blocks
- ✅ Layouts creativos (timeline, circular, stats)
- ✅ Sistema de iconos completo
- ✅ Decoraciones creativas
- ✅ Animaciones
- ✅ Componentes adicionales

**Posible división futura (opcional):**
- `sapiens-tokens.css` → Paletas, temas y utilidades base (como `surface-*`, `pill`, `text-accent`).
- `sapiens-utilities.css` → Clases atómicas de spacing, tipografía y alineación.
- `sapiens-layouts.css` → Patrones de layout prearmados.

> Hoy se mantiene en un solo archivo para facilidad de adopción, pero la separación anterior es compatible si el proyecto crece.

**Cuándo modificar:**
- ✅ Agregar nuevos componentes
- ✅ Mejorar estilos de componentes existentes
- ✅ Nuevos layouts creativos
- ✅ Optimizaciones visuales
- ✅ Versiones MENORES y PATCHES (v0.5.1, v0.6)

---

## 🚀 Uso en Proyectos

### Opción 1: Ambos archivos locales
```html
<head>
    <!-- Framework CSS Modular -->
    <link rel="stylesheet" href="sapiens-core.css">
    <link rel="stylesheet" href="sapiens-themes.css"> <!-- Opcional: temas rápidos -->
    <link rel="stylesheet" href="sapiens-components.css">
</head>
```

### Opción 2: Vía CDN (GitHub)
```html
<head>
    <!-- Core (versión estable) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@main/sapiens-core.css">
    <!-- Temas rápidos (opcional) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@main/sapiens-themes.css">
    
    <!-- Components (versión actualizable) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@main/sapiens-components.css">
</head>
```

### Opción 3: Core estable + Components locales
```html
<head>
    <!-- Core desde CDN (garantiza estabilidad) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@v0.5/sapiens-core.css">
    
    <!-- Components personalizados localmente -->
    <link rel="stylesheet" href="sapiens-components.css">
</head>
```

---

## 🎨 Personalización de Temas

Las variables CSS se definen en `sapiens-core.css` pero puedes sobrescribirlas:

```html
<style>
    :root {
        /* Sobrescribir tema por slide */
        --bg-1: #1a0b2e;
        --bg-2: #2e1065;
        --accent-1: #7c3aed;
        --accent-2: #a855f7;
        --font-head: 'Montserrat', sans-serif;
        --font-body: 'Inter', sans-serif;
    }
</style>
```

---

## 🔄 Estrategia de Versionado

### **sapiens-core.css**
```
v0.5.0 → Versión estable actual
v0.5.1 → Solo bugfixes críticos
v1.0.0 → Cambios estructurales mayores
```

### **sapiens-components.css**
```
v0.5.0 → Versión inicial
v0.6.0 → Nuevos componentes (ej: layout-masonry)
v0.6.1 → Mejoras visuales
v0.7.0 → Sistema de temas expandido
```

---

## 📊 Comparación: Antes vs Después

| Aspecto | sapiens.css (monolítico) | Modular (core + components) |
|---------|--------------------------|------------------------------|
| **Tamaño** | ~1300 líneas | ~400 + ~900 líneas |
| **Mantenibilidad** | ⚠️ Difícil separar cambios | ✅ Clara separación de responsabilidades |
| **Actualizaciones** | ⚠️ Todo o nada | ✅ Actualizaciones selectivas |
| **Riesgo de breaking changes** | ⚠️ Alto | ✅ Bajo (core estable) |
| **Personalización** | ⚠️ Requiere fork completo | ✅ Solo extender components |

---

## 🛠️ Guía de Contribución

### Para agregar un nuevo componente:
1. ✅ Editar `sapiens-components.css`
2. ✅ Agregar ejemplo en `examples/`
3. ✅ Actualizar README.md
4. ✅ NO tocar `sapiens-core.css`

### Para cambios estructurales:
1. ⚠️ Discutir en issue de GitHub
2. ⚠️ Requiere versión MAYOR
3. ⚠️ Actualizar ambos archivos

---

## 📁 Estructura del Proyecto

```
framework_slide/
├── sapiens-core.css          # BASE (estable)
├── sapiens-components.css    # COMPONENTES (evolutivo)
├── sapiens.js
├── index.html                # Punto de entrada (Galería)
├── docs/
│   └── ARCHITECTURE.md       # Este archivo
├── legacy/
│   └── sapiens.css           # LEGACY (monolítico, deprecated)
├── prompts/                  # Prompts IA (privado)
├── examples/
│   ├── modular-demo.html
│   ├── hero.html
│   └── ...
└── README.md
```

---

## 🔍 Migración desde sapiens.css (Legacy)

### Paso 1: Reemplazar imports
```html
<!-- ANTES -->
<link rel="stylesheet" href="sapiens.css">

<!-- DESPUÉS -->
<link rel="stylesheet" href="sapiens-core.css">
<link rel="stylesheet" href="sapiens-components.css">
```

### Paso 2: Verificar compatibilidad
- ✅ No hay cambios en clases CSS
- ✅ No hay cambios en la estructura HTML
- ✅ Las variables CSS son las mismas

### Paso 3: (Opcional) Personalizar componentes
- Ahora puedes editar `sapiens-components.css` sin afectar la base

---

## 💡 Casos de Uso

### Proyecto educativo (estabilidad prioritaria)
```html
<!-- Usar versiones fijas vía CDN -->
<link rel="stylesheet" href="https://cdn.../sapiens-core.css@v0.5.0">
<link rel="stylesheet" href="https://cdn.../sapiens-components.css@v0.5.0">
```

### Proyecto en desarrollo (features nuevas)
```html
<!-- Core estable + Components locales personalizados -->
<link rel="stylesheet" href="sapiens-core.css">
<link rel="stylesheet" href="my-custom-components.css">
```

### Producción (máximo performance)
```html
<!-- Minificados y combinados -->
<link rel="stylesheet" href="sapiens.min.css">
```

---

## 📚 Recursos Adicionales

- [README.md](../README.md) - Guía de uso general
- [examples/](../examples/) - Ejemplos de cada layout
- [index.html](../index.html) - Galería visual interactiva

---

**Mantenido por:** Luisdanielgm  
**Versión:** 0.5  
**Última actualización:** 2025-11-22
