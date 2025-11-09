// Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
// um aluno e retornar a sua média para o programa principal.

var readline = require('readline-sync');


function Media(gradeOne: number, gradeTwo: number) {
    const avg = gradeOne + gradeTwo / 2;
    return avg;
}

function MainMaster(){
    let valueOne:number = parseInt(readline.question("Digite a primeira nota: "));
    let valueTwo:number = parseInt(readline.question("Digite a segunda nota: "));

    console.log(Media(valueOne,valueTwo));
}

MainMaster();
