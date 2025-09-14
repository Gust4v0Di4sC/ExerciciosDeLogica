// Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
// sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

var readline = require('readline-sync')

let numInt : number = Number(readline.question("Digite um numero inteiro: "));
let antecessor: number = numInt-1;
let sucessor: number = numInt+1;

console.log(`O antecessor de ${numInt} é ${antecessor}`);
console.log(`O sucessor de ${numInt} é ${sucessor}`);