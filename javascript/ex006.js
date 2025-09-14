// 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
// sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

var readline = require('readline-sync')

const numero = parseInt(readline.question("Digite um numero inteiro: "));

console.log(`O antecessor de ${numero} é ${numero-1}`);
console.log(`O sucessor de ${numero} é ${numero+1}`);
