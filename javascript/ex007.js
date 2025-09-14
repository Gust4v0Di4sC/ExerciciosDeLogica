// Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
// sua terça parte.
// Ex:
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

var readline = require('readline-sync')

const numeroReal = parseFloat(readline.question("Digite um número: "));

console.log(`O dobro de ${numeroReal} é ${numeroReal*2}, A terça parte de ${numeroReal} é ${numeroReal/3}`);
