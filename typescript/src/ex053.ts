//  Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
// a) Quantos homens foram cadastrados
// b) Quantas mulheres foram cadastradas
// c) A média de idade do grupo
// d) A média de idade dos homens
// e) Quantas mulheres tem mais de 20 anos

var readline = require('readline-sync')

let inputAgePerson : number = 0;
let inputGenderPerson : number = 0;
let totManInput : number = 0;
let totAgePerson : number = 0;
let totAgeManInput : number = 0;
let totWomenInput : number = 0;
let totWomenTwenty : number = 0;
let avgMan : number = 0;
let avgPerson : number = 0;
let countPerson : number = 0;


while (countPerson < 5) {
    inputAgePerson = parseFloat(readline.question(`Digite a idade da pessoa ${inputAgePerson}: `));

    inputGenderPerson = parseFloat(readline.question(`Digite  o genero ${inputGenderPerson}: `));
    totAgePerson += inputAgePerson;


    switch (inputGenderPerson) {
        case 1:
            totManInput += 1;
            totAgeManInput += inputAgePerson;
            break;
        case 2:
            totWomenInput +=1;
            if (inputAgePerson > 20) {
                totWomenTwenty += 1;
            }
            break;
        default:
            console.log("Opção invalida");
            break;
    }


    if (inputPrice > majorPrice) {
        majorPrice = inputPrice;
    }

    if (inputPrice < minorPrice) {
        minorPrice = inputPrice;
    }

    avgMan = totAgeManInput / totManInput;
    avgPerson = totAgePerson / countPerson;
    countPerson += 1;
}
console.log(`Quantidade de homens: ${totManInput}`);
console.log(`Quantidade de mulheres: ${totWomenInput}`);
console.log(`Media de idade do grupo: ${avgPerson}`);
console.log(`Media de idade dos homens: ${avgMan}`);
console.log(`Mulheres que tem mais de 20 anos: ${totWomenTwenty}`);