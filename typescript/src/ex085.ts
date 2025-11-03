// Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
// guarde esses dados em três vetores. No final, mostre uma listagem contendo
// apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

var readline = require('readline-sync');


let arrNameFunc : string[] = new Array(5);
let arrAgeFunc : number[] = new Array(5);
let arrGenderFunc : number[] = new Array(5);
let arrSalaryFunc : number[] = new Array(5);

for (let i = 0; i < arrNameFunc.length; i++) {
    arrNameFunc[i] = readline.question(`Digite o nome do funcionario ${i}: `);
    arrAgeFunc[i] = parseInt(readline.question(`Digite a idade do funcionario ${arrNameFunc[i]}: `));
    arrSalaryFunc[i] = parseFloat(readline.question(`Digite o salario do funcionario ${arrNameFunc[i]}: `));
    arrGenderFunc[i] = parseInt(readline.question(`Digite o genero do funcionario ${arrNameFunc[i]}:  1-Mulher 2-Homem `));

    if (arrGenderFunc[i] != 1 && arrGenderFunc[i] != 2) {
        console.log("opção invalida");
        break;
    }
}

console.log(`\n Lista das funcionarias que recebem mais de R$ 5 mil`);
for (let x = 0; x < arrSalaryFunc.length; x++) {
    if (arrGenderFunc[x] === 1 && arrSalaryFunc[x] > 5000) {
        console.log(`Nome: ${arrNameFunc[x]}`);
        console.log(`Idade: ${arrAgeFunc[x]}`);
        console.log(`Salario: ${arrSalaryFunc[x]}`);
    }
    
}
console.log("Fim da Lista");
