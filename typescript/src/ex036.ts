// Um programa de vida saudável quer dar pontos atividades físicas que podem
// ser trocados por dinheiro. O sistema funciona assim:
// - Cada hora de atividade física no mês vale pontos
// - até 10h de atividade no mês: ganha 2 pontos por hora
// - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
// - acima de 20h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)

// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
// calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

var readline = require('readline-sync')

let quantHoursMonth : number = parseInt(readline.question("Digite quantas horas de atividade voce teve esse mes: "));

let pointsPerActive : number = 0 ;

if (quantHoursMonth <= 10) {
    pointsPerActive = quantHoursMonth * 2;
    console.log(`Você fez : ${pointsPerActive} pontos`);
    console.log(`Saldo em R$: ${pointsPerActive * 0.05}`);
}else if(quantHoursMonth > 10 && quantHoursMonth <= 20){
    pointsPerActive = quantHoursMonth * 5;
    console.log(`Você fez : ${pointsPerActive} pontos`);
    console.log(`Saldo em R$: ${pointsPerActive * 0.05}`);
}else if(quantHoursMonth > 20){
    pointsPerActive = quantHoursMonth * 10;
    console.log(`Você fez : ${pointsPerActive} pontos`);
    console.log(`Saldo em R$: ${pointsPerActive * 0.05}`);
}
