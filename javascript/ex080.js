// Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
// 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
// número (chave) e seu programa deve mostrar em que posições essa chave foi
// encontrada. Mostre também quantas vezes a chave foi sorteada.

let arr = [];
let chaveSorteada = 0;
var readline = require('readline-sync');


for (let i = 0; i <=29; i++) {
    arr[i] =parseInt(Math.floor(Math.random() * (16 - 1) + 1));
}

let chave = parseInt(readline.question("Digite o numero chave: "));
for (let x = 0; x < arr.length; x++) {
    if (arr[x] === chave) {
        arr[x] = `(${arr[x]})`
        chaveSorteada ++;
    }
}

console.log(`Os numeros sorteados estão nas seguintes posiçoes: [${arr}]`);
console.log(`A chave foi sorteada: ${chaveSorteada} vezes`);





