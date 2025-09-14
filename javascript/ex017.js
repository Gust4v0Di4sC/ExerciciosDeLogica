// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

var readline = require('readline-sync')

const velocidadePercorrida = parseInt(readline.question(`Digite a quantidade de Km/h perrcorrida: `));

if (velocidadePercorrida > 80) {
    console.log(`Você ultrapassou a velocidade permitida nesta via!! Sua velocidade ${velocidadePercorrida}Km/h MULTADO POR EXCESSO DE VELOCIDADE!!`);
    console.log(`Valor Da multa: R$ ${(velocidadePercorrida - 80) * 5} `)
} else {
    console.log("Você esta dentro do limite Permitido, tenha uma Boa viagem!");
}