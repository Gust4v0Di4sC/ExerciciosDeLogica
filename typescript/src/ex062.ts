// Faça um programa usando a estrutura “faça enquanto” que leia a idade de
// várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
// na tela:
// a) Quantas idades foram digitadas
// b) Qual é a média entre as idades digitadas
// c) Quantas pessoas tem 21 anos ou mais.

var readline = require('readline-sync')

let countAges : number = 0;
let contLoop : boolean = true;
let ageInput : number = 0;
let totAges: number = 0;
let avgAges: number = 0;
let personTwentyOne : number = 0;

do {
    ageInput = parseInt(readline.question("Digite uma idade: "));
    totAges += 1;
    countAges += ageInput;

    if (ageInput >= 21) {
        personTwentyOne +=1;
    }

    avgAges = countAges / totAges;

    let answer : number = parseInt(readline.question("Deseja continuar? 1-Sim 2-Nao"))
    switch (answer) {
        case 1:
            contLoop = true;
            break;
        case 2:
            contLoop = false;
            break;
        default:
            console.log("opção invalida");
            break;
    }
} while (contLoop);

console.log(`a) Quantas idades foram digitadas ${totAges}
// b) Qual é a média entre as idades digitadas ${avgAges}
// c) Quantas pessoas tem 21 anos ou mais ${personTwentyOne}`);