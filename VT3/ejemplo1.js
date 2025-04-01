// Empleamos innerhtml para obtener o modificar contenido de un elemento HTML

var listaEnlaces = document.getElementsByTagName("u");

for (var i = 0; i < listaEnlaces.length; i++){ // Bucle para recorrer los elementos (patatas, macarrones y coliflor)
    // Esta función se añadirá a cada elemento de listaEnlaces
    listaEnlaces[i].onclick = function(){ 
    // Mediante innerHTML obtenemos el valor de eleccion y con this.innerHTML los modificamos añadiendo una de las 3 opciones de listaEnlaces (patatas, macarrones o coliflor)
        document.getElementById("eleccion").innerHTML = this.innerHTML; 
        console.log("Cambio");
    }
}