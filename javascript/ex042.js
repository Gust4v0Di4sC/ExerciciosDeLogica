// Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
// qualquer e mostre uma contagem até esse valor:
// Ex: Digite um valor: 35
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!


var readline = require('readline-sync');

const numeroUsuario = parseInt(readline.question("Digite um numero inteiro: "));

let numero = 1;
while (numero <= numeroUsuario) {
    //imprimir tudo na mesma linha
    process.stdout.write(numero + " ");
    numero ++;
}
console.log("Acabou!");