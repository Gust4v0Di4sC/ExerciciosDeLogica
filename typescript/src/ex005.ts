// Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
// na tela a sua média na disciplina.
// Ex:
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5

var readline = require('readline-sync')

let notaOne: number = Number(readline.question("Digite sua nota 1: "));
let notaTwo: number = Number(readline.question("Digite sua nota 2: "));
let media: number = notaOne + notaTwo /2;

console.log(`A média entre ${notaOne} e ${notaTwo} é ${media}`)