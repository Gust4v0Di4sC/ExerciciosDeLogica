// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
// dela e depois mostre se ela pode ou não votar.

var readline = require('readline-sync')

const date = new Date();
const anoNascimento = parseInt(readline.question(`Digite o Seu ano de nascimento: `));

const idade = date.getFullYear() - anoNascimento;

if (idade > 16) {
    console.log(`PARABÉNS você tem ${idade} anos de idade , já está apto para votar em eleições`)
}else{
    console.log("Você não precisa votar ainda, sua idade está abaixo da idade permitida")
}