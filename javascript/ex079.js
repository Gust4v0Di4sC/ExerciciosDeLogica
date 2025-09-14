// Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
// No final, mostre quais são os números pares que foram digitados e em que
// posições eles estão armazenados.

let arr = [];
let pares = [];
var readline = require('readline-sync');


for (let i = 0; i <=9; i++) {
    arr[i] =parseInt(readline.question("Digite um numero: "));
    
    if (arr[i] % 2 === 0) {
        arr[i] = `(${arr[i]})`
        pares[i] = arr[i]
    }
}

console.log(`Os numeros pares estão nas seguintes posiçoes: [${arr}]`);
console.log(`Os numeros pares digitados foram: [${pares}]`);





