// Mejora sintáctica sobre la herencia basada en prototipos
/**
 * Constructor --> Método que se llama al crear un objeto de una clase
 * Setters --> Para establecer el valor de las propiedades
 * Getters --> Para recuperar el valor de las propiedades
 * Métodos --> Funciones que realiza el objeto
 */

class Estudiante{
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
        this.asignaturas = [];
    }

    get correoElectronico(){
        return this.correo + "@ilernaonline.com";
    }

    muestraAsignatura(){
        return this.asignaturas;
    }

    matricular(asignatura){
        this.asignaturas.push(asignatura); // Push se utiliza para agregar un elemento al final de un array
        return "Lista de asignaturas: " + this.asignaturas;
    }

    aprobar(asignatura){
        var posicion = this.asignaturas.indexOf(asignatura); // IndexOf devuelve el índice de la primera posición en la que se encuentra el elemento que buscamos
        this.asignaturas.splice(posicion, 1); // Splice modifica un array eliminando/modificandolo. En este caso empieza en el 0 y elimina un elemento
        return "Lista de asignaturas: " + this.asignaturas;
    }

    limpiarAsignaturas(){
        this.asignaturas = [];
        return "Se han vaciado las asignaturas";
    }

}

var alumno1 = new Estudiante("Santi", "alumno1viana");

console.log(alumno1);
console.log(alumno1.nombre);
console.log(alumno1.correoElectronico);
console.log(alumno1.matricular("Despliegue de Interfaces"));
console.log(alumno1.muestraAsignatura());
console.log(alumno1.matricular("Programación"));
console.log(alumno1.aprobar("Cliente"));
console.log(alumno1.muestraAsignatura());