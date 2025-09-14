// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
// final, mostre uma listagem com todos os nomes informados, na ordem inversa
// daquela em que eles foram informados.

let arr = [];
let arrInvertido = [];
var readline = require('readline-sync');


for (let i = 0; i <=6; i++) {
    arr[i] = readline.question("Digite um nome: ");
    
}

//o slice é utilizado para criar uma copia do array original sem altera-lo
let arraySendoInvertido = arrInvertido = arr.slice(0).reverse();

console.log(`[${arr}]`);
console.log(`[${arraySendoInvertido}]`);




