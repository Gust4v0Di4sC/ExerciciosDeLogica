// Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
// a) Qual é a média de idade do grupo
// b) Quantas pessoas tem mais de 18 anos
// c) Quantas pessoas tem menos de 5 anos
// d) Qual foi a maior idade lida

var readline = require('readline-sync')

let inputAge : number = 0;
let totalAge : number = 0;
let countPersons : number = 0;
let avgAge : number = 0;
let majorAgeEighteen : number = 0;
let majorAgeinput: number = 0;
let minorAgeFive : number = 999;



while (countPersons < 10) {
    inputAge = parseFloat(readline.question(`Digite a idade da pessoa ${inputAge}: `));
    totalAge += inputAge;

    if (inputAge > 18) {
        majorAgeEighteen += 1;
    }

    if (inputAge < 5) {
        minorAgeFive += 1;
    }

    if (inputAge > majorAgeinput) {
        majorAgeinput = inputAge;
    }

    countPersons += 1;
    avgAge = totalAge / countPersons;
}

console.log(`media idade do grupo: ${avgAge}`);
console.log(`pessoas que tem mais de 18: ${majorAgeEighteen}`);
console.log(`pessoas com menos de 5: ${minorAgeFive}`);
console.log(`maior idade lida: ${majorAgeinput}`);