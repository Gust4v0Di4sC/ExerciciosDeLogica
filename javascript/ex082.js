// Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
// um vetor. No final, mostre:
// a) Qual é a média da turma
// b) Quantos alunos estão acima da média da turma
// c) Qual foi a maior nota digitada
// d) Em que posições a maior nota aparece

let arrNotas = [];
let acimaDaMedia = 0;
let maioresNotas = [];
let media = 0;
let totNotas = 0;
let maiorNota = 0;

var readline = require('readline-sync');


for (let i = 0; i <=9; i++) {
    arrNotas[i] = parseFloat(readline.question(`Pessoa n${i}, Digite sua Nota: `));
    
    totNotas+= arrNotas[i];
    
    media = totNotas/arrNotas.length;

    if (arrNotas[i] > maiorNota) {
        maiorNota = arrNotas[i];
    }

    
}

for (let i = 0; i < arrNotas.length; i++) {
    if (arrNotas[i] > media) {
        acimaDaMedia++;
    }
    
    if (arrNotas[i] === maiorNota) {
        maioresNotas[i] = i;
    }
    
}

 

console.log(`\n // a) Qual é a média da turma: ${media}
// b) Quantos alunos estão acima da média da turma: ${acimaDaMedia}
// c) Qual foi a maior nota digitada: ${maiorNota}
// d) Em que posições a maior nota aparece: [${maioresNotas}]`);






