// Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
// no final:
// a) Qual foi a média de altura do grupo
// b) Quantas pessoas pesam mais de 90Kg
// c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
// d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.

var readline = require('readline-sync')

let inputWeight : number = 0;
let inputHeight : number = 0;
let personAboveNinety : number = 0;
let personBelowFifty : number = 0;
let personAboveHundred : number = 0;
let countPersonWeight : number = 0;
let totPersonHeight : number = 0;
let avgHeight : number = 0;


while (countPersonWeight < 7) {
    inputHeight = parseFloat(readline.question(`Digite a atura da pessoa ${inputHeight}: `));

    inputWeight = parseFloat(readline.question(`Digite o peso da pessoa ${inputWeight}: `));
    totPersonHeight += inputHeight;

    if ( inputWeight > 90) {
        personAboveNinety+=1;
    }else if ( inputWeight < 50 && inputHeight < 1.60){
        personBelowFifty+=1;
    }else if ( inputWeight > 100 && inputHeight > 1.90){
        personAboveHundred+=1;
    }

    avgHeight = totPersonHeight / countPersonWeight;
    countPersonWeight += 1;
}

console.log(`Media de altura do grupo: ${avgHeight}`);
console.log(`Pessoas que pesam mais de 90: ${personAboveNinety}`);
console.log(`Pessoas que pesam menos de 50 tem menos de 1.60m: ${personBelowFifty}`);
console.log(`Pessoas que pesam mais de 100 e tem maide 1.90m: ${personAboveHundred}`);