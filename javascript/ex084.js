// Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
// valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
// contendo apenas os dados das pessoas menores de idade.

let arrPessoas = [];
let arrIdades = [];

var readline = require('readline-sync');


for (let i = 0; i <=8; i++) {
   arrPessoas[i] = readline.question("Digite seu nome: ");
   arrIdades[i] = parseInt(readline.question("Digite sua idade: "));
}

console.log(`Menores de Idade: `);
for (let j = 0; j < arrPessoas.length; j++) {
    if (arrIdades[j] < 18) {
        console.log(`
          Nome: ${arrPessoas[j]}
          Idade: ${arrIdades[j]}
          `)
     }
}








