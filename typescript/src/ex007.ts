// Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
// sua terça parte.
// Ex:
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

var readline = require('readline-sync')

let numReal : number = Number(readline.question("Digite um numero: "));
let dobro : number = numReal *2;
let tercParte: number = numReal / 3;

console.log(`O dobro de ${numReal} é ${dobro}`);
console.log(`A terça parte de ${numReal} é ${tercParte}`);