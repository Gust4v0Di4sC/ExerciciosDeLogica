// Crie um programa que leia duas notas de um aluno e calcule a sua média,
// mostrando uma mensagem no final, de acordo com a média atingida:
// - Média até 4.9: REPROVADO
// - Média entre 5.0 e 6.9: RECUPERAÇÃO
// - Média 7.0 ou superior: APROVADO

var readline = require('readline-sync')

let primeiraNota : number = Number(readline.question("Digite a primeira nota do aluno: "));
let segundaNota : number = Number(readline.question("Digite se segunda nota do aluno: "));

let mediaNotas : number = (primeiraNota + segundaNota) / 2;

if (mediaNotas <= 4.9) {
    console.log(`sua media é: ${mediaNotas}`);
    console.log("REPROVADO");
}else if ( mediaNotas > 5.0  && mediaNotas <= 6.9){
    console.log(`sua media é: ${mediaNotas}`);
    console.log("RECUPERAÇÃO");
}else{
    console.log(`sua media é: ${mediaNotas}`);
    console.log("APROVADO");
}