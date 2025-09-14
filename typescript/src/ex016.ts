// [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
// quantos dias de vida um fumante perderá e exiba o total em dias.

var readline = require('readline-sync')

let quantCigarros : number = Number(readline.question("Digite a quantidade de cigarros fumados por dia: "));
let anosFumando : number = Number(readline.question("Digite há quantos anos fuma: "));

let minutosVida : number = quantCigarros * 10;
let totalDias : number = anosFumando * 365;

let totalDiasdeVida: number = minutosVida * totalDias / 1440;

console.log(`você já perdeu o total de ${totalDiasdeVida} dias de vida`);