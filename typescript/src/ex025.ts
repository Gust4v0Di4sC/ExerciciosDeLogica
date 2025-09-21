// [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com essas
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
// de cada lado deve ser menor que a soma dos outros dois.

var readline = require('readline-sync')

let segmentoA : number = Number(readline.question("Digite o comprimento do segmento A: "));
let segmentoB : number = Number(readline.question("Digite o comprimento do segmento B: "));
let segmentoC : number = Number(readline.question("Digite o comprimento do segmento C: "));

if ((segmentoA < segmentoB + segmentoC) && (segmentoB < segmentoA + segmentoC) && (segmentoC < segmentoB + segmentoA)) {
    console.log(`com as medidas: \n A: ${segmentoA} B: \n ${segmentoB} \n C: ${segmentoC} `);
    console.log("e possível formar um triangulo");
}else{
    console.log(`com as medidas: \n A: ${segmentoA} B: \n ${segmentoB} \n C: ${segmentoC} `);
    console.log(" não é possível formar um triangulo");
}
