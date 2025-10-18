// Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
// incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

var readline = require('readline-sync')

let startValue : number = parseInt(readline.question("Digite o valor inicial: "));
let finalValue : number = parseInt(readline.question("Digite o valor final: "));
let incrementValue : number = parseInt(readline.question("Digite o valor do incremento: "));


while (startValue <= finalValue) {
    process.stdout.write(startValue + " ");
    startValue += incrementValue;
}
console.log(` Acabou!`);