// let tiene ámbito de bloque. La variable es accesible sólo dentro del bloque {} en el que se declara
// let también se eleva, pero no puede ser utilizada antes de su declaración (produce error si se usa antes)
// let no puede volver a declarar la misma variable dentro del mismo bloque de la función

function ejemploLet(){
    let edad = 25;
    if (true){
        // Esta "edad" solo existe dentro de este bloque
        let edad = 30;
        console.log(edad); // Aquí el valor que se muestra es 30
    }
    // Fuera del bloque if la edad no ha cambiado, sigue siendo 25
    console.log(edad);
}
ejemploLet();