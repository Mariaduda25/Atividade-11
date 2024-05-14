function salario(){
   
    let nome = prompt('Qual o seu nome?');
   
    let salarioBruto= 0;

    salarioBruto = parseFloat(window.prompt('Informe seu Salario Bruto'));

    let valorINSS = 0.08;

    let desconto=0;
   
    desconto=salarioBruto*valorINSS;

    salarioLiquido = salarioBruto - desconto

    window.alert("Funcionario:  " + nome)
    window.alert("Com o desconto, terá o salario liquido de R$ " + salarioLiquido)

}