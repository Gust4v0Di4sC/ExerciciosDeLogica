// O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
// peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
// indivíduo dentro de certas faixas.
// - abaixo de 18.5: Abaixo do peso
// - entre 18.5 e 25: Peso ideal
// - entre 25 e 30: Sobrepeso
// - entre 30 e 40: Obesidade
// - acima de 40: Obesidade mórbida

var readline = require('readline-sync')

let heightPerson : number = parseInt(readline.question("Digite a sua altura: "));
let weightPerson : number = parseInt(readline.question("Digite o seu peso: "));


let imcValue : number = weightPerson / heightPerson * heightPerson;

if (imcValue < 18.5) {
    console.log(`IMC : ${imcValue}`);
    console.log("Abaixo do peso");
}else if(imcValue >= 18.5 && imcValue < 25){
    console.log(`IMC : ${imcValue}`);
    console.log("Peso ideal");
}else if(imcValue >= 25 && imcValue < 30){
    console.log(`IMC : ${imcValue}`);
    console.log("Sobrepeso");
}else if(imcValue >= 30 && imcValue < 40){
    console.log(`IMC : ${imcValue}`);
    console.log("Obesidade");
}else if (imcValue > 40){
    console.log(`IMC : ${imcValue}`);
    console.log("Obesidade mórbida");
}


