// [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
// agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
// tentativas para tentar acertar.


var readline = require('readline-sync')

let tries : number = 4;


while (tries != 0) {
  let playerOptNum2: number = parseInt(
    readline.question("Digite um numero entre 1 e 5: ")
  );

  let machineOptNum2: number = Math.floor(Math.random() * (11 - 1) + 1);

  switch (playerOptNum2) {
    case 1:
      if (machineOptNum2 === playerOptNum2) {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você acertou!!");
      } else {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você errou!!");
        if (tries != 0) {
          tries -= 1;
          console.log(`Você tem mais ${tries} tentativas`);  
        }else{
           console.log("Acabaram as tentativas");
        }
        
      }
      break;
    case 2:
      if (machineOptNum2 === playerOptNum2) {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você acertou!!");
      } else {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você errou!!");
        if (tries != 0) {
          tries -= 1;
          console.log(`Você tem mais ${tries} tentativas`);  
        }else{
           console.log("Acabaram as tentativas");
        }
      }
      break;
    case 3:
      if (machineOptNum2 === playerOptNum2) {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você acertou!!");
      } else {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você errou!!");
        if (tries != 0) {
          tries -= 1;
          console.log(`Você tem mais ${tries} tentativas`);  
        }else{
           console.log("Acabaram as tentativas");
        }
      }
      break;
    case 4:
      if (machineOptNum2 === playerOptNum2) {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você acertou!!");
      } else {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você errou!!");
        if (tries != 0) {
          tries -= 1;
          console.log(`Você tem mais ${tries} tentativas`);  
        }else{
           console.log("Acabaram as tentativas");
        }
      }
      break;

    case 5:
      if (machineOptNum2 === playerOptNum2) {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você acertou!!");
      } else {
        console.log(`voce digitou ${playerOptNum2}`);
        console.log(`o numero sorteado foi ${machineOptNum2}`);
        console.log("Você errou!!");
        if (tries != 0) {
          tries -= 1;
          console.log(`Você tem mais ${tries} tentativas`);  
        }else{
           console.log("Acabaram as tentativas");
        }
      }
      break;

    default:
      console.log(`opção invalida`);
      break;
  }
}

