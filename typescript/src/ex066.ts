// Escreva um programa que leia um número qualquer e mostre a tabuada desse
// número, usando a estrutura “para”.
// Ex: Digite um valor: 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15 ...

var readline = require('readline-sync')

let numInput : number = 0;
numInput = parseInt(readline.question("Digite um numero: "));


for (let i = 1; i <= 10; i++) {  
    console.log(`${numInput} x ${i} = ${numInput*i}`);
}
