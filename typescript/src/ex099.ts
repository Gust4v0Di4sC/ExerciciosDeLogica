// Faça um programa que possua uma função chamada Potencia(), que vai receber
// dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
// exponenciação.
// Ex: Potencia(5,2) vai calcular 52 = 25

var readline = require('readline-sync');


function Potencia(base: number, expoente: number) {
    for (let i = 1; i < expoente; i++) {
        base *= base;
    }
    return base;
}

function MainPower(){
    let valueOne:number = parseInt(readline.question("Digite um valor: "));
    let valueTwo:number = parseInt(readline.question("Digite outro valor: "));

    console.log(Potencia(valueOne,valueTwo));
}

MainPower();
