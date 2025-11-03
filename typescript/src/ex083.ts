//  [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
// aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
// números gerados e depois coloque o vetor em ordem crescente, mostrando no final
// os valores ordenados.

var readline = require('readline-sync');

let arrRandNum : number[] = new Array(20);
let arrSortedNum : number[] = new Array(20);




for (let i = 0; i < arrRandNum.length; i++) {
     let randNum : number = Math.floor(Math.random() * (100 - 1) + 1);
     arrRandNum[i] = randNum;
}

arrSortedNum = arrRandNum.slice(0).sort((a,b)=> a-b);

console.log(`Vetor gerado: [${arrRandNum}]`);
console.log(`Vetor gerado ordenado: [${arrSortedNum}]`);




