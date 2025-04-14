var listaTemas = [
    "jS84iMcnCkc",  // "Verde" - Dellafuente
    "GxczN_ziDGU",  // "Consentía" - Dellafuente
    "0OpnslhxfhU",  // "Veneno Acústico" - Dellafuente
    "jcQZmXRkXXs",  // "Una Gota" - Dellafuente
];


function enlaceYT(codigo){
    return "https://www.youtube.com/watch?v=" + codigo + "&ab_channel=DELLAFUENTE";
}

// Clase para manejar enlaces, artistas y códigos

class enlaceCancion{
    constructor(contenido, codigo){
        this.contenido = contenido;
        this.codigo = codigo;
        this.enlace = enlaceYT(this.codigo);
    }

    convierteEnlace(posicion){
        return "<a id='" + posicion + "' target='_blank' href='" + this.enlace + "'>" + this.contenido + "</a>";
    }

    get convierteAImagen(){
        return "img/" + this.contenido + ".jpg";
    }
}

function convertirEnlaces(){
    let listaElementos = document.getElementsByTagName("li");
    for (var i = 0; i < listaElementos.length; i++){

        // Creamos un objeto para poder usar sus métodos
        let elementoNuevo = new enlaceCancion(listaElementos[i].innerHTML, listaTemas[i]);
        listaElementos[i].innerHTML = elementoNuevo.convierteEnlace(i);

        // Sacamos el valor que debe tener la imagen y hacemos que aparezca al hacer mouseover
        let valorImagen = elementoNuevo.convierteAImagen;

        listaElementos[i].addEventListener("mouseover", function(){
            let imagen = document.getElementById("imagen");
            imagen.src = valorImagen; // Cambia la imagen al pasar el ratón
            imagen.style.display = "block"; // Muestra la imagen
        }, false);    
    }

    // Elimino el botón Púlsame
    document.getElementById("pulsa").innerHTML = "";
}

// Añade la funcionalidad al pulsar el enlace

var botonPulsame = document.getElementsByTagName("a")[0];
botonPulsame.addEventListener("click", convertirEnlaces, false);