// [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
// PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
// a soma entre todos os valores da sequência.

var readline = require('readline-sync');

let firstTerm : number = 0;
let reasonTerm : number = 0;
let generalTerm : number = 0;
let sumTerms : number = 0;

firstTerm = parseInt(readline.question("Digite o primeiro termo: "));
reasonTerm =parseInt(readline.question("Digite a razao da P.A: "));

for (let i = 1; i <= 10; i++) {
    generalTerm = firstTerm + (i - 1)*reasonTerm;
    sumTerms = (firstTerm + generalTerm) * i / 2
    process.stdout.write(generalTerm + " ");
}
console.log(`Soma do termos: ${sumTerms}`);
