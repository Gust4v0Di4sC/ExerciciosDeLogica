// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
// dela e depois mostre se ela pode ou não votar.

var readline = require('readline-sync')

let anoNascimento : number = Number(readline.question("Digite o seu ano de nascimento: "));

let date : Date = new Date();
const idade : number = date.getFullYear() - anoNascimento;

if (idade > 18 && idade < 70) {
    console.log(`você tem ${idade} anos de idade, vai ter que votar!`);
}else{
    console.log(`você tem ${idade} anos de idade, ainda não precisa votar`);
}
