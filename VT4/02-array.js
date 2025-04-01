// Los Arrays son estructuras capaces de gestionar conjuntos de datos de diferentes tipos
// Los elementos del array están ordenados y se accede a ellos mediante la posición en la que se encuentra el índice
// Formas de declarar un Array:

var lista1 = [];
var lista2 = ["uno","dos","tres"];
var lista3 = Array();
var lista4 = new Array();

// PROPIEDADES Length y Prototype

// LENGTH: Devuelve el número de elementos que contiene (su tamaño). Un ejemplo sería:

document.getElementById("tamaño").innerHTML = lista2.length;

// PROTOTYPE: Permite añadir nuevos métodos y propiedades a este objeto
// Definimos una función que se agregará al prototipo de Array
Array.prototype.sumar = function(){
    var suma = 0;
    for (var i = 0; i < this.length; i++){
        suma += this[i];
    }
    return suma;
}

// Creamos un array
var miArray = [1,2,3,4,5];

// Usamos el nuevo método sumar que hemos agregado al prototipo de Array
var resultado = miArray.sumar(); // Esto calculará la suma de los elementos del array

console.log(resultado); // Imprimirá 15, que es la suma de 1 + 2 + 3 + 4 + 5


