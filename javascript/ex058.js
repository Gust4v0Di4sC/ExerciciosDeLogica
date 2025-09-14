// Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
// vai parar quando for digitada a idade 999. No final, mostre quantos alunos
// existem na turma e qual é a média de idade do grupo.

var readline = require('readline-sync');

let totalAlunos = 0;
let totalIdades = 0;


while (true) {

    let idadeAluno = parseInt(readline.question(`Olá Aluno, qual sua idade?`));
    if (idadeAluno === 999) {
        break;
    }
    totalAlunos ++;
    totalIdades += idadeAluno;
}

console.log(`O total de Alunos é: ${totalAlunos} \n e a media de suas idades é : ${Math.floor(totalIdades/totalAlunos)}`);


