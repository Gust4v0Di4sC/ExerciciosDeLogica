// Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
// O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
// a) O nome da pessoa mais velha
// b) O nome da mulher mais jovem
// c) A média de idade do grupo
// d) Quantos homens tem mais de 30 anos
// e) Quantas mulheres tem menos de 18 anos

var readline = require('readline-sync');

let maisVelha = 0;
let nomeMaisVelha;
let maisJovem = 999;
let nomeMaisJovem;
let totalMulherDezoito = 0;
let totalHomemTrinta = 0;
let totalIdade = 0;
let totalPessoas = 0;

while (true) {
    let nomePessoa = readline.question("Digite o seu nome: ");
    let sexoPessoa = readline.question(`Olá ${nomePessoa} Digite seu sexo: `);
    let idadePessoa = parseInt(readline.question(`Seu sexo: ${sexoPessoa}, Digite sua idade: `));
    
    let resposta = parseInt(readline.question(`Deseja continuar ? 1- sim 2- nao`));
    if(resposta === 1){
        console.log("continuando...");
    }else{
        console.log("encerrando....");
        break;
    }

    if (idadePessoa > maisVelha) {
        maisVelha = idadePessoa;
        nomeMaisVelha = nomePessoa;
    }else if(idadePessoa < maisJovem && sexoPessoa === "Feminino"){
        nomeMaisJovem = nomePessoa;
    }

    if (idadePessoa > 30 && sexoPessoa === "Masculino") {
        totalHomemTrinta++;
    }
     if (idadePessoa < 18 && sexoPessoa === "Feminino") {
        totalMulherDezoito++;
    }
   totalIdade += idadePessoa;
   totalPessoas++;
}

console.log(`O nome da pessoa mais velha é: ${nomeMaisVelha}`);
console.log(`O nome  da mulher mais jovem é: ${nomeMaisJovem}`);
console.log(`A quantidade de mulheres que tem menos de 18 anos é: ${totalMulherDezoito}`);
console.log(`A quantidade de homens com mais de 30 anos é: ${totalHomemTrinta}`);
console.log(`A media da idade das pessoas é: ${totalIdade/totalPessoas}`);

