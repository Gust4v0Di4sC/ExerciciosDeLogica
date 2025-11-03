// Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
// No final, mostre quais são os números pares que foram digitados e em que
// posições eles estão armazenados.

var readline = require('readline-sync');

let lengArr : number = 0;
let arrNumsI : number[] = new Array(10);
let arrNumOdd : number[] = new Array(lengArr);
let arrNumPos : number[] = new Array(lengArr);


for (let i = 0; i < arrNumsI.length; i++) {
    arrNumsI[i] = parseInt(readline.question("Digite um numero inteiro: "));

    if (arrNumsI[i] % 2 === 0) {
        arrNumOdd.push(arrNumsI[i]);
        arrNumPos.push(i);
        lengArr+=1;
    }
}
console.log(`Vetor : [${arrNumsI}]`);
console.log(`Numeros Pares : [${arrNumOdd}]`);
console.log(`Posicoes : [${arrNumPos}]`);
