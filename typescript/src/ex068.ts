// Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
// “para”. No final, mostre na tela:
// a) Quantas mulheres foram cadastradas
// b) Quantos homens pesam mais de 100Kg
// c) A média de peso entre as mulheres
// d) O maior peso entre os homens

var readline = require('readline-sync');

let gender : number = 0;
let weight : number = 0;
let totWom : number = 0;
let sumWeightWom : number = 0;
let totManHundred : number = 0;
let avgWom : number = 0;
let majorWeightMan : number = 0;

for (let i = 1; i <= 8; i++) {
    gender = parseInt(readline.question("Digite o seu genero 1-Feminino, 2-Masculino"));
    weight = parseFloat(readline.question("Digie o seu peso: "));

    switch (gender) {
        case 1:
            totWom +=1;
            sumWeightWom += weight;
            break;
        case 2:
            if (weight > 100) {
                totManHundred +=1;
            }

            if (weight > majorWeightMan ) {
                majorWeightMan = weight;
            }
            break;
    
        default:
            console.log("Opção invalida");
            break;
    }

    avgWom = sumWeightWom / totWom;
}

console.log(`a) Quantas mulheres foram cadastradas ${totWom}
 b) Quantos homens pesam mais de 100Kg ${totManHundred}
 c) A média de peso entre as mulheres ${avgWom}
 d) O maior peso entre os homens ${majorWeightMan}`);


