// Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
// seu novo salário, com 15% de aumento.

var readline = require('readline-sync')

let salaryFunc : number = Number(readline.question("Digite o salario do funcionario: "));


let newSalary: number =  salaryFunc + salaryFunc * 5/100;

console.log(` Salario atual: R$ ${salaryFunc} | Novo salario com aumento de 5% : R$ ${newSalary}`);