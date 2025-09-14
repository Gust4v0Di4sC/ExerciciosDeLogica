// Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
// jogador vai tentar descobrir qual foi o valor sorteado.

let player = 0;
let machine = 0;
var readline = require('readline-sync');


console.log("Bem vindo ao jogo , Advinhe o numero!!!");
console.log("Um numero será sorteado e você tentara advinha-lo, se acertar você ganha um combuchirra");
player = parseInt(readline.question(`Digite um numero de 1 a 5: `));
machine = parseInt(Math.floor(Math.random() * (6 - 1) + 1));

if (player <= 5) {
    if (player === machine) {
        console.log(`Parabéns você acertou o numero, numero sorteado: ${machine}`);
    }else{
        console.log(`Que pena, você errou, o número sorteado foi: ${machine}`);
    }   
}else{
    console.log("Digite um número de 1 a 5!!!");
}