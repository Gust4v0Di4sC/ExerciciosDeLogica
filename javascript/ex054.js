// Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
// no final:
// a) Qual foi a média de altura do grupo
// b) Quantas pessoas pesam mais de 90Kg
// c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
// d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.

var readline = require('readline-sync');

let numeroInicial = 1;


let maisDeNoventa = 0;
let menosDeCinquenta = 0;
let maisDeCem = 0;
let somaAlturas = 0;


while (numeroInicial <= 7) {
     let pesoPessoa = parseFloat(readline.question("Digite o seu peso em Kg: "));
    let alturaPessoa = parseFloat(readline.question(`Seu peso: ${pesoPessoa}, Digite a sua altura: `)); 
    if(pesoPessoa > 90){
        maisDeNoventa++;
    }

    if (pesoPessoa > 100 && alturaPessoa > 1.90) {
        maisDeCem++;
    }else if(pesoPessoa < 50 && alturaPessoa < 1.60){
        menosDeCinquenta++;
    }
    
    somaAlturas+= alturaPessoa;
    numeroInicial++;
} 
console.log(`\n A media de altura do grupo foi :  ${Math.floor(somaAlturas/7)} \n A quantidade de pessoas que pesam mais de 90Kg: ${maisDeNoventa} \n A quantidade de pessoas que pesam menos de 50Kg e tem 1.60m de altura: ${menosDeCinquenta} \n A quantidade de pessoas que pesam mais de 100Kg e tem mais de 1.90m de altura: ${maisDeCem}`);


