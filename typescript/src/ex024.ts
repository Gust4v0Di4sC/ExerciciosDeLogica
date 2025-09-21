// Faça um algoritmo que pergunte a distância que um passageiro deseja
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
// viagens até 200Km e R$0.45 para viagens mais longas.

var readline = require('readline-sync')

let distanciaInput : number = Number(readline.question("Digite a distancia que deseja percorrer em Km: "));

if (distanciaInput <= 200) {
    let precoPassagem : number = distanciaInput * 0.50;
    console.log(`preço da passagem: ${precoPassagem}`);
}else{
    let precoPassagem : number = distanciaInput * 0.45;
    console.log(`preço da passagem: ${precoPassagem}`);
}


