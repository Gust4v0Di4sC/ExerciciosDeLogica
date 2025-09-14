// Um programa de vida saudável quer dar pontos atividades físicas que podem
// ser trocados por dinheiro. O sistema funciona assim:
// - Cada hora de atividade física no mês vale pontos
// - até 10h de atividade no mês: ganha 2 pontos por hora
// - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
// - acima de 20h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
// calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

var readline = require('readline-sync');

const nomeCliente = readline.question(`Digite o seu nome: `);
const horasAtividades = parseInt(readline.question(`Digite a quantidade de horas que se exercitou esse mês: `));
let pontos = 0;

if (horasAtividades <= 10) {
    pontos = horasAtividades * 2;
    console.log(`Olá ${nomeCliente}, Você fez um total de ${pontos} em pontos, \n Ganhou R$ ${0.05 * pontos}`);
}else if(horasAtividades > 10 && horasAtividades <= 20){
    pontos = horasAtividades * 5;
    console.log(`Olá ${nomeCliente}, Você fez um total de ${pontos} em pontos, \n Ganhou R$ ${0.05 * pontos}`);
}else{
    pontos = horasAtividades * 10;
    console.log(`Olá ${nomeCliente}, Você fez um total de ${pontos} em pontos, \n Ganhou R$ ${0.05 * pontos}`);
}