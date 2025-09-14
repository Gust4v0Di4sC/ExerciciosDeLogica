// Crie um programa que leia duas notas de um aluno e calcule a sua média,
// mostrando uma mensagem no final, de acordo com a média atingida:
// - Média até 4.9: REPROVADO
// - Média entre 5.0 e 6.9: RECUPERAÇÃO
// - Média 7.0 ou superior: APROVADO

var readline = require('readline-sync')


const firstNote = parseFloat(readline.question(`Digite a primeira nota: `));
const secondNote = parseFloat(readline.question(`Digite a segunda nota: `));

const medium = firstNote + secondNote / 2;

if (medium >= 7.0) {
    console.log(`APROVADO , Media final ${medium}`);
} else if (medium > 5.0 && medium <= 6.9) {
    console.log(`RECUPERAÇÃO, Media final ${medium}`);
}else{
    console.log(`REPROVADO, Media final ${medium}`);
}