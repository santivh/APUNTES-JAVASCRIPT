/* 
Algunos de los métodos de Arrays más empleados son:
concat(): Concatena los elementos en un nuevo array.
sort(unaFuncion) : Ordena los elementos de un array. 
push() : Añade un elemento al final de un array y devuelve la nueva longitud.
pop() : Devuelve el último elemento de un array y lo elimina.
unshift() : Añade un elemento al principio del array, desplaza todos los demás y devuelve la nueva longitud.
shift() : Devuelve el primer elemento de un array, desplaza todos los demás y lo elimina.
splice() : Modifica el contenido de varios elementos del array.
*/

// Creo un array vacío
let miArray = [];

// Agregamos elementos al array usando el método push()
miArray.push(1);
miArray.push(2);
miArray.push(3);

// Mostramos el contenido del array
console.log("Array después de push:", miArray);

// Concatenar dos arrays usando el método concat()
let otroArray = [4,5,6];
let resultadoConcat = miArray.concat(otroArray);

// Mostramos el resultado de la concatenación
console.log("Resultado de concat:", resultadoConcat);

// Eliminar el último elemento del array usando el método pop()
let ultimoElemento = miArray.pop();

// Mostramos el elemento eliminado y el array actualizado
console.log("Último elemento eliminado:", ultimoElemento);
console.log("Array después de pop:", miArray);