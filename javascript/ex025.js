// [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com essas
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
// de cada lado deve ser menor que a soma dos outros dois.

var readline = require('readline-sync')

const primeiroSegmento = parseFloat(readline.question(`Digite o primeiro segmento: `));
const segundoSegmento = parseFloat(readline.question(`Digite o segundo segmento: `));
const terceiroSegmento = parseFloat(readline.question(`Digite o terceiro segmento: `));

//Primeira condição = primeroSegmento  ser menor que a soma do segundo + terceiro
//Segunda condição = segundoSegmento  ser menor que a soma do primeiro + terceiro
//terceira condição = terceiroSegmento  ser menor que a soma do segundo + segundo

if ((primeiroSegmento < segundoSegmento + terceiroSegmento) && (segundoSegmento < terceiroSegmento + primeiroSegmento) && (terceiroSegmento < primeiroSegmento + segundoSegmento)) {
    console.log(`Com os comprimentos: ${primeiroSegmento}, ${segundoSegmento} , ${terceiroSegmento} é possível formar um triângulo`);
}else{
    console.log(`Com os comprimentos: ${primeiroSegmento}, ${segundoSegmento} , ${terceiroSegmento} não será possível formar um triângulo`)
}

