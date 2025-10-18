// [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
// jogador vai tentar descobrir qual foi o valor sorteado.

var readline = require('readline-sync')

let playerOptNum : number = parseInt(readline.question("Digite um numero entre 1 e 5: "));

let machineOptNum : number = Math.floor(Math.random() * (6 - 1) + 1);

switch (playerOptNum) {
    case 1:
        if (machineOptNum === playerOptNum) {
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você acertou!!");
        }else{
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você errou!!");
        }
        break;
    case 2:
         if (machineOptNum === playerOptNum) {
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você acertou!!");
        }else{
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você errou!!");
        }
        break;
    case 3: 
         if (machineOptNum === playerOptNum) {
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você acertou!!");
        }else{
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você errou!!");
        }
        break;
    case 4:
         if (machineOptNum === playerOptNum) {
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você acertou!!");
        }else{
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você errou!!");
        }
        break;
        
    case 5:
         if (machineOptNum === playerOptNum) {
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você acertou!!");
        }else{
            console.log(`voce digitou ${playerOptNum}`);
            console.log(`o numero sorteado foi ${machineOptNum}`)
            console.log("Você errou!!");
        }
        break;

    default: console.log(`opção invalida`);
        break;
}
