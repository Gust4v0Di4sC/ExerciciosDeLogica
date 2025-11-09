// Refaça o exercício 90, só que agora em forma de função Somador(), que vai
// receber dois parâmetros e vai retornar o resultado da soma entre eles para o
// programa principal.

var readline = require('readline-sync');


function SomadorMaster(valueOne: number, valueTwo: number) {
    const soma = valueOne + valueTwo;
    return soma;
}

function Mainster(){
    let valueOne:number = parseInt(readline.question("Digite um valor: "));
    let valueTwo:number = parseInt(readline.question("Digite outro valor: "));

    console.log(SomadorMaster(valueOne,valueTwo));
}

Mainster();
