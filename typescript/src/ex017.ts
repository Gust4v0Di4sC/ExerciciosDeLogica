// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

var readline = require('readline-sync')

let velocidadeCarro : number = Number(readline.question("Digite a velocidade do carro em KM: "));

if (velocidadeCarro > 80) {
    console.log(`você ultrapassou o limite de velocidade! Multado , valor: R$ ${velocidadeCarro - 80 * 5}`)
}else{
    console.log(`velocidade dentro do limite permitido`)
}
