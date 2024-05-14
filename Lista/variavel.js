function operacoes(valor1, valor2) {
    let diferenca = valor1 - valor2;
    let dobro = (2 * valor1) + (3 * valor2);
    let multiplicacao = valor1 * valor2;

    console.log("Diferença entre as duas variáveis: " + diferenca);
    console.log("O dobro da primeira variável mais o triplo da segunda variável: " + dobro);
    console.log("Multiplicação das duas variáveis: " + multiplicacao);

    let ordem = (valor1 > valor2) ? valor1 + ", " + valor2 : valor2 + ", " + valor1;
    console.log("Variáveis em ordem decrescente: " + ordem);

    document.getElementById("resultado").innerHTML =
        "<p>Diferença entre as duas variáveis: " + diferenca + "</p>" +
        "<p>O dobro da primeira variável mais o triplo da segunda variável: " + dobro + "</p>" +
        "<p>Multiplicação de duas variáveis: " + multiplicacao + "</p>" +
        "<p>Variáveis em ordem decrescente: " + ordem + "</p>";
}

document.getElementById("Calcular").addEventListener("click", function() {
    let a = 10;
    let b = 5;
    operacoes(a, b);
});
