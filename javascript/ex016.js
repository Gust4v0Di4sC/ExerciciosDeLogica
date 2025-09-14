// Escreva um programa para calcular a redução do tempo de vida de um
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
// quantos dias de vida um fumante perderá e exiba o total em dias.

var readline = require('readline-sync')


const cigarrosPorDia = parseInt(readline.question(`Digite a quantidade de cigarros fumados por dia: `));

const anosFumando = parseInt(readline.question(`Digite a quantidade de anos fumando: `));

const tempoDiario = cigarrosPorDia * 10;
const cigarrosTotais  = tempoDiario * (anosFumando * 365) / 1440;


console.log(`Você já perdeu um Total de ${Math.floor(cigarrosTotais)} Dias de vida!!`);
