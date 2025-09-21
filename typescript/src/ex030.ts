// DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
// de triângulo será formado:
// - EQUILÁTERO: todos os lados iguais
// - ISÓSCELES: dois lados iguais
// - ESCALENO: todos os lados diferentes

var readline = require('readline-sync')

let segmentoInputA : number = Number(readline.question("Digite o comprimento do segmento A: "));
let segmentoInputB : number = Number(readline.question("Digite o comprimento do segmento B: "));
let segmentoInputC : number = Number(readline.question("Digite o comprimento do segmento C: "));

if ((segmentoInputA < segmentoInputB + segmentoInputC) && (segmentoInputB < segmentoInputA + segmentoInputC) && (segmentoInputC < segmentoInputB + segmentoInputA)) {
    console.log(`com as medidas: \n A: ${segmentoA} B: \n ${segmentoB} \n C: ${segmentoC} `);
    console.log("e possível formar um triangulo");
    if (segmentoInputA === segmentoInputB && segmentoInputB === segmentoInputC && segmentoInputC == segmentoInputA) {
        console.log(`O triangulo é Equilátero`);
    }else if (segmentoInputA === segmentoInputB || segmentoInputB === segmentoInputC || segmentoInputC == segmentoInputA){
        console.log(`O triangulo é Isósceles`);
    }else{
        console.log(`O triangulo é Escaleno`);
    }
}else{
    console.log(`com as medidas: \n A: ${segmentoA} B: \n ${segmentoB} \n C: ${segmentoC} `);
    console.log(" não é possível formar um triangulo");
}