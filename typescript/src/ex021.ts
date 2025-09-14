// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
// BISSEXTO.

var readline = require('readline-sync')

let anoInput : number = Number(readline.question("Digite um ano: "));
let numeroConvertido : string = anoInput.toString();
let ultimosDigitos : string = numeroConvertido.slice(-2);
let ultimosDigitosNum : number = Number(ultimosDigitos);

if (anoInput % 4 === 0 && ultimosDigitosNum != 0o0) {
    console.log(`O ano ${anoInput} é bissexto`);
}else if ( anoInput % 400 === 0 && ultimosDigitosNum === 0o0){
    console.log(`O ano ${anoInput} é bissexto`);
}else{
    console.log(`O ano ${anoInput} não é bissexto`);
}
