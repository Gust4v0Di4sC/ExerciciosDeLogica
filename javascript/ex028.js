// Faça um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m². O programa também
// devemostrar a classificação desse terreno, de acordo com a lista abaixo:
// - Abaixo de 100m² = TERRENO POPULAR
// - Entre 100m² e 500m² = TERRENO MASTER
// - Acima de 500m² = TERRENO VIP

var readline = require('readline-sync')

const largura = parseFloat(readline.question(`Digite a largura do terreno: `));
const comprimento = parseFloat(readline.question(`Digite o comprimento do terreno: `));

const areaMetroQuadrado = comprimento * largura;

if (areaMetroQuadrado < 100) {
    console.log(`TERRENO POPULAR, Área em m2: ${areaMetroQuadrado}`);
} else if (areaMetroQuadrado >= 100 && areaMetroQuadrado < 500) {
    console.log(`TERRENO MASTER, Área em m2: ${areaMetroQuadrado}`);
}else{
    console.log(`TERRENO VIP, Área em m2: ${areaMetroQuadrado}`);
}