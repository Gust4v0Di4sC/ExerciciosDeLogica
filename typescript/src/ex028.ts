// Faça um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m². O programa também
// devemostrar a classificação desse terreno, de acordo com a lista abaixo:
// - Abaixo de 100m² = TERRENO POPULAR
// - Entre 100m² e 500m² = TERRENO MASTER
// - Acima de 500m² = TERRENO VIP

var readline = require('readline-sync')

let larguraTerreno : number = Number(readline.question("Digite a largura do terreno: "));
let comprimentoTerreno : number = Number(readline.question("Digite o comprimento do terreno: "));
let areaTerreno : number = larguraTerreno * comprimentoTerreno;

if (areaTerreno <= 100) {
    console.log(`area do terreno: ${areaTerreno}, TERRENO POPULAR`);
}else if ( areaTerreno > 100 && areaTerreno <= 500){
    console.log(`area do terreno: ${areaTerreno}, TERRENO MASTER`);
}else{
    console.log(`area do terreno: ${areaTerreno}, TERRENO VIP`);
}
