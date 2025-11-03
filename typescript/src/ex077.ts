// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
// final, mostre uma listagem com todos os nomes informados, na ordem inversa
// daquela em que eles foram informados.

let arrPerson : string[] = new Array(8);
let arrPersonx : string[] = new Array(8);


var readline = require('readline-sync');

for (let i = 0; i < arrPerson.length; i++) {
    arrPerson[i] = readline.question("Digite um nome: ");
}

arrPersonx = arrPerson.slice(0).reverse();

console.log(`vetor invertido: [${arrPersonx}]`);