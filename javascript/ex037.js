// Uma empresa precisa reajustar o salário dos seus funcionários, dando um
// aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
// o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
// No final, mostre o seu novo salário, baseado na tabela a seguir:
// - Mulheres
// - menos de 15 anos de empresa: +5%
// - de 15 até 20 anos de empresa: +12%
// - mais de 20 anos de empresa: +23%
// - Homens
// - menos de 20 anos de empresa: +3%
// - de 20 até 30 anos de empresa: +13%
// - mais de 30 anos de empresa: +25%

var readline = require('readline-sync');

const salarioAtual = parseFloat(readline.question(`Digite o seu salario atual: `));

const generoFuncionario = parseInt(readline.question("Digite o seu Genero: 1- muie 2-homi 3-o que eu quiser: "));

const anosTrabalhados = parseInt(readline.question(`Digite a quantos anos você trabalha na empresa: `));

if (generoFuncionario === 1) {
    console.log("Genero Feminino");
    if (anosTrabalhados < 15) {
        console.log(`Você teve um aumento de 5% no seu salario: ${salarioAtual+ (salarioAtual * 5 / 100)}`);
    } else if(anosTrabalhados >= 15 && anosTrabalhados < 20){
        console.log(`Você teve um aumento de 12% no seu salario: ${salarioAtual+ (salarioAtual * 12 / 100)}`);
    }else{
        console.log(`Você teve um aumento de 23% no seu salario: ${salarioAtual+ (salarioAtual * 20 / 100)}`);
    }
}else if( generoFuncionario === 2){
    console.log("Genero Masculino");
    if (anosTrabalhados < 20) {
        console.log(`Você teve um aumento de 3% no seu salario: ${salarioAtual+ (salarioAtual * 3 / 100)}`);
    } else if(anosTrabalhados >= 20 && anosTrabalhados < 30){
        console.log(`Você teve um aumento de 13% no seu salario: ${salarioAtual+ (salarioAtual * 13 / 100)}`);
    }else{
        console.log(`Você teve um aumento de 25% no seu salario: ${salarioAtual+ (salarioAtual * 25 / 100)}`);
    }
}else{
    console.log("Genero: O que eu quiser");
    if (anosTrabalhados < 35) {
        console.log(`Você teve um aumento de 25% no seu salario: ${salarioAtual+ (salarioAtual * 25 / 100)}`);
    } else if(anosTrabalhados >= 35 && anosTrabalhados < 40){
        console.log(`Você teve um aumento de 15% no seu salario: ${salarioAtual+ (salarioAtual * 15 / 100)}`);
    }else{
        console.log(`Você teve um aumento de 5% no seu salario: ${salarioAtual+ (salarioAtual * 5 / 100)}`);
    }
}