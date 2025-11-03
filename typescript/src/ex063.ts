// Crie um programa usando a estrutura “faça enquanto” que leia vários números.
// A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
// tela:
// a) O somatório entre todos os valores
// b) Qual foi o menor valor digitado
// c) A média entre todos os valores
// d) Quantos valores são pares

var readline = require('readline-sync')
let numbInput : number = 0;
let totNumber : number =0;
let minorValue : number = 999;
let sumNum : number = 0;
let avgNum : number =0;
let oddNums : number = 0;
let isContinue : boolean = true;

do {
    numbInput = parseInt(readline.question("Digite um numero: "));
    totNumber +=1;
    sumNum += numbInput;

    if (numbInput < minorValue) {
        minorValue = numbInput;
    }

    if (numbInput % 2 === 0) {
        oddNums +=1;
    }

    avgNum = sumNum / totNumber;

    let answer : string = readline.question("Deseja continuar?  Digite Sim ou Nao");
    switch (answer) {
        case "Sim":
            isContinue = true;
            break;
        case "Nao":
            isContinue = false;
            break;
        default:
            console.log("opcao invalida");
            break;
    }

} while (isContinue);

console.log(` a) O somatório entre todos os valores ${sumNum}
 b) Qual foi o menor valor digitado ${minorValue}
 c) A média entre todos os valores ${avgNum}
 d) Quantos valores são pares ${oddNums}`);
