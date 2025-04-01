// Ejemplo para crear clases de nuestros propios objetos

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getEdad(){
        return this.edad;
    }
}

let yo = new Persona ("Santi", "Viana", 23);