// Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
// a) Qual é a média de idade do grupo
// b) Quantas pessoas tem mais de 18 anos
// c) Quantas pessoas tem menos de 5 anos
// d) Qual foi a maior idade lida
var readline = require('readline-sync');

// qual foi o maior e qual foi o menor preço digitados.

let numeroInicial = 1;


let maiorIdade = 0;
let maisDezoito = 0;
let menosCinco = 0;
let somaIdades =0;


while (numeroInicial <= 10) {
    let idadePessoa = parseInt(readline.question(`Pessoa numero: ${numeroInicial}, Digite sua idade: `));

    
    if(idadePessoa > maiorIdade){
        maiorIdade = idadePessoa;
    }

    if (idadePessoa > 18) {
        maisDezoito++;
    }else if(idadePessoa < 5){
        menosCinco++;
    }

    somaIdades+= idadePessoa;
    numeroInicial++;
} 
console.log(`\n O Media das idades digitadas  foi:  ${somaIdades/10} \n Quantidade de pessoas maiores de 18 : ${maisDezoito} \n Quantidade de pessoas com menos de cinco anos: ${menosCinco} \n A maior idade digitada foi: ${maiorIdade} `);


