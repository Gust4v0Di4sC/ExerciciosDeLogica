// Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
// perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
// a) qual é a maior idade lida
// b) quantos homens foram cadastrados
// c) qual é a idade da mulher mais jovem
// d) qual é a média de idade entre os homens

var readline = require('readline-sync')

let inputGenderPersons : number = 0;
let inputAgesPerson : number = 0;
let majorAgeInput : number = 0;
let totMenInput : number = 0;
let totMen : number = 0;
let youngWomen : number = 999;
let avgMen : number = 0;
let condCont : boolean = true;



while (condCont) {
    inputAgesPerson = parseInt(readline.question(`Digite sua idade: `));
    inputGenderPersons = parseInt(readline.question(`Digite seu genero: 1-(Mulher) 2-(Homem)`));


    switch (inputGenderPersons) {
        case 1:
            totMenInput += inputAgesPerson;
            totMen +=1;
            break;
        case 2:
            if (inputAgesPerson < youngWomen) {
                youngWomen = inputAgesPerson;
            }
            break;
    
        default:
            console.log("opção invalida");
            break;
    }

    if ( inputAgesPerson > majorAgeInput) {
        majorAgeInput = inputAgesPerson;
    }

    avgMen = totMenInput / totMen;

    console.log("Deseja continuar? ");
    let inputAnswer : number = parseInt(readline.question("Digite 1 para sim 2 para nao: "))
    if (inputAnswer == 1) {
        condCont = true;
    }else{
        condCont = false;
    }

}
console.log(` Acabou!`);