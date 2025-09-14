// Crie um programa que leia o preço de um produto, calcule e mostre o seu
// PREÇO PROMOCIONAL, com 5% de desconto.

var readline = require('readline-sync')

let productPrice : number = Number(readline.question("Digite o valor do produto: "));

let promotionPrice: number = productPrice - productPrice * 5 /100;

console.log(`O valor do produto com 5% de desconto é ${promotionPrice}`);