// Crie um programa que leia o nome e o salário de um funcionário, mostrando no
// final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

var readline = require('readline-sync')

console.log("Digite o seu nome: \n");

let nombre : string = readline.question("Qual e o seu nome? ");
let salary : number = readline.question("Qual e o seu salario: ");

console.log(`Nome do funcionário: ${nombre} \n Salario: ${salary}`);

