// Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
// 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
// número (chave) e seu programa deve mostrar em que posições essa chave foi
// encontrada. Mostre também quantas vezes a chave foi sorteada

var readline = require('readline-sync');

let lengKey : number = 0;
let arrNumsFift : number[] = new Array(30);
let arrNumPosKey : number[] = new Array(lengKey);


console.log("Digite um valor chave: ");
let inputUserKey : number = parseInt(readline.question("digite: "));

for (let i = 0; i < arrNumsFift.length; i++) {
    let randNum : number = Math.floor(Math.random() * (16 - 1) + 1)
    arrNumsFift[i] = randNum;

    if (arrNumsFift[i] === inputUserKey) {
        arrNumPosKey.push(i);
        lengKey+=1;
    }
}

console.log(`Vetor Gerado: [${arrNumsFift}]`);
console.log(`Posicoes com o valor chave digitado: [${arrNumPosKey}]`);
console.log(`Vezes que o valor chave apareceu: ${lengKey}`);