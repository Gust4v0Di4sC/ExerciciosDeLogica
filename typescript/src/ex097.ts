// Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
// adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
// maior entre eles.

var readline = require('readline-sync');


function Major(valueOne: number, valueTwo: number, valueThree : number) {
    if (valueOne > valueTwo && valueOne > valueThree) {
        return valueOne;
    }else if(valueTwo > valueOne && valueTwo > valueThree){
        return valueTwo;
    }else{
        return valueThree;
    }
}

function MainMethodMaster(){
    let valueOne:number = parseInt(readline.question("Digite um valor: "));
    let valueTwo:number = parseInt(readline.question("Digite outro valor: "));
    let valueThree:number = parseInt(readline.question("Digite outro valor: "));

    console.log(Major(valueOne,valueTwo,valueThree));
}

MainMethodMaster();
