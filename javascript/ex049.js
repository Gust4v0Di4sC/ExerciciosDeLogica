// Crie um programa que leia 6 números inteiros e no final mostre quantos deles
// são pares e quantos são ímpares.

var readline = require('readline-sync');


let numeroInicial = 1;

let pares = 0;
let impares = 0;


while (numeroInicial <= 6) {
        //imprimir tudo na mesma linha
        let numeroUsuario = parseInt(readline.question("Digite um numero inteiro: "));
        if (numeroUsuario % 2 ==0) {
          pares++;
        }else{
          impares++;
        }

        numeroInicial ++;
} 
console.log(`\n Existem ${pares} números pares \n e ${impares} números impares no intervalo digitado`);


