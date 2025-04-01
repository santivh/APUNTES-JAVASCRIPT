// var tiene ámbito de función. La variable es accesible en toda la función donde se declara
// var se eleva al inicio del ámbito pero su valor será undefined hasta que se le asigne un valor
// var puede declarar la misma variable más de una vez en el mismo ámbito

function ejemploVar(){
    var nombre = "Ana";
    if (true){
        // Sobreescribe la variable original
        var nombre = "Carlos";
    }

    // El valor del nombre ha cambiado dentro del bloque if y fuera, pasa a ser "Carlos" su contenido
    console.log(nombre);
}
ejemploVar();