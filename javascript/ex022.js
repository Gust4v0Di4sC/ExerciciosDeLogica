// Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
// situação em relação ao alistamento militar.
// - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
// alistamento.
// - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
// alistamento.

var readline = require('readline-sync')

const anoNascimento = parseInt(readline.question(`Digite seu ano de nascimento: `))

const idade = new Date().getFullYear() - anoNascimento;

if(idade < 18){
    console.log(`Sua idade é ${idade} faltam ${18 - idade} anos para o seu alistamento!`);
}else{
    console.log(`Já se passaram ${idade-18} anos, desde o seu alistamento`);
}