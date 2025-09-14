// Desenvolva um programa que leia o nome de um funcionário, seu salário,
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
// acordo com a tabela a seguir:
// - Até 3 anos de empresa: aumento de 3%
// - entre 3 e 10 anos: aumento de 12.5%
// - 10 anos ou mais: aumento de 20%


var readline = require('readline-sync')

const nome = readline.question(`Digite o seu nome: `);
const salario = parseFloat(readline.question(`Digite o seu salário: `));
const anosEmpresa =parseInt(readline.question(`Digite a quantos anos você trabalha na empresa: `));

if (anosEmpresa <= 3) {
    console.log(` Olá ${nome}, Você terá um aumento de 3% em seu salário, \n novo salário: ${(salario * 3 / 100) + salario}`);
} else if(anosEmpresa > 3 && anosEmpresa <= 10) {
    console.log(` Olá ${nome}, Você terá um aumento de 12.5% em seu salário, \n novo salário: ${(salario * 12.5 / 100) + salario}`);
}else{
    console.log(` Olá ${nome}, Você terá um aumento de 20% em seu salário, \n novo salário: ${(salario * 20 / 100) + salario}`);
}