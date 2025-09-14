// A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

var readline = require('readline-sync')

let kmPercorridos : number = Number(readline.question("Digite o total de Km percorridos com o veiculo: "));
let diasAlugados : number = Number(readline.question("Digite quantos dias o veiculo ficou alugado: "));

let totalValorDia : number = diasAlugados * 90;
let totalValorKm : number = kmPercorridos * 0.20;
let totalPagamento: number = totalValorDia + totalValorKm;

console.log(`Você alugoou o carro por ${diasAlugados} dias e percorreu ${kmPercorridos} kilometros, total a pagar: ${totalPagamento}`);