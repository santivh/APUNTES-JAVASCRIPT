function funcionPrincipal(argumento){
    console.log("Aqui puedo hacer cosas");

    function funcionAnidada(){
        return "Hola";
    }

    for (var i = 0; i < argumento; i++){
        console.log(funcionAnidada()); // Llamaremos a la función y mostrará "Hola" la cantidad de veces que le indiquemos con el parámetro introducido
    }
}

funcionPrincipal(5);