// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
// No final, mostre o total de salários pagos aos homens e o total pago às
// mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
// sempre que ler os dados de um funcionário.

var readline = require('readline-sync')

let inputSalary : number = 0;
let inputGender : number = 0;
let totSalaryMen : number = 0;
let totSalaryWomen : number = 0;
let contInput : number = 0;


while (true) {
    inputSalary = parseFloat(readline.question(`Digite o seu salario: `));
    inputGender = parseInt(readline.question(`Digite o seu genero:  1-(Homem) 2-(Mulher)`));

   switch (inputGender) {
    case 1:
        totSalaryMen += inputSalary;
        break;
    case 2:
        totSalaryWomen += inputSalary;
        break;
   
    default:
        console.log("Opção invalida")
        break;
   }

   console.log(`Deseja continuar? `);
   contInput = parseInt(readline.question(`Digite 1 para continuar, 2 para encerrar`));

   if (contInput === 1) {
      continue;
   }else{
      break;
   }
}
console.log(` Acabou!`);