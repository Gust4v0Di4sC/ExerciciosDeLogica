// Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
// vai parar quando for digitada a idade 999. No final, mostre quantos alunos
// existem na turma e qual é a média de idade do grupo.

var readline = require('readline-sync')

let inputAgeStudent : number = 0;
let totStudentInput : number = 0;
let totSudent : number = 0;
let avgStudent : number =  0;


while (inputAgeStudent != 999) {
    inputAgeStudent = parseInt(readline.question(`Digite a idade do aluno: `));

    totStudentInput += inputAgeStudent;
    totSudent += 1;

    avgStudent = totStudentInput / totSudent;

}

console.log(`Total de alunos na turma: ${totSudent}`);
console.log(`Media de alunos na turma: ${avgStudent}`);