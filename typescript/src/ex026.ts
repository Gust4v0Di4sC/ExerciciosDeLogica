// Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
// na tela uma das mensagens abaixo:
// - O primeiro valor é o maior
// - O segundo valor é o maior
// - Não existe valor maior, os dois são iguais

var readline = require('readline-sync')

let primeiroNumero : number = Number(readline.question("Digite um numero inteiro: "));
let segundoNumero : number = Number(readline.question("Digite outro numero inteiro: "));

if (primeiroNumero > segundoNumero) {
    console.log(`O numero ${primeiroNumero} é maior`);
}else if ( segundoNumero > primeiroNumero){
    console.log(`O numero ${segundoNumero} é maior`)
}else{
    console.log("não existe valor maior os dois são iguais")
}
