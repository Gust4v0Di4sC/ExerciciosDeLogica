// Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
// valores para um procedimento Somador() que vai calcular e mostrar a soma entre
// eles.

var readline = require('readline-sync');



function Somador(valueOne: number, valueTwo: number) {
    return valueOne + valueTwo;
}

function Main(){
    let valueOne:number = parseInt(readline.question("Digite um valor: "));
    let valueTwo:number = parseInt(readline.question("Digite outro valor: "));

    console.log(Somador(valueOne,valueTwo));
}

Main();


