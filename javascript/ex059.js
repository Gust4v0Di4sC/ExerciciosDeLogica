// Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
// perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
// a) qual é a maior idade lida
// b) quantos homens foram cadastrados
// c) qual é a idade da mulher mais jovem
// d) qual é a média de idade entre os homens

var readline = require('readline-sync');

let totalHomens = 0;
let maiorIdade = 0;
let menorIdadeMulher = 0;
let idadesHomens =0;

while (true) {
    let sexoPessoa = readline.question("Digite o seu sexo: ");
    let idadePessoa = parseInt(readline.question(`Seu sexo: ${sexoPessoa}, Digite sua idade: `));
    
    let resposta = parseInt(readline.question(`Deseja continuar ? 1- sim 2- não`));
    if(resposta === 1){
        console.log("continuando...");
    }else{
        console.log("encerrando....");
        break;
    }

    if (sexoPessoa === "Masculino") {
        totalHomens++;
        idadesHomens +=idadePessoa;
    }

    if (idadePessoa > maiorIdade) {
        maiorIdade = idadePessoa;
    }else if (idadePessoa < menorIdadeMulher && sexoPessoa === "Feminino") {
        menorIdadeMulher = idadePessoa;
    }
   
}

console.log(`A maior idade lida é: ${maiorIdade}`);
console.log(`A quantidade de homens cadastrados é: ${totalHomens}`);
console.log(`A idade da mulher mais jovem é: ${menorIdadeMulher}`);
console.log(`A media da idade entre os homens é: ${idadesHomens/totalHomens}`);

