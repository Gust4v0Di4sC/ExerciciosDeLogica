// Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

var readline = require('readline-sync')

const largura = parseFloat(readline.question("Digite a largura da parede: "))
const altura = parseFloat(readline.question("Digite a altura da parede: "))

const area = largura * altura
const qtdLitros = area /2

console.log(`A quantidade de litros para pintar ${area}M  é ${qtdLitros}`);