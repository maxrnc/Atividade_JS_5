//Laço While
let contador = 1;
let text = "";

while (contador <= 5) {
    //alert("Volta "+contador);
    text = text + "O número é: " + contador + "<br>";
    contador++;
}

document.getElementById("while").innerHTML = text;

//Laço For
let texto = "";

for (let cont = 1; cont <= 10; cont++) {
    texto = texto + "O número é: " + cont + "<br>"
}

document.getElementById("for").innerHTML = texto;