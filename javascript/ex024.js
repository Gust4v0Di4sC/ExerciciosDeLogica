// Faça um algoritmo que pergunte a distância que um passageiro deseja
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
// viagens até 200Km e R$0.45 para viagens mais longas.

var readline = require('readline-sync')


const distanciaDesejada = parseInt(readline.question(`Digite a distancia que deseja percorrer: `));

if (distanciaDesejada <= 200) {
    console.log(`Você deseja percorrer ${distanciaDesejada}Km , o valor cobrado para essa viagem será: R$ ${parseFloat(distanciaDesejada * 0.50)}`);
}else if(distanciaDesejada > 200) {
    console.log(`Você deseja percorrer ${distanciaDesejada}Km , o valor cobrado para essa viagem será: R$ ${parseFloat(distanciaDesejada * 0.45)}`)
}