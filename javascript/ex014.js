// A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

var readline = require('readline-sync')

const kmPercorridos = parseFloat(readline.question("Digite o numero de km percorridos: "));
const diasAlugados = parseInt(readline.question("Digite o numero de dias que o carro esteve alugado: "));
const precoTotal = (kmPercorridos*0.20) + (diasAlugados*90);

console.log(`Você utilizou o carro por ${diasAlugados} dias, o Valor total a pagar  pelos dias utilizados e KM percorridos é : ${precoTotal}`);