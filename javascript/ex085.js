// Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
// guarde esses dados em três vetores. No final, mostre uma listagem contendo
// apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.


let arrNomes = [];
let arrSexo = [];
let arrSalarios = [];

var readline = require('readline-sync');


for (let i = 0; i <=4; i++) {
   arrNomes[i] = readline.question("Digite seu nome: ");
   arrSexo[i] = parseInt(readline.question("Digite seu sexo: 1(Masculino) 2(feminino): "));

   if(arrSexo[i] !== 1 && arrSexo[i] !== 2){
      console.log("Opção Invalida")
      break;
   }

   arrSalarios[i] = parseFloat(readline.question("Digite seu salario: "));
}

console.log(`Mulheres que ganham mais de R$ 5000: `);
for (let j = 0; j < arrNomes.length; j++) {
    if (arrSexo[j] === 2 && arrSalarios[j] > 5000) {
        console.log(`
          Nome: ${arrNomes[j]}
          Salario: ${arrSalarios[j]}
          `)
     }
}








