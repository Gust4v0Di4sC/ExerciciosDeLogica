// Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
// de triângulo será formado:
// - EQUILÁTERO: todos os lados iguais
// - ISÓSCELES: dois lados iguais
// - ESCALENO: todos os lados diferentes


var readline = require('readline-sync')

const primeiroSegmento = parseFloat(readline.question(`Digite o primeiro segmento: `));
const segundoSegmento = parseFloat(readline.question(`Digite o segundo segmento: `));
const terceiroSegmento = parseFloat(readline.question(`Digite o terceiro segmento: `));

//Primeira condição = primeroSegmento  ser menor que a soma do segundo + terceiro
//Segunda condição = segundoSegmento  ser menor que a soma do primeiro + terceiro
//terceira condição = terceiroSegmento  ser menor que a soma do segundo + segundo

if ((primeiroSegmento < segundoSegmento + terceiroSegmento) && (segundoSegmento < terceiroSegmento + primeiroSegmento) && (terceiroSegmento < primeiroSegmento + segundoSegmento)) {
    console.log(`Com os comprimentos: ${primeiroSegmento}, ${segundoSegmento} , ${terceiroSegmento} é possível formar um triângulo`);
    if(primeiroSegmento === segundoSegmento === terceiroSegmento){
        console.log(`Esse Triangulo é EQUILÁTERO`);
    }else if(primeiroSegmento === segundoSegmento || segundoSegmento === terceiroSegmento || terceiroSegmento === primeiroSegmento){
        console.log(`Esse Triangulo é ISÓSCELES`);
    }else{
        console.log(`Esse Triangulo é ESCALENO`);
    }
}else{
    console.log(`Com os comprimentos: ${primeiroSegmento}, ${segundoSegmento} , ${terceiroSegmento} não será possível formar um triângulo`)
}