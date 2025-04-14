// Las expresiones regulares son patrones de búsqueda que se pueden utilizar para localizar cadenas de caracteres que lo cumplan
// Tiene una sintaxis un tanto complicada y algo difícil de leer pero es la forma más eficiente de buscar coincidencias en un texto
// En JS lo haremos a travñes del objeto RegExp

// EJEMPLO 1

function compruebaQueEs(){
    const userTwitter = /^[A-Za-z0-9_]{1,15}$/g;

    if(userTwitter.test(entrada.value)){
        alert("Es un usuario de Twitter");
    } else {
        alert("No lo es");
    }
}

// EJEMPLO 2

function buscaCorreosElectronicosValidos(){
    const correo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;

    // Vamos ejecutando cada vez la búsqueda hasta que devuelva null, que habrá termianado
    while ((correos = correo.exec(HTMLTextAreaElement.value)) && (correos != null)){
        salida.innerHTML += correos[0] + "<br>";
    }
}

botonArea.addEventListener("click", buscaCorreosElectronicosValidos, false);