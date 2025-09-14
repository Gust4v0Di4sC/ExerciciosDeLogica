// Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

var readline = require('readline-sync')

let largura: number = parseFloat(readline.question("Digite a largura da parede: "));
let altura: number = parseFloat(readline.question("Digite a altura da parede: "));
let area : number = largura * altura;

let quantTinta : number = area / 2;

console.log(`Area a ser pintada: ${area} , quantidade necessaria de tinta: ${quantTinta}`);