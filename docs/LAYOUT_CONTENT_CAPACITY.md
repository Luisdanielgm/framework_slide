# Guía de Capacidad de Contenido por Layout

Esta guía documenta cuánto contenido textual puede manejar cada layout del Sapiens Framework, basándose en pruebas reales y el sistema de adaptación automática.

---

## Resumen Ejecutivo

El Sapiens Framework utiliza un **sistema de adaptación automática** en 3 niveles:
1. **CSS Container Queries**: Ajustan el layout según el espacio disponible
2. **JavaScript Inteligente** (`sapiens.js`): Detecta overflow y reduce fuentes/padding automáticamente
3. **Responsive Text Scaling**: Reglas específicas para contenido text-heavy

**No hay límites estrictos** de palabras o caracteres, pero cada layout tiene una **capacidad óptima** antes de que el sistema empiece a comprimir agresivamente.

---

## Layouts Base (sapiens-layouts.css)

### 1. Hero / Intro
**Capacidad Óptima**: 80-150 palabras  
**Máxima (con adaptación)**: 200-250 palabras

**Estructura típica**:
- Título: 5-15 palabras
- Lead paragraph: 30-50 palabras
- Contenido adicional: 2-3 párrafos cortos o lista de 4-6 items
- Elemento visual opcional (icono, gráfico pequeño)

**Cuándo usar para text-heavy**:
- ✅ Slides introductorias con contexto importante
- ✅ Slides de conclusión con puntos clave resumidos
- ✅ Infografías centrales con texto explicativo
- ❌ Análisis detallados (usar Split)
- ❌ Comparaciones extensas (usar Comparison)

**Ejemplo**: [hero-text-heavy-infographic.html](file:///c:/Users/Orion/OneDrive/Desktop/sistemas/all_projects/framework_slide/examples/hero/hero-text-heavy-infographic.html)

---

### 2. Split
**Capacidad Óptima**: 200-300 palabras  
**Máxima (con adaptación)**: 400-500 palabras

**Estructura típica** (distribución 50/50 o 45/55):
- **Columna 1 (visual)**: Gráfico, diagrama o imagen
- **Columna 2 (texto)**:
  - Título/subtítulo: 10-20 palabras
  - Párrafo introductorio: 40-60 palabras
  - Sección de hallazgos: 3-5 bullets con 15-25 palabras cada uno
  - Párrafo de contexto adicional: 30-50 palabras (opcional)

**Cuándo usar para text-heavy**:
- ✅ **IDEAL para contenido denso** - Es el más versátil
- ✅ Análisis con gráficos de soporte
- ✅ Resultados de investigación
- ✅ Explicaciones técnicas con diagramas
- ✅ Slides académicas/científicas

**Sistema de adaptación**:
- `height < 700px`: Reduce texto 15%
- `height < 600px`: Reduce texto 25%, compacta spacing
- `height < 500px`: Modo ultra-compacto (texto ~70% del tamaño original)

**Ejemplos**:
- [split-text-heavy-research.html](file:///c:/Users/Orion/OneDrive/Desktop/sistemas/all_projects/framework_slide/examples/split/split-text-heavy-research.html) (~250 palabras)
- [split-text-heavy-analysis.html](file:///c:/Users/Orion/OneDrive/Desktop/sistemas/all_projects/framework_slide/examples/split/split-text-heavy-analysis.html) (~220 palabras)
- [split-text-heavy-findings.html](file:///c:/Users/Orion/OneDrive/Desktop/sistemas/all_projects/framework_slide/examples/split/split-text-heavy-findings.html) (~200 palabras)

---

### 3. Code
**Capacidad Óptima**: 150-250 palabras  
**Máxima (con adaptación)**: 300-400 palabras

**Estructura típica** (distribución 45/55):
- **Columna 1 (código/diagrama)**: Bloque de código o diagrama técnico
- **Columna 2 (explicación)**:
  - Título: 5-10 palabras
  - Explicación: 2-3 párrafos de 30-50 palabras cada uno
  - Lista de características: 3-4 bullets

**Cuándo usar para text-heavy**:
- ✅ Documentación técnica
- ✅ Tutoriales paso a paso
- ✅ Diagramas técnicos con explicación extensa
- ❌ Contenido sin componente código/diagrama (usar Split)

**Sistema de adaptación**: Igual que Split (comparte las mismas reglas CSS)

**Ejemplo**: [code-text-heavy.html](file:///c:/Users/Orion/OneDrive/Desktop/sistemas/all_projects/framework_slide/examples/code/code-text-heavy.html) (~180 palabras)

---

### 4. Bento
**Capacidad Óptima**: 120-180 palabras (total en 4 celdas)  
**Máxima (con adaptación)**: 200-250 palabras

**Estructura típica** (Grid 2x2):
- 4 celdas con ~30-60 palabras cada una
- Cada celda: Título (3-5 palabras) + Contenido (20-50 palabras)

**Cuándo usar para text-heavy**:
- ✅ Comparación de 4 conceptos o categorías
- ✅ Resumen de múltiples aspectos
- ❌ Análisis profundo de un solo tema (usar Split)
- ❌ Listas largas (crear múltiples slides)

**Nota**: Este layout distribuye el texto, por lo que cada celda debe tener contenido balanceado.

---

## Layouts Creativos Text-Heavy (sapiens-components.css + sapiens-layouts.css)

### 5. Text Analysis
**Capacidad Óptima**: 250-350 palabras  
**Máxima (con adaptación)**: 400-500 palabras

**Estructura típica** (distribución 2fr/1fr):
- **Área principal**: 150-250 palabras
  - Título con degradado
  - Lead paragraph: 40-60 palabras
  - Párrafos adicionales: 2-3 con 30-50 palabras cada uno
  - Card de nota: 20-30 palabras
- **Sidebar**: 80-120 palabras
  - Key Findings box: 3-5 bullets de 10-20 palabras
  - Gráfico/visualización con caption

**Cuándo usar para text-heavy**:
- ✅ **Óptimo para análisis académicos/científicos**
- ✅ Estudios con hallazgos destacados
- ✅ Reportes con conclusiones en sidebar
- ✅ Contenido que requiere separation visual clara

**Sistema de adaptación**: Se convierte a 1 columna en `width < 900px`

**Ejemplo**: [layout-text-analysis.html](file:///c:/Users/Orion/OneDrive/Desktop/sistemas/all_projects/framework_slide/examples/text-heavy/layout-text-analysis.html) (~200 palabras)

---

### 6. Timeline Curved
**Capacidad Óptima**: 150-200 palabras (5 nodos)  
**Máxima (con adaptación)**: 250-300 palabras

**Estructura típica**:
- 5 nodos en curva con ~30-50 palabras cada uno
- Cada nodo: Título corto (2-4 palabras) + Descripción (25-45 palabras)

**Cuándo usar para text-heavy**:
- ✅ Procesos temporales con contexto detallado
- ✅ Evolución histórica con explicaciones
- ❌ Más de 5 pasos (crear múltiples slides o usar Timeline estándar)

**Sistema de adaptación**: Cambia a layout vertical en `width < 900px`

**Ejemplo**: [layout-timeline-curved.html](file:///c:/Users/Orion/OneDrive/Desktop/sistemas/all_projects/framework_slide/examples/text-heavy/layout-timeline-curved.html)

---

### 7. Process Detailed
**Capacidad Óptima**: 200-300 palabras (3-4 pasos)  
**Máxima (con adaptación)**: 350-450 palabras

**Estructura típica** (Grid auto-fit):
- 3-4 pasos con ~60-100 palabras cada uno
- Cada paso:
  - Número grande decorativo
  - Imagen/placeholder (16:9)
  - Título: 3-6 palabras
  - Descripción: 50-90 palabras

**Cuándo usar para text-heavy**:
- ✅ Procesos complejos con detalles por paso
- ✅ Metodologías con explicación visual + textual
- ✅ Instrucciones detalladas con imágenes

**Sistema de adaptación**: Se convierte a 1 columna en `width < 900px`

**Ejemplo**: [layout-process-detailed.html](file:///c:/Users/Orion/OneDrive/Desktop/sistemas/all_projects/framework_slide/examples/text-heavy/layout-process-detailed.html)

---

### 8. Timeline (estándar horizontal)
**Capacidad Óptima**: 100-150 palabras  
**Máxima (con adaptación)**: 200-250 palabras

**Cuándo usar para text-heavy**:
- ✅ 4-6 eventos con descripciones breves (20-30 palabras cada uno)
- ❌ Descripciones extensas por evento (usar Timeline Curved o Process Detailed)

---

### 9. Comparison
**Capacidad Óptima**: 180-250 palabras  
**Máxima (con adaptación)**: 300-350 palabras

**Estructura típica**:
- 2 paneles + divisor central
- Cada panel: ~90-140 palabras

**Cuándo usar para text-heavy**:
- ✅ Comparaciones detalladas en vs out
- ✅ Análisis de pros/contras extenso
- ✅ Evolución antes/después con contexto

---

## Tabla Comparativa Rápida

| Layout | Palabras Óptimas | Palabras Máximas | Mejor para Text-Heavy |
|--------|------------------|------------------|----------------------|
| **Hero/Intro** | 80-150 | 200-250 | ⭐⭐ |
| **Split** | 200-300 | 400-500 | ⭐⭐⭐⭐⭐ |
| **Code** | 150-250 | 300-400 | ⭐⭐⭐⭐ |
| **Bento** | 120-180 | 200-250 | ⭐⭐ |
| **Text Analysis** | 250-350 | 400-500 | ⭐⭐⭐⭐⭐ |
| **Timeline Curved** | 150-200 | 250-300 | ⭐⭐⭐ |
| **Process Detailed** | 200-300 | 350-450 | ⭐⭐⭐⭐ |
| **Comparison** | 180-250 | 300-350 | ⭐⭐⭐⭐ |

---

## Recomendaciones Generales

### ✅ Mejores Prácticas

1. **Prioriza Split y Text Analysis** para contenido text-heavy
2. **Usa listas con bullets** en lugar de párrafos largos cuando sea posible
3. **Divide contenido extenso** en múltiples slides si supera la capacidad máxima
4. **Aprovecha los sidebars** (Text Analysis) para información secundaria
5. **Usa énfasis visual** (`<strong>`, `.accent-1`) para destacar puntos clave
6. **Incluye "respiro visual"** con gráficos, iconos o espaciado
7. **Alterna superficies**: si quieres una columna sin fondo pero alineada, usa `content-box is-ghost`/`surface-transparent` en ese bloque y deja el otro con `surface-2`/`surface-3` + `border-soft` para contraste controlado.

### ❌ Evitar

1. **No excedas 500 palabras** en una sola slide (incluso con adaptación)
2. **No uses Hero/Intro** para análisis complejos
3. **No confíes solo en texto** - incluye elementos visuales
4. **No ignores las advertencias** de `sapiens.js` sobre overflow

### 🔧 Sistema de Adaptación Automática

Cuando el contenido es denso, el sistema aplica (en orden):

1. **Container Queries** (altura):
   - `< 700px`: Reducción suave (15%)
   - `< 600px`: Reducción moderada (25%)
   - `< 500px`: Reducción agresiva (30%)

2. **JavaScript** (`sapiens.js`):
   - Detecta overflow
   - Aplica `.is-overflowing`
   - Reduce padding, gaps y fuentes adicionales
   - Si persiste, aplica `.force-columns` al bloque más alto

3. **Fallback Manual**:
   - Si el sistema no puede ajustar, divide el contenido en 2 slides
   - Usa `.force-columns` manualmente

---

## Testing de Capacidad

Para verificar si tu contenido cabe en un layout:

1. Abre el ejemplo correspondiente
2. Reemplaza el texto con tu contenido
3. Verifica en diferentes resoluciones (desktop, tablet, móvil)
4. Observa si `sapiens.js` aplica `.is-overflowing`
5. Si hay scroll vertical en desktop → **reduce contenido o cambia layout**

---

## Ejemplos por Cantidad de Texto

**Texto Ligero (< 150 palabras)**:
- Hero, Intro, Bento, Timeline

**Texto Moderado (150-300 palabras)**:
- Split, Code, Process Detailed, Comparison

**Texto Pesado (300-500 palabras)**:
- Split (con reducción automática)
- Text Analysis (ideal para este caso)

**Texto Muy Pesado (> 500 palabras)**:
- ⚠️ **Divide en múltiples slides**
- O usa layout académico personalizado con `.force-columns`

---

## Actualización

Última actualización: 2025-11-27  
Basado en: Sapiens Framework v0.6 + ejemplos text-heavy
