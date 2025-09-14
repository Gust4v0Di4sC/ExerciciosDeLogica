// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
// segundo grau e mostre o valor de Delta.

var readline = require('readline-sync')

const valueA = parseFloat(readline.question("Digite o valor de A: "));
const valueB = parseFloat(readline.question("Digite o valor de B: "));
const valueC = parseFloat(readline.question("Digite o valor de C: "));

if(Number.isInteger(valueA) && Number.isInteger(valueB) && Number.isInteger(valueC)){
    console.log("O valor de delta é negativo!");
}

const deltaValue = valueB**2 - (4*valueA*valueC)

console.log(`O valor de delta para esses valores é: ${deltaValue.toFixed(1)}`);