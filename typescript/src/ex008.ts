// 8) Desenvolva um programa que leia uma distância em metros e mostre os valores
// relativos em outras medidas.
// Ex:
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm

var readline = require('readline-sync')

let distancMetros : number = Number(readline.question("Digite uma distancia em metros: "));

let kilometro : number = distancMetros / 1000;
let hectometro : number = distancMetros / 100;
let decatometro : number = distancMetros / 10;
let decimetro : number = distancMetros * 1000;
let centimetro : number = distancMetros * 100;
let milimetro : number = distancMetros * 10;

console.log(`A distância de ${distancMetros} corresponde a: `)
console.log(`${kilometro}Km \n ${hectometro}Hm \n ${decatometro}Dam \n ${decimetro}dm \n ${centimetro}cm \n ${milimetro}mm`);

