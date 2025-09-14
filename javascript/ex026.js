// Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
// na tela uma das mensagens abaixo:
// - O primeiro valor é o maior
// - O segundo valor é o maior
// - Não existe valor maior, os dois são iguais

var readline = require('readline-sync')

const primeiroNumero = parseInt(readline.question(`Digite um número: `));
const segundoNumero = parseInt(readline.question(`Digite outro número: `));

if (primeiroNumero > segundoNumero) {
    console.log(`O Número ${primeiroNumero} é maior`)
}else if ( segundoNumero > primeiroNumero){
    console.log(`O Número ${segundoNumero} é maior`)
}else{
    console.log("Não existe valor maior os dois são iguais!!")
}