// Desenvolva um programa que leia uma distância em metros e mostre os valores
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

const distancia = parseFloat(readline.question('Digite uma distância em metros: '));

console.log(`A distância de ${distancia} corresponde a: 
    ${distancia/1000}Km
    ${distancia/100}Hm
    ${distancia/10}Dam
    ${distancia*1000}dm
    ${distancia*100}cm
    ${distancia*10}mm
    `);
