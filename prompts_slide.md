Eres el Renderizador UI del Framework Sapiens. Compila la slide del plan en HTML usando ESTRICTAMENTE los componentes del framework.

================ SAPIENS UI CHEATSHEET (OBLIGATORIO) ================
1. TARJETA (.card):
   <div class="card">
     <h2>Subtítulo</h2>
     ...contenido...
   </div>

2. LISTA (.feature-list):
   <ul class="feature-list">
     <li><strong>Concepto:</strong> Explicación...</li>
     <li>Detalle simple...</li>
   </ul>

3. CÓDIGO (.code-block):
   <div class="code-block">
     <div class="code-nav">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
     </div>
     <pre><code>... tu código aquí ...</code></pre>
   </div>

4. ICONOS (.icon-circle):
   <div class="icon-circle icon-lg icon-magenta">
     <i class="fa-solid fa-robot"></i>
   </div>
   (Variantes: icon-sm/md/lg/xl | icon-magenta/yellow/purple/cyan/orange/green)

5. BADGES (.badge):
   <span class="badge badge-primary">Texto</span>

6. STATS (.stat-card):
   <div class="stat-card magenta">
     <div class="stat-icon"><i class="fa-solid fa-chart-line"></i></div>
     <div class="stat-number">45%</div>
     <div class="stat-label">Crecimiento</div>
   </div>

================ LÓGICA DE LAYOUTS ================
- layout-hero: un solo <div class="card"> destacado con 1-3 bullets/ideas.
- layout-split: dos columnas; izquierda <div class="card"> con content.primary (usa .feature-list), derecha <div class="card"> con content.secondary (texto/dato/código breve).
- layout-code: izquierda <div class="card"> explicando, derecha el bloque .code-block con el código de content.secondary.
- layout-bento: 3-4 <div class="card"> cortas en grid.
- layout-timeline: <div class="timeline-container"> con <div class="timeline-item"> conectados por <div class="timeline-connector">.
- layout-circular: <div class="layout-circular"> con <div class="circular-center"> y <div class="circular-nodes"> con 6 <div class="circular-node">.
- layout-stats: <div class="layout-stats"> con 3-4 <div class="stat-card">.
- layout-intro: <div class="layout-intro"> con elementos decorativos y título grande.

================ DATOS DE LA SLIDE ================
- Slide: 10 de 12
- title: Conceptos Clave
- layoutClass solicitada: layout-bento
- content.primary:
1. Web: sistema distribuido sobre Internet
2. Cliente/Servidor: solicitud y respuesta
3. HTML: estructura con etiquetas
4. URL: dirección única de recursos
- content.secondary: 
- footerTag: Resumen Educativo
- badge a mostrar: Resumen Educativo
- Slide anterior: 9 - Ejemplo Práctico: Página Personal
- Slide posterior: 11 - Límites de HTML y Próximos Pasos
- Fragmento a cubrir (resumido): - Arquitectura Cliente/Servidor: Modelo donde el cliente (navegador) solicita recursos al servidor, que los envía para visualización.
- HTML (HyperText Markup Language): Lenguaje de marcado que estructura páginas web usando etiquetas.
- Etiquetas (Tags): Elementos como <p> o <h1> que definen tipos de contenido; vienen en pares apertura/cierre o auto-cerradas.
- Navegador Web: Programa que interpreta y muestra archivos HTML.
- Servidor: Computadora que almacena y envía recursos web.
- URL (Uniform Resource Locator): Dirección única para acceder a recursos en la Web.
- Visual Studio Code (VS Code): Editor de código para escribir y organizar HTML, con herramientas de resaltado y autocompletado.
- Estructura Básica de HTML: Incluye DOCTYPE, <html>, <head> y <body> para un documento válido.
- Fragmento previo (resumido): Hemos recorrido los fundamentos de la Web: desde su arquitectura cliente/servidor, que permite solicitudes y respuestas eficientes, hasta la estructura básica de HTML, el esqueleto que organiza contenido con etiquetas. Herramientas como VS Code y asistentes de IA facilitan el proceso, pero el verdadero aprendizaje viene de practicar y entender. En este módulo, este tema te equipa para construir páginas simples, preparando el terreno para estilos con CSS y lógica con JS en clases futuras. Recuerda: la Web es accesible y poderosa; con HTML, das el primer paso. ¿Listo para crear tu primera página? ¡Empieza experimentando!
- Resumen del tema: # Contenido teórico: Fundamentos de la Web, Arquitectura Cliente/Servidor y Estructura Básica de HTML

## Descripción
Material teórico educativo sobre el tema, diseñado para estudiantes de nivel medio en el plan de estudios "Desarrollo web con Inteligencia Artificial". Este contenido explora los principios básicos que sustentan la World Wide Web, incluyendo su arquitectura cliente/servidor, y se centra en el rol esencial de HTML como lenguaje de marcado para estructurar páginas web. Se basa en fundamentos prácticos, con explicaciones claras y ejemplos que facilitan la comprensión, preparándote... [contenido truncado]

==================== PLANTILLA BASE ====================
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Sapiens Slide</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@5bb682cb20625aaa50d09ee97592656bd5257c07/sapiens.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-1: #0f172a;
      --bg-2: #1e293b;
      --accent-1: #3b82f6;
      --accent-2: #06b6d4;
      --font-head: 'Inter', sans-serif;
      --font-body: 'Inter', sans-serif;
    }
  </style>
</head>
<body>
  <div id="sapiens-slide" class="slide-shell">
    <div class="decorative grid-lines"></div>
    <div class="decorative orb orb-1"></div>
    <div class="decorative orb orb-2"></div>
    <header class="slide-header">
      <h1 id="slot-title"></h1>
      <span class="header-badge" id="slot-badge"></span>
    </header>
    <main class="slide-body" id="slot-body"></main>
    <footer class="slide-footer">
      <span id="slot-footer-left"></span>
      <span id="slot-footer-right"></span>
    </footer>
  </div>
  <script src="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@5bb682cb20625aaa50d09ee97592656bd5257c07/sapiens.js"></script>
</body>
</html>
========================================================

INSTRUCCIONES FINALES:
1) Devuelve el HTML COMPLETO (<!DOCTYPE html> ... </html>), sin markdown ni comentarios.
2) No añadas nuevos <style> ni <script>. Usa solo las clases del framework.
3) En el <main id="slot-body"> agrega la clase "layout-bento" además de las existentes.
4) Rellena:
   - #slot-title con el título.
   - #slot-badge con "Resumen Educativo" (badge = footerTag si existe; si no, usa el nombre del tema; si no, usa "Slide X/Total").
   - #slot-body con el contenido según layout y CHEATSHEET.
   - #slot-footer-left con footerTag o sección actual; #slot-footer-right con "10/12".
5) No elimines decorativos ni cambies IDs/clases del framework.

LIMITES:
- Máx. 200 palabras, máx. 5 bullets, código máx. 8 líneas.
- Evita overflow: listas cortas, párrafos breves; prioriza 3 bullets clave si hay exceso.
- No coloques "Slide X of Y" en el cuerpo (solo footer si aplica).

-------------------
-------------------
-------------------

Respuesta:

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Sapiens Slide</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@5bb682cb20625aaa50d09ee97592656bd5257c07/sapiens.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-1: #0f172a;
      --bg-2: #1e293b;
      --accent-1: #3b82f6;
      --accent-2: #06b6d4;
      --font-head: 'Inter', sans-serif;
      --font-body: 'Inter', sans-serif;
    }
  </style>
</head>
<body>
  <div id="sapiens-slide" class="slide-shell">
    <div class="decorative grid-lines"></div>
    <div class="decorative orb orb-1"></div>
    <div class="decorative orb orb-2"></div>
    <header class="slide-header">
      <h1 id="slot-title">Conceptos Clave</h1>
      <span class="header-badge" id="slot-badge">Resumen Educativo</span>
    </header>
    <main class="slide-body layout-bento" id="slot-body">
      <div class="card">
        <h2>Web</h2>
        <p>Sistema distribuido sobre Internet para compartir recursos.</p>
      </div>
      <div class="card">
        <h2>Cliente/Servidor</h2>
        <p>Modelo donde el cliente solicita y el servidor responde con datos.</p>
      </div>
      <div class="card">
        <h2>HTML</h2>
        <p>Lenguaje de marcado que estructura páginas con etiquetas.</p>
      </div>
      <div class="card">
        <h2>URL</h2>
        <p>Dirección única para acceder a recursos en la Web.</p>
      </div>
    </main>
    <footer class="slide-footer">
      <span id="slot-footer-left">Resumen Educativo</span>
      <span id="slot-footer-right">10/12</span>
    </footer>
  </div>
  <script src="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@5bb682cb20625aaa50d09ee97592656bd5257c07/sapiens.js"></script>
</body>
</html>