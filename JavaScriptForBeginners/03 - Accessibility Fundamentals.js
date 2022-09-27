/*
Añadicion de lectores de pantalla
	Se ocupan normalmente para las personas que son ciegas
Zoom
	Para personas con problemas de vision
Damas de contraste
	Las paginas web deben de cumplir con las necesidades de los  usuarios daltonicos o de las personas que 
	tienen dificultades para ver los colores de bajo contraste
Diseñado para la accesibilidad
	Paletas seguras de color
		Usar la herramienta Color Safe
		http://colorsafe.co/
	Usa el HTML correcto
		Con CSS y JavaScript es posible hacer que cualquier elemento parezca cualquier tipo de control. 
		<span>podría usarse para crear un correo electrónico <button>y <b>podría convertirse en un 
		hipervínculo. Si bien esto podría considerarse más fácil de diseñar, no transmite nada a un 
		lector de pantalla. Utilice el HTML adecuado al crear controles en una página. Si desea un 
		hipervínculo, utilice <a>. Usar el HTML correcto para el control correcto se denomina hacer 
		uso de HTML semántico.
	Crear una jerarquía de encabezados descriptivos
		Los usuarios de lectores de pantalla dependen en gran medida de los encabezados para encontrar 
		información y navegar por una página. Escribir contenido de encabezado descriptivo y usar 
		etiquetas de encabezado semántico es importante para crear un sitio fácilmente navegable para 
		los usuarios de lectores de pantalla.
	Usa buenas pistas visuales
		CSS ofrece un control completo sobre el aspecto de cualquier elemento de una página. Puede 
		crear cuadros de texto sin contorno o hipervínculos sin subrayar. Desafortunadamente, eliminar 
		esas pistas puede hacer que sea más difícil para alguien que depende de ellas reconocer el 
		tipo de control.
	La importancia del texto del enlace
		Los hipervínculos son fundamentales para navegar por la web. Como resultado, garantizar que un 
		lector de pantalla pueda leer correctamente los enlaces permite que todos los usuarios 
		naveguen por su sitio.
	Lectores de pantalla y enlaces
		*Aplicar buenos enlaces de URL, enlaces oscuros

ARIA
Investigar - recomendado para el portafolio

Referencia de un HTML

<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>

*/