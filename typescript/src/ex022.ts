// Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
// situação em relação ao alistamento militar.
// - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
// alistamento.
// - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
// alistamento.

var readline = require('readline-sync')

let anonascimentoInput : number = Number(readline.question("Digite o ano que voce nasceu: "));

var dateActual : Date =  new Date();

let idadeAtual : number = dateActual.getFullYear() - anonascimentoInput;

if (idadeAtual < 18) {
    console.log(` você tem ${idadeAtual} anos de idade , faltam ${18 - idadeAtual} anos para o seu alistamento`);
}else{
    console.log(` você tem ${idadeAtual} anos de idade , ja fazem ${ idadeAtual - 18} anos que se alistou`);
}
