// A la hora de introducir eventos podemos diferenciar varias modelos para hacerlo

// MODELO EN LÍNEA: El código se introduce directamente en el html

// MODELO TRADICIONAL: La funcionalidad se asigna a través de la ejecución de un código JS que asocia el atributo correspondiente

var elemento = document.getElementsByTagName("b")[0];
elemento.onclick = function(){
    alert("hola");
}

// MODELO SEGÚN W3C: Gestionar los eventos de un elemento mediante la escucha de las acciones que se realizan sobre él

var elemento2 = document.getElementsByTagName("b")[0];

function saludar(){
    alert("Holaa");
}

elemento2.addEventListener("click", saludar, false);

// MODELO SEGÚN MICROSOFT: Gestionar los eventos de un elemento mediante la escucha de las acciones que se realizan sobre él

var elemento3 = document.getElementsByTagName("b")[0];

function saludar(){
    alert("Holaaa");
}

elemento3.attachEvent("onclick", saludar);


