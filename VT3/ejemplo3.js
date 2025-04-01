var botonInsertar = document.getElementById("insertar"); // Selecciono el elemento insertar
var contenidoCampoTexto = document.getElementsByTagName("input")[0]; // Selecciono el input
var textoFijo = document.getElementsByClassName("insertado")[0]; // Selecciono el insertado

// Creamos una función para el botón Insertar
botonInsertar.onclick = function(){
    textoFijo.innerHTML = contenidoCampoTexto.value; // value recoge el contenido que se ha rellenado en el input
}

// En JS se puede llamar a los elementos por su ID, sin tener que hacer uso de getElementById
grande.onclick = function(){ 
    var tamaño = textoFijo.style.fontSize; // Cogemos el valor 200%
    tamaño = tamaño.substring(0, tamaño.length - 1); // 0 = inicio // tamaño.length = final // -1 = Elimina el %
    tamaño = parseInt(tamaño) + 10; // Lo paso a entero y le sumo 5
    tamaño = tamaño + "%"; // Le vuelvo a añadir el %
    textoFijo.style.fontSize = tamaño; // Lo guardo en la propiedad
    console.log(tamaño); // Lo muestro por consola
}

pequeño.onclick = function(){ 
    var tamaño = textoFijo.style.fontSize; 
    tamaño = tamaño.substring(0, tamaño.length - 1); 
    tamaño = parseInt(tamaño) - 10; 
    tamaño = tamaño + "%"; 
    textoFijo.style.fontSize = tamaño; 
    console.log(tamaño); 
}

