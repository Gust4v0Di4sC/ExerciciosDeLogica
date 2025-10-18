// Crie um programa que leia 6 números inteiros e no final mostre quantos deles
// são pares e quantos são ímpares.

var readline = require('readline-sync')
let counterNumx : number = 0;
let inputNumx : number = 0;
let totalOdd : number = 0;
let totalEven : number = 0;



while (counterNumx < 6) {
    inputNumx = parseInt(readline.question("Digite um numero: "));
    
    if (inputNumx % 2 === 0) {
        totalEven+=1;
    }else{
        totalOdd+=1;
    }
    counterNumx += 1;
}
console.log(`Pares: ${totalEven}`);
console.log(`Impares: ${totalOdd}`);