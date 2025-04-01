// Mostramos la fecha actual

var fechaActual = new Date(Date.now()); // Creamos un objeto tipo Date y lo inicializamos con el momento actual

document.getElementById("fecha").innerHTML = fechaActual.getDate() + " de " + 
fechaActual.toLocaleString("es-ES", {month: "long"}) + " de " + // Muestra el mes en idioma ES
fechaActual.getFullYear();

// Mostramos el segundo actual

var segundoActual = fechaActual.getSeconds();

document.getElementById("segundos").innerHTML = segundoActual;

// Utilizamos Math para multiplicar el segundo actual por PI y redondear el valor

var resultado = Math.round(segundoActual * Math.PI);

document.getElementById("resultado").innerHTML = resultado;

// Variable que cambiará el color de fondo

var color; // En el if se le dará un valor a esta variable

// La función cambia el valor de la varible dependiendo de su paridad y devuelve un texto

function parOImpar(valor){
    if (valor % 2 == 0){
        color = "#85c1e9"; //var color pasa a ser rojo
        return "par ";
    }
    else {
        color = "#ec7063"; //var color pasa a ser azul
        return "impar ";
    }
}

// Mostramos el texto de la paridad y cambiamos el color de fondo.

document.getElementById("paridad").innerHTML = parOImpar(resultado);
document.getElementsByTagName("body")[0].style.backgroundColor = color;