// Escreva um programa para aprovar ou não o empréstimo bancário para a compra
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
// ela não pode exceder 30% do salário ou então o empréstimo será negado.

var readline = require('readline-sync');

const valorCasa = parseFloat(readline.question("Digite o valor total da casa a ser financiada: "));
const salarioComprador = parseFloat(readline.question("Digite o seu salario total: "));
const anosPagamento = parseInt(readline.question("Digite em quantos anos você pretende pagar a casa: "));

const prestacaoCasa = valorCasa / (anosPagamento * 12);
const porcentagemSalarioMaxima = (salarioComprador * 30) / 100;

if (prestacaoCasa <= porcentagemSalarioMaxima) {
    console.log(`Seu emprestimo foi aprovado, seu salario está dentro da faixa limite`);
}else{
    console.log(`Seu emprestimo foi negado, a prestação excede 30% do salario`);
}