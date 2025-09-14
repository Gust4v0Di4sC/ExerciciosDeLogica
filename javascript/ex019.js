// Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
// não um bom aproveitamento (se ficou acima da média 7.0).

var readline = require('readline-sync')

const nomeAluno = readline.question(`Digite o seu nome: `);
const primeiraNota = parseFloat(readline.question(`Digite sua primeira nota: `))
const segundaNota = parseFloat(readline.question(`Digite sua segunda nota: `))

const media = primeiraNota + segundaNota /2;

if (media > 7.0) {
    console.log(`Parabéns ${nomeAluno} , Você teve otimo aproveitamento, sua media foi : ${media}`)
}else{
    console.log(`Que pena ${nomeAluno}, sua Nota está Abaixo da media, você teve um pessimo aproveitamento!!`)
}