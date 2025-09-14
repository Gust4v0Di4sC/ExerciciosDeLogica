// Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
// ÍMPAR.

var readline = require('readline-sync')

let numeroInteiro : number = Number(readline.question("Digite um numero inteiro: "));

if (numeroInteiro % 2 === 0) {
    console.log(`O numero ${numeroInteiro} é PAR`);
}else{
    console.log(`O numero ${numeroInteiro} é IMPAR`);
}

