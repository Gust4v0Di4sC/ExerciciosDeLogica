// Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
// “para”. No final, mostre na tela:
// a) Quantas mulheres foram cadastradas
// b) Quantos homens pesam mais de 100Kg
// c) A média de peso entre as mulheres
// d) O maior peso entre os homens

var readline = require('readline-sync');
let mulheresCadastradas = 0;
let totPesoMulheres = 0;
let homensCemKg = 0;
let maiorPeso = 0;

for (let i = 0; i <= 8; i++) {
    let sexo = parseInt(readline.question("Digite o seu sexo: 1(Masculino) 2(Feminino) "));
    let peso = parseFloat(readline.question("Digite o seu peso: "))
    
    if (sexo === 2) {
        mulheresCadastradas++;
        totPesoMulheres+= peso;
    }

    if(sexo === 1 && peso > 100 ){
        homensCemKg++;
    }

    if(sexo === 1 && peso > maiorPeso){
        maiorPeso = peso;
    }
}
console.log(` a) Quantas mulheres foram cadastradas : ${mulheresCadastradas}
 b) Quantos homens pesam mais de 100Kg: ${homensCemKg}
 c) A média de peso entre as mulheres: ${totPesoMulheres/mulheresCadastradas}
 d) O maior peso entre os homens: ${maiorPeso}`)

