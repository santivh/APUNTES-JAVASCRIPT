// Las funciones anónimas las asociamos directamente a una propiedad o variable y no necesitan nombre

var x = function(){
    console.log("Hola");
}

document.getElementsByTagName("p")[0].onclick = x;