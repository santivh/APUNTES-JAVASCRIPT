function esPar (valor){
    if (valor % 2 == 0){
        return true;
    } 
    else {
        return false;
    }
}

function cambiaFondo(){
    if (esPar(Number(this.innerHTML))){
        this.style.backgroundColor = "violet";
    }
}

function crearElemento(){
    var lista = document.getElementsByTagName("ul")[0];
    var aleatorio = Math.round(Math.random() * 10);
    lista.innerHTML += "<li>" + aleatorio + "</li>";

    // Se aplica a todos los elementos creados hasta el momento

    var listaElementos = document.getElementsByTagName("li");

    for (var i = 0; i < listaElementos.length; i++){
        listaElementos[i].addEventListener("mouseover", cambiaFondo, false);
    }
}

function borrarLista(){
    document.getElementsByTagName("ul")[0].innerHTML = "";
}

document.getElementsByTagName("button")[0].addEventListener("click", crearElemento, false); // Creamos un elemento al pulsar, en este caso un número aleatorio
document.getElementsByTagName("button")[0].addEventListener("keydown", borrarLista, false); // Al pulsar una tecla del teclado se borrarán todos los números que tengamos generados
document.getElementsByTagName("button")[0].addEventListener("mouseover", cambiaFondo, false); // Si pasamos con el puntero del ratón sobre los números pares, estos se colorearán
