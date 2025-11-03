// Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
// valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
// contendo apenas os dados das pessoas menores de idade.
var readline = require('readline-sync');


let personName : string[] = new Array(9);
let personAge : number[] = new Array(9);

for (let i = 0; i < personName.length; i++) {
    personName[i] = readline.question("Digite nome da pessoa: ");
    personAge[i] = parseInt(readline.question("Digite a idade da pessoa: "));
}

console.log("Lista das pessoas menores de 18: ");
for (let x = 0; x < personAge.length; x++) {
    if(personAge[x] < 18){
        console.log(`Nome da pessoa: ${personName[x]}`);
        console.log(`Idade da pessoa: ${personAge[x]}`);
    }
}
console.log("Fim da lista");
