//  Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
// qualquer e mostre uma contagem até esse valor:
// Ex: Digite um valor: 35
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

var readline = require('readline-sync')

let inputUser : number = Number(readline.question("Digite um numero inteiro: "));
 
let counter : number = 0;

while(counter < inputUser){
    process.stdout.write(counter + " ");
    counter++;
}
console.log("Acabou!");