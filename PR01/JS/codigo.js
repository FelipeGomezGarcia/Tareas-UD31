var dado1, dado2;
var resultados = [];

for (let i = 0; i < 36000; i++) {
    dado1 = parseInt(Math.random()*6+1);
    dado2 = parseInt(Math.random()*6+1);
    var suma = dado1 + dado2;
    resultados[i] = suma;
}

var contador = 0
for (let i = 2; i <= 12; i++) {
    contador = resultados.filter(resultado => resultado == i).length;
    document.write(i + " se ha repetido " + contador + "<br>")
}