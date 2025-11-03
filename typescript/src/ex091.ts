// Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
// valores para um procedimento Maior() que vai verificar qual deles é o maior e
// mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
// informando essa característica.

var readline = require('readline-sync');


function Maior(valueOne: number, valueTwo: number) {
    if (valueOne > valueTwo) {
        return valueOne;
    }else{
        return valueTwo;
    }
}

function Mainn(){
    let valueOne:number = parseInt(readline.question("Digite um valor: "));
    let valueTwo:number = parseInt(readline.question("Digite outro valor: "));

    console.log(Maior(valueOne,valueTwo));
}

Mainn();
