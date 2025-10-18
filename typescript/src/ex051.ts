// Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
// qual foi o maior e qual foi o menor preço digitados.

var readline = require('readline-sync')

let inputPrice : number = 0;
let countPrice : number = 0;
let majorPrice : number = 0;
let minorPrice : number = 999;


while (countPrice < 8) {
    inputPrice = parseFloat(readline.question(`Digite o preço do produto ${inputPrice}: `));

    if (inputPrice > majorPrice) {
        majorPrice = inputPrice;
    }

    if (inputPrice < minorPrice) {
        minorPrice = inputPrice;
    }

    countPrice += 1;
}
console.log(` Acabou!`);