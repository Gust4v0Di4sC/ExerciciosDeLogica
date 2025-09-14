// Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
// final, mostre:a) Qual é a média de idade das pessoas cadastradas
// b) Em quais posições temos pessoas com mais de 25 anos
// c) Qual foi a maior idade digitada (podem haver repetições)
// d) Em que posições digitamos a maior idade

let arrIdade = [];
let maisDeVinteeCinco = [];
let maioresIdades = [];
let totPessoas = 0;
let maiorIdade = 0;

var readline = require('readline-sync');


for (let i = 0; i <=7; i++) {
    arrIdade[i] =parseInt(readline.question(`Pessoa n${i}, Digite sua idade: `));

    if (arrIdade[i] > 25) {
        maisDeVinteeCinco[i] = i;
        maioresIdades[i] = i;
    }

    if (arrIdade[i] > maiorIdade) {
        maiorIdade = arrIdade[i];
    }


    totPessoas +=arrIdade[i];
}

 

console.log(`\n a) Qual é a média de idade das pessoas cadastradas: ${totPessoas/arrIdade.length}
// b) Em quais posições temos pessoas com mais de 25 anos: [${maisDeVinteeCinco}]
// c) Qual foi a maior idade digitada (podem haver repetições): ${maiorIdade}
// d) Em que posições digitamos a maior idade: [${maioresIdades}]`);






