// Faça um programa usando a estrutura “para” que leia um número inteiro
// positivo e mostre na tela uma contagem de 0 até o valor digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

var readline = require('readline-sync')

let numsInput : number = 0;
numsInput = parseInt(readline.question("Digite um valor: "))

for (let i = 0; i <= numsInput; i++) {
    process.stdout.write(i + ", ");
}
console.log(" FIM!");