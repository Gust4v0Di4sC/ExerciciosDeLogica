// Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
// não um bom aproveitamento (se ficou acima da média 7.0).

var readline = require('readline-sync')

let nomeAluno : string = readline.question("Digite o seu nome, aluno: ");
let notaAluno1 : number = Number(readline.question("Digite sua nota 1: "));
let notaAluno2 : number = Number(readline.question("Digite sua nota 2: "));

let mediaAluno : number =  notaAluno1 + notaAluno2 /2;

if (mediaAluno >= 7.0) {
    console.log(`sua nota media é: ${mediaAluno}, teve bom aproveitamento`)
}else{
    console.log(`sua nota media é: ${mediaAluno}, não teve um bom aproveitamento`)
}
