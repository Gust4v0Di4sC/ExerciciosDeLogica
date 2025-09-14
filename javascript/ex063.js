// Crie um programa usando a estrutura “faça enquanto” que leia vários números.
// A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
// tela:
// a) O somatório entre todos os valores
// b) Qual foi o menor valor digitado
// c) A média entre todos os valores
// d) Quantos valores são pares

let totNumeros = 0;
let valoresDigitados = 0;
let valoresPares = 0;
let menorValor = 999;
let resposta = true;

var readline = require('readline-sync');

do {
    
    let numero = parseInt(readline.question("Digite um numero: "));
    console.log("Você deseja continuar? ");
    let respostaUsuario = parseInt(readline.question("Digite 1 para sim ou 2 para não: "));

    if (respostaUsuario === 1) {
        resposta = true;
    }else{
        resposta = false;
    }

    if (numero < menorValor) {
        menorValor = numero;
    }

    if (numero % 2 === 0) {
        valoresPares++;
    }

    totNumeros+= numero;
    valoresDigitados ++;
} while(resposta);
console.log(`\n a) O somatório entre todos os valores: ${totNumeros}
 b) Qual foi o menor valor digitado: ${menorValor}
 c) A média entre todos os valores: ${totNumeros/valoresDigitados}
 d) Quantos valores são pares: ${valoresPares}`);
