// [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
// agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
// tentativas para tentar acertar.


let player = 0;
let machine = 0;
let tries = 0;
var readline = require('readline-sync');

while (tries != 4) {
    console.log("Bem vindo ao jogo , Advinhe o numero!!!");
    console.log("Um numero será sorteado e você tentara advinha-lo, se acertar você ganha uma combuchirra");

    player = parseInt(readline.question(`Digite um numero de 1 a 10: `));
    machine = parseInt(Math.floor(Math.random() * (11 - 1) + 1));

    if (player <= 10) {
        if (player === machine) {
            console.log(`Parabéns você acertou o numero, numero sorteado: ${machine}`);
        }else{
            console.log(`Que pena, você errou`);
            if (tries <= 4) {
                console.log(`Tente novamente, você tem ${tries} tentativas: `);
                player = parseInt(readline.question(`Digite um numero de 1 a 10: `));
                tries++;
                
                if (player === machine) {
                    console.log(`Parabéns você acertou o numero, numero sorteado: ${machine}`);
                    break;
                }
            }
        }   
    }else{
        console.log("Digite um número de 1 a 5!!!");
    }
}



