function incrementa(evento) {
    // Función que coge el contenido del p y lo incrementa en 1
    var contenido = Number(document.getElementsByTagName("p")[0].innerHTML);

    // Creamos una variable para saber qué botón se pulsó
    var botonPulsado = evento.target;

    switch (botonPulsado) {
        case boton1:
        contenido += 5;
        break;
        case boton2:
        contenido += 10;
        break;
        case boton3:
        contenido += 20;
        break;
        case boton4:
        contenido += 30;
        break;
        case boton5:
        contenido += 40;
        break;
        default:
        console.log("Botón no reconocido");
        break;
    }
    // Actualizamos el contenido de <p>
    document.getElementsByTagName("p")[0].innerHTML = contenido;
}

// Localizamos todos los elementos button
var boton1 = document.getElementsByTagName("button")[0];
var boton2 = document.getElementsByTagName("button")[1];
var boton3 = document.getElementsByTagName("button")[2];
var boton4 = document.getElementsByTagName("button")[3];
var boton5 = document.getElementsByTagName("button")[4];

var listaBotones = [boton1, boton2, boton3, boton4, boton5];

// Recorremos todos los elementos button y le asignamos la función incrementa() al hacer click
for (var i = 0; i < listaBotones.length; i++) {
  listaBotones[i].addEventListener("click", incrementa, false); // addEventListener asigna una función que se ejecutará cuando ocurra un evento, en este caso un click
}
