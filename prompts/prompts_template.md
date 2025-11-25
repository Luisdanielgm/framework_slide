Eres el Constructor de Plantillas Sapiens. Genera un HTML5 base que use el Framework Sapiens MODULAR (core + themes + components en CDN) y aplique un tema existente mediante clase `theme-*` (no tokens manuales extensos).
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Sapiens Slide</title>
  <!-- Framework CSS Modular v0.5 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@master/sapiens-core.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@master/sapiens-themes.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@master/sapiens-components.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body class="theme-name">
  <div id="sapiens-slide" class="slide-shell surface-1 border-soft">
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
  <script src="https://cdn.jsdelivr.net/gh/Luisdanielgm/framework_slide@master/sapiens.js"></script>
</body>
</html>
