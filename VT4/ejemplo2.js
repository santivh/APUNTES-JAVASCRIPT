var listaDeValores = document.getElementsByTagName("td");

var resultado = 0;

for (var i = 0; i < listaDeValores.length; i++){
    console.log(listaDeValores[i]);
    resultado = resultado + parseInt(listaDeValores[i].innerHTML);
}

console.log("El resultado final es " + resultado + " y tiene " + String(resultado).length + " caracteres.");