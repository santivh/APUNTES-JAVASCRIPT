var medida = document.getElementById("tamaño").innerHTML;

for (var i = 0; i < medida; i++){
    document.getElementsByTagName("ul")[0].innerHTML += "<li>Creo el elemento " + i + "</li>"; // Aquí rellenamos la <ul> previamente vacía con varios elementos <li>
}

document.getElementsByTagName("li")[5].style.backgroundColor = "#82e0aa"; // Aquí cambia el color del valor 5 del array