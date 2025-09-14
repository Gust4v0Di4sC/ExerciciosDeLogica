// Faça um programa que leia 7 números inteiros e no final mostre o somatório
// entre eles.

var readline = require('readline-sync');


let numeroInicial = 1;
let soma = 0;
while (numeroInicial <= 7) {
        //imprimir tudo na mesma linha
        let numeroUsuario = parseInt(readline.question("Digite um numero inteiro: "));
        soma += numeroUsuario;
        numeroInicial ++;
} 
console.log(`= ${soma}`);


