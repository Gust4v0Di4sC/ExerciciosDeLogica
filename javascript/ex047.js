// Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
// 450 + 400 + 350 + 300 + ... + 50 + 0
let numero = 500;
let soma = 0;
while (numero >= 0) {
        //imprimir tudo na mesma linha
        soma += numero;
        process.stdout.write(numero+ " + ");
        numero -= 50;
} 
console.log(`= ${soma}`);


