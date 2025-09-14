// 4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
// entre eles.
// Ex:
// Digite um valor: 8
// Digite outro valor: 5
// A soma entre 8 e 5 é igual a 13.
var readline = require('readline-sync')

let numeroOne : number = Number(readline.question("Digite um numero: "));
let numeroTwo : number = Number(readline.question("Digite outro numero: "));
let soma : number = numeroOne + numeroTwo;

console.log(`A soma entre ${numeroOne} e ${numeroTwo} é ${soma}`);