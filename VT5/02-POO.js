//La programación orientada a objetos es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
// Si una de esas propiedades tiene asociada una función, entonces tenemos un método 

// FORMAS PARA CREAR OBJETOS:
// PRIMER EJEMPLO
export function Perro (nombre, nPatas, raza, ladrido){
    this.nombre = nombre; // PROPIEDAD
    this.nPatas = nPatas;
    this.raza = raza;
    this.ladra = function(){ // MÉTODO
        console.log(ladrido);
    }
}

export var pancho = new Perro("Pancho", 4, "Pastor Alemán", "Guau Guau");
//console.log(pancho.ladra());

// SEGUNDO EJEMPLO
export var brian = {
    nombre: "Brian",
    nPatas: 4,
    raza: "Beagle",
    ladra: function(){
        console.log("Hola Stewie");
    }
}

//console.log(brian.nombre);

// TERCER EJEMPLO
export var ayudante = new Object();
    ayudante.nombre = "Pequeño ayudante de Santa Claus";
    ayudante.nPatas = 4;
    ayudante.raza = "Galgo";
    ayudante.ladra = function(){
        console.log("Soy el perro de los Simpson");
    }

//console.log(ayudante.ladra());

export var canelo = new Object();