// [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

var readline = require('readline-sync')

let playerOpt : number = parseInt(readline.question("Digite uma opcao 1- Pedra,2- Tesoura ou 3- Papel: "));

let machineOpt : number = Math.floor(Math.random() * (4 - 1) + 1);

switch (playerOpt) {
    case 1:
        if (machineOpt === 2) {
            console.log(`voce jogou ${playerOpt} Pedra`);
            console.log(`computador jogou ${machineOpt} Tesoura`);
            console.log("Você venceu!!");
        }else if (machineOpt === 3){
            console.log(`voce jogou ${playerOpt} Pedra`);
            console.log(`computador jogou ${machineOpt} Papel`);
            console.log("Você perdeu!!");
        }else{
            console.log(`voce jogou ${playerOpt} Pedra`);
            console.log(`computador jogou ${machineOpt} Pedra`);
            console.log("Empate");
        }
        break;
    case 2:
        if (machineOpt === 1) {
            console.log(`voce jogou ${playerOpt} Tesoura`);
            console.log(`computador jogou ${machineOpt} Pedra`);
            console.log("Você perdeu!!");
        }else if (machineOpt === 3){
            console.log(`voce jogou ${playerOpt} Tesoura`);
            console.log(`computador jogou ${machineOpt} Papel`);
            console.log("Você venceu!!");
        }else{
            console.log(`voce jogou ${playerOpt} Tesoura`);
            console.log(`computador jogou ${machineOpt} Tesoura`);
            console.log("Empate");
        }
        break;
    case 3: 
        if (machineOpt === 2) {
            console.log(`voce jogou ${playerOpt} Papel`);
            console.log(`computador jogou ${machineOpt} Tesoura`);
            console.log("Você perdeu!!");
        }else if (machineOpt === 1){
            console.log(`voce jogou ${playerOpt} Papel`);
            console.log(`computador jogou ${machineOpt} Pedra`);
            console.log("Você venceu!!");
        }else{
            console.log(`voce jogou ${playerOpt} Papel`);
            console.log(`computador jogou ${machineOpt} Papel`);
            console.log("Empate");
        }
        break;

    default: console.log(`opção invalida`);
        break;
}
