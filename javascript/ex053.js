// Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
// a) Quantos homens foram cadastrados
// b) Quantas mulheres foram cadastradas
// c) A média de idade do grupo
// d) A média de idade dos homens
// e) Quantas mulheres tem mais de 20 anos

var readline = require('readline-sync');

let numeroInicial = 1;


let quantHomens = 0;
let quantMulheres = 0;
let somaHomens = 0;
let somaMulheres = 0;
let somaIdades = 0;


while (numeroInicial <= 5) {
     let sexoPessoa = parseInt(readline.question("Digite o seu sexo: (1- Homem 2- Mulher): "));
    switch (sexoPessoa) {
        case 1:
            quantHomens++;
        break;

        case 2:
            quantMulheres++;
        break;
        
        default:
            console.log("Digite um valor valido!!");
        break;
    }
   

    let idadePessoa = parseInt(readline.question(`Pessoa numero: ${numeroInicial}, Digite sua idade: `));

    if (sexoPessoa === 1) {
        somaHomens+= idadePessoa;
    }else if(sexoPessoa === 2 && idadePessoa > 20){
        somaMulheres++;
    }
    
    somaIdades+= idadePessoa;
    numeroInicial++;
} 
console.log(`\n A quantidade de Homens cadastrados foi :  ${quantHomens} \n Quantidade de Mulheres Cadastradas foi : ${quantMulheres} \n A media de idade do grupo é: ${somaIdades/5} \n A media de idade dos homens é: ${somaHomens/quantHomens} \n A quantidade de mulheres que tem mais de 20 anos é ${somaMulheres} `);


