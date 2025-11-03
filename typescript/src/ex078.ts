// Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
// mostre o vetor inteiro na tela e em seguida mostre em que posições foram
// digitados valores que são múltiplos de 10.

var readline = require('readline-sync');

let arrNums : number[] = new Array(15);
let multiple : number = 0;
let arrPosTen : number[] = new Array(multiple);

for (let i = 0; i < arrNums.length; i++) {
    arrNums[i] = parseInt(readline.question("Digite um numero: "));

    if (arrNums[i] % 10 === 0) {
        arrPosTen.push(i);
        multiple += 1;
    }
}

console.log(`Vetor: [${arrNums}]`);
console.log(`Posicoes com os multiplos de 10: [${arrPosTen}]`);
