// Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
var readline = require('readline-sync');

// qual foi o maior e qual foi o menor preço digitados.

let numeroInicial = 1;


let maiorPreco = 0;
let menorPreco = 9999;


while (numeroInicial <= 8) {
    let produto = readline.question("Digite o nome do produto: ");
    let precoProduto = parseFloat(readline.question("Digite preço do produto: "));
    
    if (precoProduto > maiorPreco) {
        maiorPreco = precoProduto;
    }else if(precoProduto < menorPreco){
        menorPreco = precoProduto;
    }
    numeroInicial++;
} 
console.log(`\n O maior preço digitado foi ${maiorPreco} e o menor preço foi \n , ${menorPreco} `);


