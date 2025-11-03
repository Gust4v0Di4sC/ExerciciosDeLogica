// Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
// um vetor. No final, mostre:
// a) Qual é a média da turma
// b) Quantos alunos estão acima da média da turma
// c) Qual foi a maior nota digitada
// d) Em que posições a maior nota aparece

var readline = require('readline-sync');

let arrNotes : number[] = new Array(10);
let avgNotes : number = 0;
let aboveAvg : number = 0;
let majorNote : number = 0;
let totNotes : number = 0;
let totMajorNotes : number = 0;
let majorNotePos : number[] = new Array(totMajorNotes);



for (let i = 0; i < arrNotes.length; i++) {
    arrNotes[i] = parseFloat(readline.question("Digite uma nota: "));
    totNotes += 1;
    
    avgNotes = totNotes / arrNotes.length;

    if (arrNotes[i] > avgNotes) {
        aboveAvg +=1;
    }

    if (arrNotes[i] > majorNote) {
        majorNote = arrNotes[i];
    }

    if(arrNotes[i] === majorNote){
        majorNotePos.push(i);
        totMajorNotes+=1;
    }
}

console.log(`a) Qual é a média da turma: ${avgNotes}
// b) Quantos alunos estão acima da média da turma : ${aboveAvg}
// c) Qual foi a maior nota digitada: ${majorNote}
// d) Em que posições a maior nota aparece: [${majorNotePos}]`);
