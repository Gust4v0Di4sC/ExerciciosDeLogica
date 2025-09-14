// Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

// Criar o player e a maquina 

let player = 0;
let machine = 0;

// variavel para controlar o inicio do jogo
// let isStart = true;
let start = 0;
let marker;
let markerTwo;


var readline = require('readline-sync');

console.log("Bem vindo ao jogo de JoKenPo")
console.log("Jogo Iniciado!! ");
    player = parseInt(readline.question(`Escolha: 1- Pedra, 2- Papel , 3- Tesoura: `));
    machine = parseInt(Math.floor(Math.random() * (4 - 1) + 1));

if (player <= 3) {
    switch (player) {
        case 1:
            marker = "Pedra"
        break;

        case 2:
            marker = "Papel"
        break;

        case 3:
            marker = "Tesoura"
        break;
        
        default:
            break;
    }

    switch (machine) {
        case 1:
            markerTwo = "Pedra"
        break;

        case 2:
            markerTwo = "Papel"
        break;

        case 3:
            markerTwo = "Tesoura"
        break;
        
        default:
            break;
    }

    console.log(`Jogador escolheu: ${marker}`)
    console.log(`Maquina escolheu: ${markerTwo}`);

    

    if(player === 1 && machine === 2 || player === 2 && machine === 3 || player === 3 && machine === 1){
        console.log("A maquina ganhou, você perdeu!!");
    }else if (player === 2 && machine === 1 || player === 3 && machine === 2 || player === 1 && machine === 3){
        console.log("Você Ganhou, Parabêns!!!");
    }else{
        console.log("Empate!!!");
    }
    
}else{
    console.log("Opção invalida, Bye bye....");
}


