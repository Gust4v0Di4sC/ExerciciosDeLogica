// Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
// O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
// a) O nome da pessoa mais velha
// b) O nome da mulher mais jovem
// c) A média de idade do grupo
// d) Quantos homens tem mais de 30 anos
// e) Quantas mulheres tem menos de 18 anos

var readline = require('readline-sync')

let inputNamePerson : string;
let inputGenderPersona : number = 0;
let inputAgePersona : number = 0;
let minorAgeWomen : number = 999;
let majorAgePerson : number = 0;
let oldestPerson : string = "";
let youngestWoman : string = "";
let avgAgePerson : number = 0;
let totPersonAgeInput : number = 0;
let totPersonInput : number = 0;
let totMenThrity : number = 0;
let totWomenEighteen : number = 0;
let conditInput : boolean = true;


while (conditInput) {
    inputNamePerson = readline.question(`Digite o seu nome:  `);
    inputAgePersona = parseInt(readline.question(`Digite a sua idade ${inputNamePerson}:  `));
    inputGenderPersona = parseInt(readline.question(`Digite o seu genero:  1-(Mulher) 2-(Homem)`));
    totPersonAgeInput += inputAgePersona;
    totPersonInput += 1;

    switch (inputGenderPersona) {
        case 1:
            if (inputAgePersona > 30) {
                totMenThrity += 1;
            }
            break;
        case 2:
            if (inputAgePersona < minorAgeWomen) {
                minorAgeWomen = inputAgePersona;
            }

            if (inputAgePersona === minorAgeWomen) {
                youngestWoman = inputNamePerson;
            }

            if (inputAgePersona < 18) {
                totWomenEighteen += 1;
            }
            break;
    
        default:
            console.log("Opção invalida");
            break;
    }

    if (inputAgePersona > majorAgePerson) {
        oldestPerson = inputNamePerson;
    }

    avgAgePerson = totPersonAgeInput / totPersonInput;

    console.log("Deseja continuar?");
    let inputAns : string = readline.question("Digite Sim para continuar  e Nao para encerrar");

    if (inputAns === "Sim") {
        conditInput = true;
    }else{
        conditInput = false;
    }
}

console.log(`Nome da pessoa mais velha: ${oldestPerson}`);
console.log(`Nome da mulher mais jovem: ${youngestWoman}`);
console.log(`Media de idade do grupo: ${avgAgePerson}`);
console.log(`Homens com mais de 30 anos: ${totMenThrity}`);
console.log(`Mulheres com menos de 18 anos: ${totWomenEighteen}`);