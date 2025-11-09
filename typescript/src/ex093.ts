// Faça um programa que tenha um procedimento chamado Contador() que recebe
// três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
// programa principal deve solicitar a digitação desses valores e passá-los ao
// procedimento, que vai mostrar a contagem na tela.


var readline = require('readline-sync');


function Contador(start: number, end: number, pass: number) {
    for (let i = start;  i <= end; i+= pass) {
        console.log(`contagem : ${i}`);    
    }
}

function MainMethod(){
    let valueOne:number = parseInt(readline.question("Digite o valor do inicio: "));
    let valueTwo:number = parseInt(readline.question("Digite o valor do fim: "));
    let valueThree:number = parseInt(readline.question("Digite o valor de incremento: "));

    console.log(Contador(valueOne,valueTwo,valueThree));
}

MainMethod();
