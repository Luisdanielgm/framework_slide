Eres el Arquitecto de Presentaciones Sapiens. Analiza el contenido educativo y genera un plan JSON para el Framework Sapiens (CSS/JS en CDN), eligiendo el LAYOUT correcto según el tipo de contenido.

CONTENIDO EDUCATIVO:
# Contenido teórico: Fundamentos de la Web, Arquitectura Cliente/Servidor y Estructura Básica de HTML

## Descripción
Material teórico educativo sobre el tema, diseñado para estudiantes de nivel medio en el plan de estudios "Desarrollo web con Inteligencia Artificial". Este contenido explora los principios básicos que sustentan la World Wide Web, incluyendo su arquitectura cliente/servidor, y se centra en el rol esencial de HTML como lenguaje de marcado para estructurar páginas web. Se basa en fundamentos prácticos, con explicaciones claras y ejemplos que facilitan la comprensión, preparándote para construir tus primeras páginas web y comprender cómo la inteligencia artificial puede apoyar el proceso de desarrollo.

## Introducción
Imagina que la Web es un vasto libro digital gigante al que accedes a través de tu computadora o teléfono. Cada página de este libro es un documento que viaja por Internet para mostrarse en tu pantalla. En este módulo introductorio del plan "Desarrollo web con Inteligencia Artificial", llamado "Fundamentos de la Web y HTML", aprenderás a entender y construir los cimientos de este mundo digital. El resultado de aprendizaje clave es comprender el rol de HTML y crear tu primera página web sencilla. Este tema sienta las bases para módulos posteriores, como la introducción a CSS para estilos y JavaScript para interactividad, integrando herramientas de IA para agilizar el aprendizaje. Al final, no solo sabrás qué es una página web, sino que podrás crearla desde cero, visualizándola en un navegador. Piensa en esto: ¿alguna vez te has preguntado cómo funciona tu sitio web favorito? Aquí desglosaremos ese misterio paso a paso, como si le explicaras a un amigo curioso.

## Conceptos Fundamentales
Antes de sumergirnos en el código, aclaremos los conceptos básicos que hacen posible la Web. La Web, o World Wide Web, es un sistema de información distribuido que permite acceder a documentos interconectados a través de Internet. No es lo mismo que Internet (que es la red física de conexiones), sino más bien el contenido que viaja sobre ella. ¿Cómo funciona esto en la práctica? Cuando escribes una dirección web, como "www.ejemplo.com", en la barra de tu navegador, estás enviando una solicitud. Esta solicitud llega a un servidor, que es como una biblioteca digital: almacena archivos y los envía de vuelta. El navegador (tu "lector") recibe estos archivos y los interpreta para mostrarte texto, imágenes y más.

La arquitectura cliente/servidor es el corazón de este proceso. El **cliente** es tu dispositivo (computadora, teléfono) con el navegador instalado, como Chrome o Firefox. El **servidor** es una computadora remota (o un servicio en la nube) que responde a las solicitudes enviando los recursos necesarios. Piensa en ello como un camarero en un restaurante: tú (cliente) pides una hamburguesa (página web), y el camarero (servidor) la prepara y te la trae. Esta arquitectura es fundamental porque permite que miles de personas accedan al mismo contenido simultáneamente sin sobrecargar el sistema. Un error común es confundir la Web con aplicaciones móviles; recuerda, la Web es accesible desde cualquier navegador, mientras que las apps necesitan instalación específica.

En el centro de una página web está HTML, o HyperText Markup Language, el "esqueleto" que define la estructura. HTML no es un lenguaje de programación, sino de marcado: usa etiquetas para indicar al navegador qué tipo de contenido es cada parte. Por ejemplo, una etiqueta <p> envuelve un párrafo de texto. HTML se combina con CSS (para estilos) y JavaScript (para interactividad), formando las tres capas de una página web moderna. En este tema, nos enfocamos en HTML porque es el punto de partida; sin una buena estructura HTML, nada más puede construirse sólidamente.

Otro concepto clave es el de las **etiquetas (tags)**: palabras clave entre < > que marcan elementos. Muchas vienen en pares (apertura y cierre, como <p> y </p>), mientras que otras son auto-cerradas (como <img>). Para un estudiante nuevo, pregunta: ¿Por qué crees que las etiquetas necesitan cerrarse? Porque le dicen al navegador dónde termina cada elemento, evitando confusiones. Herramientas como Visual Studio Code (VS Code) hacen esto más fácil, resaltando la sintaxis y sugiriendo cierres automáticos.

Finalmente, la URL (Uniform Resource Locator) es la dirección única que apunta a un recurso. Es como la dirección postal de una casa: el navegador la usa para encontrar el servidor correcto. En nuestro módulo, estos fundamentos te preparan para integrar IA, como asistentes que generan código HTML básico, pero siempre recuerda verificar y entender lo que creas.

## Desarrollo del Tema
Profundicemos en cómo se construye una página web desde cero. Comenzamos con la estructura básica de HTML, que es como el plano de una casa: define dónde va cada habitación. Un archivo HTML es simplemente texto plano, guardado con extensión .html, que el navegador lee y renderiza. La estructura mínima incluye:

- **<!DOCTYPE html>**: Declara que estamos usando HTML5, la versión moderna y estándar. Sin esto, el navegador podría interpretar el código en un modo antiguo, causando errores de visualización.

- **<html>...</html>**: El contenedor raíz que envuelve todo el documento.

- **<head>...</head>**: Contiene metadatos, como el título de la página (que aparece en la pestaña del navegador) y configuraciones como el charset (UTF-8 para caracteres especiales). Aquí también van enlaces a CSS o scripts.

- **<body>...</body>**: El contenido visible: texto, imágenes, enlaces. Aquí es donde pones lo que el usuario ve.

Un ejemplo simple: imagina crear un archivo index.html con el siguiente contenido:

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Mi Sitio Web</title>
</head>
<body>
<h1>¡Hola mundo!</h1>
<p>Bienvenidos a mi primera página web.</p>
</body>
</html>

Al guardar y abrir en el navegador, ves "¡Hola mundo!" en grande (gracias a <h1>, un encabezado) y un párrafo debajo. ¿Qué pasa si olvidas cerrar una etiqueta? El navegador podría mostrar errores o ignorar partes. Buenas prácticas incluyen anidar etiquetas correctamente (una dentro de otra, como <div> dentro de <body>) y usar etiquetas semánticas: <header> para cabeceras, <main> para contenido principal, <footer> para pie de página. Esto no solo hace el código legible, sino que mejora la accesibilidad para lectores de pantalla.

La arquitectura cliente/servidor en acción: cuando abres esta página localmente (haciendo doble clic en el archivo), no hay servidor involucrado; el navegador lee el archivo directamente. Pero en la Web real, solicitas una URL, el servidor envía el HTML, y el navegador lo procesa. Para editar, usamos VS Code: es como un cuaderno digital para código, con resaltado de sintaxis (colorea etiquetas para evitar errores) y un panel lateral para archivos. Extenciones, incluso con IA, pueden autocompletar etiquetas.

Errores comunes: no declarar el DOCTYPE (puede causar incompatibilidades) o mezclar mayúsculas/minúsculas en etiquetas (HTML es insensible a mayúsculas, pero usa minúsculas por convención). Límites de HTML: solo estructura contenido; no maneja estilos (eso es CSS) ni lógica (JavaScript). En el plan de estudios, este tema precede a la introducción de CSS, donde "vestirás" tu esqueleto HTML.

## Ejemplos y Aplicaciones
Apliquemos estos conceptos con ejemplos prácticos. Supongamos que quieres una página personal básica. En VS Code, crea un archivo "sobre_mi.html" con estructura mínima, añadiendo en <body>:

<h1>Acerca de Mí</h1>
<p>Me llamo Ana y soy estudiante de desarrollo web.</p>
<ul>
<li>Hobby 1: Leer libros</li>
<li>Hobby 2: Programar</li>
</ul>

Aquí, <ul> crea una lista sin orden, y <li> cada ítem. Abre en el navegador: ves texto plano, pero estructurado. Analogía: HTML es como armar un rompecabezas; cada pieza (etiqueta) encaja para formar la imagen completa.

Mini-ejercicio: Piensa en tu página web favorita (ej. Google). ¿Qué etiquetas crees que usa? ¿Hay un <header> arriba? ¿Una <nav> para el menú? Intenta visualizar el esqueleto HTML detrás de la interfaz bonita.

INSTRUCCIONES OBLIGATORIAS:
- Devuelve solo un objeto JSON válido (sin markdown ni comentarios).
- Genera entre 10 y 15 slides.
- Un único tema visual en theme.vars con 6 valores: bg1, bg2, accent1, accent2, fontHead, fontBody.
- Usa únicamente las layoutClass: layout-hero | layout-split | layout-code | layout-bento | layout-timeline | layout-circular | layout-stats | layout-intro.
- Asigna layout según contenido:
  * layout-hero: portada, cita o concepto único muy fuerte.
  * layout-split: concepto vs detalle/lista (estándar).
  * layout-code: OBLIGATORIO si hay código, comandos de terminal o JSON (contenido secundario = código).
  * layout-bento: 3-4 conceptos cortos independientes (grid).
  * layout-timeline: procesos secuenciales, historia o pasos (3-4 pasos).
  * layout-circular: ecosistemas, ciclos o conceptos centrales con satélites (6 puntos).
  * layout-stats: datos numéricos impactantes, KPIs o métricas (3-4 datos).
  * layout-intro: portada creativa con elementos decorativos (alternativa a hero).
- Las slides solo declaran datos (title, content.primary/secondary, footerTag, layoutClass, index/slideIndex). Sin estilos ni clases extra.
- Inspírate en temas predefinidos (elige 1 paleta y 2 fuentes, luego mapea a las 6 vars):
  * Tecnología: #0f172a/#1e293b + #3b82f6/#06b6d4 | Fuentes: Inter, Poppins, Space Grotesk
  * Tech púrpura: #1a0b2e/#2e1065 + #7c3aed/#a855f7 | Fuentes: Inter, Manrope, Poppins
  * Cyberpunk: #0d0d0d/#1a1a2e + #00d4ff/#ff2e63 | Fuentes: Inter, JetBrains Mono (solo si hay código), Space Grotesk
  * Académico: #0c1d36/#1e3a5f + #5c7cfa/#748ffc | Fuentes: Montserrat, Lato, Open Sans
  * Creativo: #ee0979/#ff6a00 + #ffd89b/#19547b | Fuentes: Raleway, Comfortaa, Quicksand
  * Naturaleza: #1b4332/#2d6a4f + #40916c/#52b788 | Fuentes: Nunito, Lato, Open Sans
  * Negocios: #2c3e50/#34495e + #f39c12/#e67e22 | Fuentes: Inter, Merriweather (solo títulos), Lato
  * Salud: #dbeafe/#c7d2fe + #3b82f6/#2563eb | Fuentes: Inter, Nunito, Open Sans
  (Si el tema no encaja, crea una paleta coherente distinta pero siempre devuelve solo las 6 vars.)

FORMATO EXACTO REQUERIDO:
{
  "theme": {
    "name": "NombreTema",
    "vars": {
      "bg1": "#HexCode",
      "bg2": "#HexCode",
      "accent1": "#HexCode",
      "accent2": "#HexCode",
      "fontHead": "Google Font Name",
      "fontBody": "Google Font Name"
    }
  },
  "slides": [
    {
      "index": 1,
      "slideIndex": 1,
      "layoutClass": "layout-hero|layout-split|layout-code|layout-bento|layout-timeline|layout-circular|layout-stats|layout-intro",
      "title": "Titulo Slide",
      "content": {
        "primary": ["Punto 1", "Punto 2"],
        "secondary": "Contenido para la columna derecha o codigo (si aplica)"
      },
      "footerTag": "Concepto Clave"
    }
  ]
}

PROHIBIDO INCLUIR (rechaza cualquier campo extra):
- Nada de styleDetails, templates, mergeRules, validators, animation, iconography, componentStyles, layoutGuidelines, background, slideDimensions, templateDefinition, overrides.
- Solo las claves listadas arriba en theme.vars y slides.

SELECCION DE TEMA (elige paleta y fuentes coherentes con el contenido):
- bg1/bg2: fondos oscuros/medios; accent1/2: colores de énfasis.
- fontHead/fontBody: Google Fonts alineadas al tono (tecnologico, academico, creativo, formal, etc.).

REGLAS PARA SLIDES:
- layout-hero: idea central, 1-3 bullets clave.
- layout-split: columna primaria con puntos/explicacion, secundaria con ejemplo/dato/codigo breve.
- layout-code: texto explicativo + bloque de codigo/pseudocodigo.
- layout-bento: 3-4 tarjetas cortas distribuidas en grid.
- layout-timeline: usa content.primary para los pasos (ordenados).
- layout-circular: usa content.primary para los nodos satélite (máx 6).
- layout-stats: usa content.primary para los números/datos.
- layout-intro: título impactante y subtítulo en content.primary.

NO INCLUIR:
- CSS, HTML, campos extra ni comentarios. Solo el JSON anterior.

-------------------
-------------------
-------------------

Respuesta:

{
  "theme": {
    "name": "Tecnología",
    "vars": {
      "bg1": "#0f172a",
      "bg2": "#1e293b",
      "accent1": "#3b82f6",
      "accent2": "#06b6d4",
      "fontHead": "Inter",
      "fontBody": "Poppins"
    }
  },
  "slides": [
    {
      "index": 1,
      "slideIndex": 1,
      "layoutClass": "layout-hero",
      "title": "Fundamentos de la Web y HTML",
      "content": {
        "primary": [
          "Explora los principios básicos de la World Wide Web",
          "Arquitectura Cliente/Servidor",
          "Estructura Básica de HTML"
        ],
        "secondary": ""
      },
      "footerTag": "Introducción al Desarrollo Web"
    },
    {
      "index": 2,
      "slideIndex": 2,
      "layoutClass": "layout-split",
      "title": "La Web: Un Sistema de Información",
      "content": {
        "primary": [
          "La Web es un sistema distribuido accesible via Internet",
          "Diferencia entre Web e Internet: contenido vs. red física",
          "Solicitud y respuesta: navegador (cliente) y servidor"
        ],
        "secondary": "Analogía: Tú pides una hamburguesa (página web) al camarero (servidor)."
      },
      "footerTag": "Concepto Fundamental: Web vs. Internet"
    },
    {
      "index": 3,
      "slideIndex": 3,
      "layoutClass": "layout-split",
      "title": "Arquitectura Cliente/Servidor",
      "content": {
        "primary": [
          "Cliente: dispositivo con navegador (Chrome, Firefox)",
          "Servidor: computadora remota que almacena y envía recursos",
          "Permite acceso simultáneo sin sobrecargar el sistema"
        ],
        "secondary": "Error común: confundir con apps móviles; la Web es accesible desde navegadores."
      },
      "footerTag": "Arquitectura Esencial"
    },
    {
      "index": 4,
      "slideIndex": 4,
      "layoutClass": "layout-split",
      "title": "HTML: Lenguaje de Marcado",
      "content": {
        "primary": [
          "HTML es el 'esqueleto' que define la estructura",
          "No es lenguaje de programación, sino de marcado con etiquetas",
          "Se combina con CSS (estilos) y JavaScript (interactividad)"
        ],
        "secondary": "Etiquetas: pares (ej. <p></p>) o auto-cerradas (ej. <img>)."
      },
      "footerTag": "Rol de HTML"
    },
    {
      "index": 5,
      "slideIndex": 5,
      "layoutClass": "layout-split",
      "title": "Etiquetas y URL",
      "content": {
        "primary": [
          "Etiquetas marcan elementos: apertura/cierre para evitar confusiones",
          "URL: dirección única para recursos, como una dirección postal",
          "Herramientas como VS Code facilitan edición con resaltado"
        ],
        "secondary": "¿Por qué cerrar etiquetas? Para delimitar elementos correctamente."
      },
      "footerTag": "Etiquetas y Navegación"
    },
    {
      "index": 6,
      "slideIndex": 6,
      "layoutClass": "layout-code",
      "title": "Estructura Básica de HTML",
      "content": {
        "primary": [
          "<!DOCTYPE html>: declara HTML5",
          "<html>: contenedor raíz",
          "<head>: metadatos, título, charset",
          "<body>: contenido visible"
        ],
        "secondary": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Mi Sitio Web</title>\n</head>\n<body>\n<h1>¡Hola mundo!</h1>\n<p>Bienvenidos a mi primera página web.</p>\n</body>\n</html>"
      },
      "footerTag": "Estructura Mínima"
    },
    {
      "index": 7,
      "slideIndex": 7,
      "layoutClass": "layout-split",
      "title": "Creando una Página Web",
      "content": {
        "primary": [
          "Archivo .html como texto plano, renderizado por navegador",
          "Etiquetas semánticas: <header>, <main>, <footer>",
          "Buenas prácticas: anidar correctamente, usar minúsculas"
        ],
        "secondary": "Errores comunes: olvidar DOCTYPE o mezclar mayúsculas."
      },
      "footerTag": "Construcción Práctica"
    },
    {
      "index": 8,
      "slideIndex": 8,
      "layoutClass": "layout-split",
      "title": "Cliente/Servidor en Acción",
      "content": {
        "primary": [
          "Local: navegador lee archivo directamente",
          "En línea: solicitud a servidor via URL",
          "VS Code: editor con resaltado y autocompletado"
        ],
        "secondary": "Integración con IA: asistentes generan código básico."
      },
      "footerTag": "Proceso de Solicitud"
    },
    {
      "index": 9,
      "slideIndex": 9,
      "layoutClass": "layout-code",
      "title": "Ejemplo Práctico: Página Personal",
      "content": {
        "primary": [
          "Crear archivo sobre_mi.html",
          "Añadir estructura mínima en <body>",
          "Usar listas: <ul> y <li>"
        ],
        "secondary": "<h1>Acerca de Mí</h1>\n<p>Me llamo Ana y soy estudiante de desarrollo web.</p>\n<ul>\n<li>Hobby 1: Leer libros</li>\n<li>Hobby 2: Programar</li>\n</ul>"
      },
      "footerTag": "Aplicación Básica"
    },
    {
      "index": 10,
      "slideIndex": 10,
      "layoutClass": "layout-bento",
      "title": "Conceptos Clave Resumidos",
      "content": {
        "primary": [
          "Web: sistema distribuido sobre Internet",
          "Cliente/Servidor: solicitud y respuesta",
          "HTML: estructura con etiquetas",
          "URL: dirección única de recursos"
        ],
        "secondary": ""
      },
      "footerTag": "Resumen Educativo"
    },
    {
      "index": 11,
      "slideIndex": 11,
      "layoutClass": "layout-split",
      "title": "Límites de HTML y Próximos Pasos",
      "content": {
        "primary": [
          "HTML solo estructura; CSS para estilos, JS para lógica",
          "Preparación para módulos: CSS y JavaScript",
          "IA en desarrollo: acelera generación de código"
        ],
        "secondary": "Analogía: HTML es el rompecabezas; CSS lo colorea."
      },
      "footerTag": "Integración con IA"
    },
    {
      "index": 12,
      "slideIndex": 12,
      "layoutClass": "layout-hero",
      "title": "Conclusión: Crea Tu Primera Página",
      "content": {
        "primary": [
          "Comprende el rol de HTML y la Web",
          "Practica creando estructuras básicas",
          "Visualiza en navegador y expande con estilos"
        ],
        "secondary": ""
      },
      "footerTag": "Resultado de Aprendizaje"
    }
  ]
}