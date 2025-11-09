// Melhore o exercício 96, criando além da função Media() uma outra função
// chamada Situacao(), que vai retornar para o programa principal se o aluno está
// APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
// parâmetro o resultado retornado pela função Media()

var readline = require('readline-sync');

let avgGlobal : number = 0;

function MediaAlunos(gradeOne: number, gradeTwo: number) {
    const avg : number = gradeOne + gradeTwo / 2;
    avgGlobal = avg;
    return avgGlobal;
}


function Situacao(avg : number ){
    if (avg >= 7.0) {
        return "Aprovado";
    }else if(avg < 7.0 && avg >= 5.0){
        return "Recuperacao";
    }else{
        return "Reprovado";
    }
}

function MainMedia(){
    let valueOne:number = parseInt(readline.question("Digite a primeira nota: "));
    let valueTwo:number = parseInt(readline.question("Digite a segunda nota: "));

    console.log(`Sua media é ${MediaAlunos(valueOne,valueTwo)}`);
    console.log(`Você está ${Situacao(avgGlobal)}`);
}

MainMedia();

