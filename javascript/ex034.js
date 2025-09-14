// O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
// peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
// indivíduo dentro de certas faixas.
// - abaixo de 18.5: Abaixo do peso
// - entre 18.5 e 25: Peso ideal
// - entre 25 e 30: Sobrepeso
// - entre 30 e 40: Obesidade
// - acima de 40: Obesidade mórbida
// Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
// da altura)

var readline = require('readline-sync');

const nomePessoa = readline.question("Digite o seu nome: ");
const alturaPessoa = parseFloat(readline.question(`Digite sua altura: `));
const pesoPessoa = parseFloat(readline.question(`Digite seu peso: `));

const imc = pesoPessoa / alturaPessoa **2;

if (imc < 18.5) {
    console.log(`Olá ${nomePessoa}, você está abaixo do peso!!`);
}else if(imc >= 18.5 && imc < 25){
    console.log(`Olá ${nomePessoa}, você está com o peso ideal`);
}else if(imc >= 25 && imc < 30){
    console.log(`Olá ${nomePessoa}, você está no sobrepeso`);
}else if(imc >= 30 && imc < 40){
    console.log(`Olá ${nomePessoa}, você está com obesidade`);
}else{
    console.log(`Olá ${nomePessoa}, você está com obesidade morbida!! procure ajuda medica imediatamente!!!`);
}