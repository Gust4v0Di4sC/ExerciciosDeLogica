// Crie um programa que leia vários números pelo teclado e mostre no final o
// somatório entre eles.
// Obs: O programa será interrompido quando o número 1111 for digitado

var readline = require('readline-sync')

let inputNumber : number = 0;
let totNumbInput : number = 0;



while (true) {
    inputNumber = parseFloat(readline.question(`Digite um numero: `));
    totNumbInput += inputNumber;

    if (inputNumber === 1111) {
        break;
    }
}

console.log(`Soma dos numeros digitados: ${totNumbInput}`);