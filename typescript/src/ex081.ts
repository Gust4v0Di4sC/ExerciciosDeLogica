// Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
// final, mostre:a) Qual é a média de idade das pessoas cadastradas
// b) Em quais posições temos pessoas com mais de 25 anos
// c) Qual foi a maior idade digitada (podem haver repetições)
// d) Em que posições digitamos a maior idade

var readline = require('readline-sync');

let totPersonsTwentyFive : number = 0;
let totPersons : number = 0;
let majorPersons : number = 0;
let arrPersons : number[] = new Array(8);
let arrPosTwentyFive : number[] = new Array(totPersonsTwentyFive);
let avgAgesPerson : number = 0;
let majorAgePersons : number[] = new Array(majorPersons);
let majorAgePos : number[] = new Array(majorPersons);

for (let i = 0; i < arrPersons.length; i++) {
    arrPersons[i] = parseInt(readline.question("Digite a idade: "));
    totPersons +=1;

    if (arrPersons[i] > 25) {
        arrPosTwentyFive.push(i);
        totPersonsTwentyFive +=1;
    }

    if (arrPersons[i] > majorPersons) {
        majorPersons = arrPersons[i];
        majorAgePersons.push(majorPersons);
        majorAgePos.push(i);
    }
   

    avgAgesPerson = totPersons / arrPersons.length;
}
console.log(`a) Qual é a média de idade das pessoas cadastradas: ${avgAgesPerson}
 b) Em quais posições temos pessoas com mais de 25 anos: [${arrPosTwentyFive}]
 c) Qual foi a maior idade digitada (podem haver repetições): [${majorAgePersons}]
 d) Em que posições digitamos a maior idade: [${majorAgePos}]`);
