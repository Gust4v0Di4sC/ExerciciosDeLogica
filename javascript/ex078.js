// Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
// mostre o vetor inteiro na tela e em seguida mostre em que posições foram
// digitados valores que são múltiplos de 10.

let arr = [];

var readline = require('readline-sync');


for (let i = 0; i <=14; i++) {
    arr[i] =parseInt(readline.question("Digite um numero: "));
    
    if (arr[i] % 10 === 0) {
        arr[i] = `(${arr[i]})`
    }
}

console.log(`[${arr}]`);





