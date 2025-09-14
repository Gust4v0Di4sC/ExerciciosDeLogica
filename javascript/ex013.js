// Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
// seu novo salário, com 15% de aumento.

var readline = require('readline-sync')

const salarioAtual = parseFloat(readline.question("Digite o seu salario atual: "));
const novoSalario = salarioAtual + (salarioAtual*15/100);

console.log(`O seu salario atual é: R$ ${salarioAtual} seu novo salario com aumento é: R$ ${novoSalario}`);