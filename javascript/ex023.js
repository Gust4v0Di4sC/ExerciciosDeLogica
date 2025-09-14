// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
// para todos, mas especialmente para mulheres. Faça um programa que leia nome,
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
// que:
// - Homens ganham 5% de desconto
// - Mulheres ganham 13% de desconto

var readline = require('readline-sync')

const nomeCliente = readline.question(`Digite o seu nome:`);
const sexoCliente = readline.question(`Digite o seu genero: `);
const valorCompras = parseFloat(readline.question(`Digite o valor total de suas compras: `));

const valorDesconto  =  valorCompras -(valorCompras *  5 / 100);
const valorDesconto2  =  valorCompras -(valorCompras *  13 / 100);

if (sexoCliente === "Masculino") {
    console.log(`Atenção cliente ${nomeCliente} suas compras receberam um desconto de 5% `);
    console.log(`\n Valor das compras: R$ ${valorCompras} \n Valor com desconto: R$ ${valorDesconto}`)
}else{
    console.log(`Atenção cliente ${nomeCliente} suas compras receberam um desconto de 13% de desconto`)
    console.log(`\n Valor das compras: R$ ${valorCompras} \n Valor com desconto: R$ ${valorDesconto2}`)
}