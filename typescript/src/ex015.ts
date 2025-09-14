// Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
// por hora trabalhada.

var readline = require('readline-sync')

let daysWork : number = Number(readline.question("Digite o numero de dias trabalhados: "));

let hoursWork : number = daysWork * 8;
let salaryMonth : number = hoursWork * 25;

console.log(`você trabalhou ${hoursWork} horas esse mês, seu salario será R$ ${salaryMonth}`);