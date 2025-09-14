// Crie um programa que leia vários números pelo teclado e mostre no final o

// somatório entre eles.
// Obs: O programa será interrompido quando o número 1111 for digitado

var readline = require('readline-sync');
let somaNumeros = 0;

while (true) {
    let numeroDigitado = parseInt(readline.question("Digite um numero: "));
    if (numeroDigitado === 1111) {
        break;
    }
    somaNumeros+= numeroDigitado;
}

console.log(`A soma dos numeros digitados é igual a : ${somaNumeros}`);

