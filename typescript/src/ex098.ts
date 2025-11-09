// Crie um programa que tenha uma função SuperSomador(), que vai receber dois
// números como parâmetro e depois vai retornar a soma de todos os valores no
// intervalo entre os valores recebidos.
// Ex:
// SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
// SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85

var readline = require('readline-sync');


function SuperSomador(valueOne: number, valueTwo: number) {
    let soma : number = 0;
    for (let i = valueOne; i <= valueTwo; i++) {
        process.stdout.write(i + " + ")
        soma += i;
    }
    return "= "+ soma;
}

function MainSomador(){
    let valueOne:number = parseInt(readline.question("Digite um valor: "));
    let valueTwo:number = parseInt(readline.question("Digite outro valor: "));

    console.log(SuperSomador(valueOne,valueTwo));
}

MainSomador();
