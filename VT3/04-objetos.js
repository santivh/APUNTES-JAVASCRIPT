// Con JS podemos acceder a distintos métodos dependiendo del tipo de objeto que vayamos a utilizar

// String --> Nos permite manipular cadenas de caracteres 

var texto = new String ("Hola a todos");

console.log(texto.length);
console.log(texto.indexOf("a")); // indexOf devuelve el número de apariciones de un carácter, en este caso "a"
console.log(texto.indexOf("u")); // Si el parámetro que introducimos no se encuentra en la cadena, indexOf mostrará -1

// Math --> Nos permite realziar operaciones matemáticas

console.log(Math.PI); // Muestra el valor de pi
console.log(Math.SQRT2); // Muestra la raíz cuadrada de 2
console.log(Math.sqrt(2)); // Calcula y muestra la raíz cuadrada de 2

// Number --> Nos permite trabajar con valores numéricos

var a = 123;
console.log(Number.isInteger(a)); // Nos dice si es o no un número entero

// Date --> Permite realizar operaciones con fechas. "Empieza desde el 1 de enero de 1970"

var fechaHoy = new Date();

fechaHoy.setDate(23);
fechaHoy.setMonth(4);
fechaHoy.setYear(1998);

console.log(fechaHoy);
console.log(fechaHoy.getTime);

/* Window --> Controla la ventana del navegador y nos permite crear y manejar otras ventanas
Métodos: alert(), confirm(), open()   */ 

/* Document --> Nos permite acceder a todos los elementos del documento 
Métodos: document.getElementByid(ID), document.getElementByTagName("etiqueta"), document.getElementByClassName("clase"), */ 

// Screen --> Contiene información sobre la pantalla del usuario.

console.log(window.screen.height);
console.log(window.screen.availHeight);