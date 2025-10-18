// Faça um programa que leia 7 números inteiros e no final mostre o somatório
// entre eles.

var readline = require('readline-sync')
let counterNums : number = 0;
let inputNums : number = 0;
let totalSumNums : number = 0;



while (counterNums <= 7) {
    inputNums = parseInt(readline.question("Digite um numero: "));
    counterNums += 1;
    totalSumNums += inputNums;
}
console.log(`somatorio: ${totalSumNums}`);