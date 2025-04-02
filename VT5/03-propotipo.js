// JavaScript utiliza los prototipos como constructores básicos de los objetos
// El prototipo contiene una serie de métodos y propiedades y nosotros podemos modificarlos
// Al modificar, añadir o eliminar una propiedad o método de un objeto mediante prototype se aplicará en todos los objetos creados de ese tipo
import {Perro, pancho, brian, ayudante, canelo } from "./02-POO.js";
var bet = new Perro ("Beethoven", 2, "San Bernardo", "Guauauuau");
console.log(bet.nombre);
console.log(pancho.nPatas);
console.log(ayudante.raza);

Perro.prototype.color = "Blanco"; // Ejemplo 1 de Prototype en el que añadimos una nueva propiedad al objeto Perro
console.log(bet.color);

ayudante.__proto__.color = "negro"; // Ejemplo 2 de Prototype en el que añadimos una nueva propiedad al objeto ayudante
console.log(ayudante.color);

console.log(canelo.color); // Todos los objetos que hagamos con new Object(); compartirán propiedades/métodos que se realicen con Prototype
