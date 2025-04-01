function ejecuta(){
    var a = "10";
    var b = 10;
    var c = 10.0;

    console.log("Compruebo si 10 es igual a 10.0");

    if(b == c){
        console.log("Son iguales");
    } else {
        console.log("Son distintos");
    }

    // Enteros y Float son de tipo Number

    if (b === c){
        console.log("Son iguales y del mismo tipo");
    } else {
        console.log("Son iguales pero de otro tipo");
    }

    // Un bucle que añade a "a" un "0" por cada valor que tenga "b"

    while (b > 0){
        a = a + "0";
        b = b - 1;
        console.log(a);
    }

    // Un switch nos permite controlar diferentes condiciones

    switch (c){
        case 10:
            console.log("Vale 10"); // Sin el break, entra en el siguiente caso
        case 9:
            console.log("Vale 9");
            break
        default: // Para cualquier otro caso
            console.log("Es otra cosa");
    }
}

