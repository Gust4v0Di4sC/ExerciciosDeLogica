// Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
// por hora trabalhada.
var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

var readline = require('readline-sync')

const data = new Date();
let mes = meses[data.getMonth()];


const diasTrabalhados = parseInt(readline.question(`Digite o numero de dias trabalhados no mes de ${mes}: `));

const salarioAtual = (diasTrabalhados*8) * 25;

console.log(`Você trabalhou por ${diasTrabalhados} dias no mês de ${mes} e recebeu como salario o montante: R$ ${parseFloat(salarioAtual)}`);