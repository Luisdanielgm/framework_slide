# Legacy / Versiones Antiguas

Esta carpeta contiene versiones antiguas del framework Sapiens que **NO se recomiendan** para nuevos proyectos.

## Archivos Legacy

### `sapiens.css` (v0.5 - Monolítico)
**Descripción:** Versión monolítica original del framework (29.4 KB, 1328 líneas)

**Estado:** ⚠️ **DEPRECATED** - Mantener solo para retrocompatibilidad

**Razón de deprecación:**
- Difícil de mantener (todo en un solo archivo)
- No permite actualizaciones selectivas
- Mezcla estructura con componentes

**Migración recomendada:**
```html
<!-- ANTES (Legacy) -->
<link rel="stylesheet" href="legacy/sapiens.css">

<!-- DESPUÉS (Recomendado) -->
<link rel="stylesheet" href="sapiens-core.css">
<link rel="stylesheet" href="sapiens-components.css">
```

---

## ¿Por qué Legacy?

A partir de **v0.5 (Modular)**, el framework Sapiens adoptó una arquitectura modular con dos archivos separados:

1. **sapiens-core.css** - Base estructural estable
2. **sapiens-components.css** - Componentes UI evolutivos

Esta separación permite:
- ✅ Mejor mantenibilidad
- ✅ Actualizaciones selectivas
- ✅ Cache más eficiente
- ✅ Versionado independiente por capa

---

## Uso de Archivos Legacy

**Solo usar si:**
- Tienes proyectos existentes que no puedes migrar
- Necesitas compatibilidad exacta con código antiguo
- Estás en proceso de migración gradual

**NO usar si:**
- Estás comenzando un proyecto nuevo
- Puedes actualizar a la arquitectura modular
- Quieres aprovechar las últimas mejoras

---

## Soporte

Los archivos legacy recibirán:
- ⚠️ **No actualizaciones** de features nuevos
- ✅ **Solo bugfixes críticos** de seguridad
- ⚠️ **Soporte limitado** en documentación

Se recomienda migrar a la arquitectura modular lo antes posible.

---

## Historial de Versiones

| Versión | Fecha | Archivo | Estado |
|---------|-------|---------|--------|
| v0.5 (Modular) | 2025-11-22 | core + components | ✅ Actual |
| v0.5 (Monolítico) | 2025-11-22 | sapiens.css | ⚠️ Legacy |

---

**Para más información sobre la arquitectura modular, consulta [`ARCHITECTURE.md`](../docs/ARCHITECTURE.md)**
