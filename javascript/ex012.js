// Crie um programa que leia o preço de um produto, calcule e mostre o seu
// PREÇO PROMOCIONAL, com 5% de desconto.

var readline = require('readline-sync')

const precoProduto = parseFloat(readline.question("Digite o preço do produto: "));
const precoPromocional = precoProduto - (precoProduto*5/100)

console.log(`O Preço promocional do produto é: ${precoPromocional}`);