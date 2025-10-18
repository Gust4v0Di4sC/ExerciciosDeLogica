// Escreva um programa para aprovar ou não o empréstimo bancário para a compra
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
// ela não pode exceder 30% do salário ou então o empréstimo será negado.

var readline = require('readline-sync')

let houseValue : number = parseInt(readline.question("Digite o valor da casa que deseja comprar: "));
let salaryBuyer : number = parseInt(readline.question("Digite o seu salario: "));
let quantYears : number = parseInt(readline.question("Digite em quantos anos deseja pagar a casa: "));

let quantMonths : number = quantYears * 12;
let valueTax : number = houseValue * quantMonths;

let thirdPercent : number = salaryBuyer * 30 / 100;

if (valueTax > thirdPercent) {
    console.log("A prestação excede 30% do seu salario");
    console.log("seu salario: "+ salaryBuyer);
    console.log("Emprestimo Negado");
}else{
    console.log("seu salario: "+ salaryBuyer);
    console.log("Emprestimo Aprovado");
}

