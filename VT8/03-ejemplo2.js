function longitudContrasena(contrasena){
    if(contrasena.length > 5){
        return true;
    } else {
        return false;
    }
}

function usuarioCorrecto(nombre){
    console.log(nombre);
    if(isNaN(nombre[0])){ // Mediante isNaN comprobramos que el valor no sea un número. Si es un número devuelve false, si no lo es devuelve true
        return true;
    } else {
        return false;
    }
}

function compruebaNombre(elemento){
    let nombreUsuario = elemento.value;
    if (usuarioCorrecto (nombreUsuario)){
        console.log("correcto");
        elemento.classList.add("bordeVerde");
        elemento.classList.remove("bordeRojo");
    } else {
        console.log("incorrecto");
        elemento.classList.add("bordeRojo");
        elemento.classList.remove("bordeVerde");
    }
}

function compruebaContrasena (elemento){
    let contrasena = elemento.value;
    console.log(contrasena);
    if (longitudContrasena(contrasena)){
        // Importante añadir y quitar depedendiendo del caso para asegurarnos
        elemento.classList.add("bordeVerde");
        // El estado que nos interesa para el elemento
        elemento.classList.remove("bordeRojo");
        return true;
    } else {
        elemento.classList.add("bordeRojo");
        elemento.classList.remove("bordeVerde");
        return false;
    }
}

function convierteAFecha (fechaentrada){
    let ano = fechaentrada.slice(0, 4); // slice se usa para extraer una parte de un array o string
    let mes = fechaentrada.slice(5, 7);
    let dia = fechaentrada.slice(8, 10);
    let nuevaFecha = new Date (ano, mes - 1, dia);
    return nuevaFecha;
}

function compruebaFecha(elemento) {
    let fechaString = elemento.value;

    if (!fechaString) {
        document.getElementById("mensajeFecha").innerHTML = "Introduce una fecha";
        return;
    }

    let fechaIntroducida = convierteAFecha(fechaString);
    let hoy = new Date();
    
    let edad = hoy.getFullYear() - fechaIntroducida.getFullYear();
    let mesActual = hoy.getMonth();
    let diaActual = hoy.getDate();
    let mesNacimiento = fechaIntroducida.getMonth();
    let diaNacimiento = fechaIntroducida.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    const mensaje = document.getElementById("mensajeFecha");

    if (edad < 18) {
        mensaje.innerHTML = "Debes ser mayor de edad";
        elemento.classList.add("bordeRojo");
        elemento.classList.remove("bordeVerde");
    } else {
        mensaje.innerHTML = "Eres mayor de edad";
        elemento.classList.add("bordeVerde");
        elemento.classList.remove("bordeRojo");
    }
}


// Comprueba si la contraseña es correcta, si no lo es, para el evento "submit" iniciado.
function procesarFormulario(evento){
    // Accedemos al input de la contraseña
    let inputContrasena = document.getElementById("contrasena");
    // La función siempre se ejecuta, y si el resultado es que la contraseña no es válida, detiene el vento submit (que es el que ha recibido esta función)
    if (!compruebaContrasena(inputContrasena)){
        evento.preventDefault();
        return false;
    }
}

// NOTA: Resulta que podemos invocar directamente a un elemento mediante su identificador.
// Podeis comprobarlo descomentando las siguientes líneas y abriendo la consola:
// console.log(prueba);
// console.log(document.getElementById("prueba"));

// Añado el control sobre la pérdida del foco sobre el input de nombre para comprobar el nombre
document.getElementById("nombre").addEventListener("blur",function(){
// En "this" envío el objeto en el que estoy, en este caso document.getElementById("nombre")
    compruebaNombre(this);
}, false);

// Añado el control sobre la pérdida de foco sobre el input de la fechaz para comprobar la edad
document.getElementById("fecha").addEventListener("blur", function(){
    compruebaFecha(this);
}, false);

// Añado el control sobre el evento "submit" del formulario. De esta forma, la función "procesarFormulario" solo recive el evento "submit"
document.getElementsByTagName("form")[0].addEventListener("submit", procesarFormulario, false);


document.getElementById("contrasena").addEventListener("blur", function(){
    compruebaContrasena(this);
}, false);
