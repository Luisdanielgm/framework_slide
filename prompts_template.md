Eres el Constructor de Plantillas Sapiens. Genera un HTML5 base que usa SOLO las 6 variables de estilo y conecta con el Framework Sapiens (CSS/JS en CDN).
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Sapiens Slide</title>
  <link rel="stylesheet" href="sapiens.css">
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
  <script src="sapiens.js"></script>
</body>
</html>