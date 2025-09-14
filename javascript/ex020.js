// Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
// ÍMPAR.

var readline = require('readline-sync')


const numeroInteiro = parseInt(readline.question(`Digite um numero inteiro: `));

if (numeroInteiro % 2 === 0) {
    console.log(`Você digitou ${numeroInteiro}, é Numero PAR`)
}else{
    console.log(`O número digitado, ${numeroInteiro} é IMPAR`)
}