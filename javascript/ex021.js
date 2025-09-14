// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
// BISSEXTO.

var readline = require('readline-sync')


const anoDigitado = parseInt(readline.question(`Digite um ano: `));


if (anoDigitado % 4 === 0) {
    console.log(`O ano ${anoDigitado} é BISSEXTO`);
}else{
    console.log(`O ano ${anoDigitado} não é BISSEXTO`);
}