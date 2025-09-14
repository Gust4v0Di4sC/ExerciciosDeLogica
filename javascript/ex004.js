// Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
// entre eles.

var readline = require('readline-sync')

let numero = Number(readline.question("Digite um numero: "));
let numero2 = Number(readline.question("Digite o outro numero: "));

console.log(`A soma entre os numeros ${numero} e ${numero2} é: ${numero+numero2}`);

