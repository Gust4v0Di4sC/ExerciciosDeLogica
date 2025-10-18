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

var readline = require('readline-sync')

let salaryActual : number = parseFloat(readline.question("Digite o salario do funcionario: "));
let genderFunct : number = parseInt(readline.question("Digite o seu genero: 1-Masculino 2-Feminino"));
let quantYearsFunct : number = parseInt(readline.question("Digite a quantidade de anos trabalhados: "));

switch (genderFunct) {
    case 1:
        if (quantYearsFunct < 20) {
            let newSalaryFunc : number = salaryActual + (salaryActual * 3 /100);
            console.log(`Salario atual: ${salaryActual}`);
            console.log(`Novo salario baseado no tempo de casa: ${newSalaryFunc}`);
        }else if ( quantYearsFunct >= 20 && quantYearsFunct < 30){
            let newSalaryFunc : number = salaryActual + (salaryActual * 13 /100);
            console.log(`Salario atual: ${salaryActual}`);
            console.log(`Novo salario baseado no tempo de casa: ${newSalaryFunc}`);
        }else{
            let newSalaryFunc : number = salaryActual + (salaryActual * 25 /100);
            console.log(`Salario atual: ${salaryActual}`);
            console.log(`Novo salario baseado no tempo de casa: ${newSalaryFunc}`);
        }
        break;

    case 2:
        if (quantYearsFunct < 15) {
            let newSalaryFunc : number = salaryActual + (salaryActual * 5 /100);
            console.log(`Salario atual: ${salaryActual}`);
            console.log(`Novo salario baseado no tempo de casa: ${newSalaryFunc}`);
        }else if ( quantYearsFunct >= 15 && quantYearsFunct < 20){
            let newSalaryFunc : number = salaryActual + (salaryActual * 12 /100);
            console.log(`Salario atual: ${salaryActual}`);
            console.log(`Novo salario baseado no tempo de casa: ${newSalaryFunc}`);
        }else{
            let newSalaryFunc : number = salaryActual + (salaryActual * 23 /100);
            console.log(`Salario atual: ${salaryActual}`);
            console.log(`Novo salario baseado no tempo de casa: ${newSalaryFunc}`);
        }
        break;
    default:
        console.log("Opção invalida!!");
        break;
}



