// Faça um programa usando a estrutura “faça enquanto” que leia a idade de
// várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
// na tela:
// a) Quantas idades foram digitadas
// b) Qual é a média entre as idades digitadas
// c) Quantas pessoas tem 21 anos ou mais.

let totIdades = 0;
let idadesDigitadas = 0;
let vinteumMais = 0;
let resposta = true;

var readline = require('readline-sync');

do {
    
    let idade = parseInt(readline.question("Digite sua idade: "));
    console.log("Você deseja continuar? ");
    let respostaUsuario = parseInt(readline.question("Digite 1 para sim ou 2 para não: "));

    if (respostaUsuario === 1) {
        resposta = true;
    }else{
        resposta = false;
    }

    if (idade >= 21) {
        vinteumMais++;
    }

    totIdades+= idade;
    idadesDigitadas ++;
} while(resposta);
console.log(`a) Quantas idades foram digitadas : ${idadesDigitadas}
 b) Qual é a média entre as idades digitadas : ${totIdades/idadesDigitadas}
 c) Quantas pessoas tem 21 anos ou mais: ${vinteumMais}`);
