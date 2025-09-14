// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
// No final, mostre o total de salários pagos aos homens e o total pago às
// mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
// sempre que ler os dados de um funcionário.

var readline = require('readline-sync');

let totalHomens = 0;
let totalMulheres = 0;
let cont = true;

while (cont) {

    let salarioFunc = parseFloat(readline.question("Digite o seu salario: "));
    let sexoFunc = readline.question("Digite o seu sexo: ");
    
    let resposta = parseInt(readline.question(`Deseja continuar inserindo? 1- sim 2- não`));
    if(resposta === 1){
        console.log("continuando...");
        cont = true;
    }else{
        console.log("encerrando....");
        cont = false;
    }

    if (sexoFunc === "Homem") {
        totalHomens += salarioFunc;
    }else{
        totalMulheres += salarioFunc;
    }
   
}

console.log(`O total de salarios dos homens é: ${totalHomens}`);
console.log(`O total de salarios das mulheres é: ${totalMulheres}`);

