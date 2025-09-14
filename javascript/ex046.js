// Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
// 8 + 10 + 12 + 14 + ... + 98 + 100.

let numero = 6;
let soma = 0;
while (numero <= 100) {
        //imprimir tudo na mesma linha
        soma += numero;
        process.stdout.write(numero+ " + ");
        numero += 2;
} 
console.log(`= ${soma}`);


