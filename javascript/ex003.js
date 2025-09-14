var readline = require('readline-sync')

let nome = readline.question("Digite seu nome? ");
let salario = Number(readline.question("Digite sue salario: "))

console.log("O funcionário "+nome+ " tem um salário de R$"+salario+ " em Junho.");