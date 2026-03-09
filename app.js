// let nome = "Elias"
// let numero = 10

// if(numero == "dez") {
//     console.log("caiu em if");

// } else {
//     console.log("caiu em else");
// }



// let numero1 =10
// let numero2 = 20

// if(numero1 > numero2) {
//     console.log("numero 1 maior que numero 2");
// } else {
//     console.log("nummero 2 maior que numero 1");
// }



// let anoNascimento = 2012
// let idade = 2026 - anoNascimento

// if (idade >= 16) {
//     console.log("consegue votar");

// } else {
//     console.log("não consegue votar");
// }



// let senhaValida = 1234

// if(senhaValida === 1234) {
//     console.log("senha válida");

// } else {
//     console.log("senha inválida");
// }



// let numeroMacas = 13

// if (numeroMacas >= 12) {
//     console.log(`Valor da Maca: ${0.25*numeroMacas}`);

// } else {
//     console.log(`Valor da Maca: ${0.30*numeroMacas}`);
// }


// let valor1 = 10
// let valor2 = 20
// let valor3 = 19

// if (valor1 > valor2 && valor1 > valor3) {
//     console.log("valor 1 maior que todos");

// } else if (valor2 > valor1 && valor2 > valor3) {
//     console.log("valor 2 maior que todos");

// } else {
//     console.log("valor 3 maior que todos")
// }


// let altura = 1.70
// let genere = "Feminino"

// if(genere === "Masculino") {
//     let pesoIdeal = (72.7 * altura) - 58
//     console.log (`Peso ideal : ${pesoIdeal}`);

// } else if(genere === "Feminino") {
//     let pesoIdeal = (62.1 * altura) - 44.7
//     console.log (`Peso ideal : ${pesoIdeal.toFixed(2)}`);

// } else {
//     console.log("Digite um gênero válido");
// }

// 1. Faça um programa que leia três notas, calcule e mostre a média aritmética entre elas. 
// let valor1 = 10
// let valor2 = 20
// let valor3= 30

// let media = (valor1+valor2+valor3)/3
// if (media>=0) {
//     console.log(`media: ${media}`);
// }

// 2. Faça um programa para converter um certo valor em dólar para reais (ver cotação do
// dia).
// let dolar = 5.21
// let real = 100
// let convertido = real*dolar

// if (convertido>=0) {
//     console.log(`conversão: ${convertido}`);
// }

// 3. Faça um programa para converter um certo valor em reais para dólares (ver cotação do
// dia).
// let dolar = 6.50
// let real = 50
// let convertido = real/dolar

// if (convertido>=0) {
//     console.log(`conversão: ${convertido}`);
// }


// 4. Faça um programa que leia um saldo e imprimir o saldo com reajuste de 1%.
// let saldo = 105
// let reajuste = saldo/100
// let imprimir = saldo+reajuste

// if (imprimir>=0) {
//     console.log(`saldo: ${imprimir}`);
// }

// 5. Faça um programa que leia o valor de um produto e imprimir o valor corrigido com o
// reajuste de 33.33%. 
// let valorProduto = 100
// let reajuste = valorProduto/3
// let valorCorrigido = valorProduto+reajuste

// if (valorCorrigido>=0) {
//     console.log(`valor corrigido: ${valorCorrigido}`);
// }


// 17. Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor da
// compra for menor que 20,00; caso contrário, o lucro será de 30%. Ler o valor do produto e
// imprimir o valor da venda (conforme as taxas do enunciado).

// let valorProduto = 100

// if(valorProduto <= 20) {
//     console.log(`Valor: ${1.30*valorProduto}`);

// } else {
//     console.log(`valor: ${1.45*valorProduto}`);
// }


// 16. Faça um programa que leia dois números e efetua a adição. Se o valor somado for
// maior que 20, este deverá ser apresentado somando-se a ele 8; se o valor somado for
// menor ou igual a 20, este deverá ser apresentado subtraindo-se 5.

// let numero1 = 20
// let numero2 = 10
// let somado = numero1 + numero2

// if(somado > 20) {
//     console.log(`soma: ${somado+8}`);

// } else if (somado <= 20) {
//     console.log(`soma: ${somado-5}`);
// }

// let decisao = 1
// let decisao = "1"

// if(decisao == 1) {
// }

// if (decisao === 1) {
//     console.log("voce abre a porta e encontra um grupo de zumbis famintos, game over");

// } else if (decisao === 2) {
//     console.log("voce pula a janela e cai em um arbusto macio. você sobreviveu por enquanto!");

// } else {
//     console.log("Escolha inválida! O pânico te paralisou e os zumbis te pegaram.");

// }

// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%

//     salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

let salario = 2000

if (salario <= 280) {
    console.log(`\n
        salário antes do reajuste:${salario}\n
        percentual de aumento: 20% \n
        valor de aumento:${salario * 0.2}\n
        novo salário:${salario * 1.2} `);



} else if (salario > 280 && salario < 700) {
    console.log(`\n
        salário antes do reajuste:${salario}\n
        percentual de aumento: 15% \n
        valor de aumento:${salario * 0.15}\n
        novo salário:${salario * 1.15} `);

} else if (salario > 700 && salario < 1500) {
    console.log(`\n
        salário antes do reajuste:${salario}\n
        percentual de aumento: 10% \n
        valor de aumento:${salario * 0.10}\n
        novo salário:${salario * 1.10} `);

} else if (salario >= 1500) {
    console.log(`\n
        salário antes do reajuste:${salario}\n
        percentual de aumento: 5% \n
        valor de aumento:${salario * 0.05}\n
        novo salário:${salario * 1.05} `);
}