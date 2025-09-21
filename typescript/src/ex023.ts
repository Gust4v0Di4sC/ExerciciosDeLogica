// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
// para todos, mas especialmente para mulheres. Faça um programa que leia nome,
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
// que:
// - Homens ganham 5% de desconto
// - Mulheres ganham 13% de desconto

var readline = require('readline-sync')

let nomeClient : string = readline.question("Digite o seu nome: ");
let generoClient : number = Number(readline.question("Digite o seu genero:  1- Homem, 2- Mulher "));
let valorTotalCompras : number =  Number(readline.question("Digite o valor total de suas compras: "));

switch (generoClient) {
    case 1:
        {
            let novoValorH = valorTotalCompras - valorTotalCompras * 5/100;
            console.log(`Olá ${nomeClient}, você recebeu 5% de desconto em suas compras, valor total: ${valorTotalCompras} | valor com desconto: ${novoValorH}`);
        }
        break;
    case 2:
        {
            let novoValorM = valorTotalCompras - valorTotalCompras * 13/100;
            console.log(`Olá ${nomeClient}, você recebeu 5% de desconto em suas compras, valor total: ${valorTotalCompras} | valor com desconto: ${novoValorM}`);
        }
        break;

    default:
        console.log(`opção invalida`);
        break;
}
