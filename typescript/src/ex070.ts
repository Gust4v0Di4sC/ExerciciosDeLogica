//  [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
// de Fibonacci:
// 1 1 2 3 5 8 13 21...

// Fn = F(n-1) + F(n-2)

var readline = require('readline-sync');

let firstTermF : number = 1;
let secondTermF : number = 1;
let generalTermF : number = 0;

process.stdout.write(`${firstTermF} ${secondTermF} `);

for (let i = 3; i <= 10; i++) {
    generalTermF = secondTermF + firstTermF ;
    firstTermF = secondTermF;
    secondTermF =generalTermF;
    process.stdout.write(generalTermF + " ");
}


