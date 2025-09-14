// Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
// na tela a sua média na disciplina.
var readline = require('readline-sync')

let nota1 = parseFloat(readline.question("Digite a nota 1: "));
let nota2 = parseFloat(readline.question("Digite a nota 2: "));

let media = nota1 + nota2 /2;

console.log(`A média entre as notas ${nota1} e ${nota2} é: ${media.toFixed()}`);

