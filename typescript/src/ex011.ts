// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
// segundo grau e mostre o valor de Delta

var readline = require('readline-sync')

let valorA : number = Number(readline.question("Digite o valor de A: "));
let valorB : number = Number(readline.question("Digite o valor de B: "));
let valorC : number = Number(readline.question("Digite o valor de C: "));

let delta = Math.pow(valorB, 2) - 4 * valorA * valorC;

console.log(`com os valores A: ${valorA}, B: ${valorB} e C: ${valorC} o valor de Delta é ${delta}`);