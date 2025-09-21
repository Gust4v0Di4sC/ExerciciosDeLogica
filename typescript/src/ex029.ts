// Desenvolva um programa que leia o nome de um funcionário, seu salário,
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
// acordo com a tabela a seguir:
// - Até 3 anos de empresa: aumento de 3%
// - entre 3 e 10 anos: aumento de 12.5%
// - 10 anos ou mais: aumento de 20%

var readline = require('readline-sync')

let nomeInput : string = readline.question("Digite o seu nome: ");
let salarioInput : number = Number(readline.question("Digite seu salario: "));
let anosInput : number = Number(readline.question("Digite a quantos anos trabalha na empresa: "));



if (anosInput <= 3) {
    let aumentoSal = salarioInput + (salarioInput * 3)/100;
    console.log(`Olá ${nomeInput}, você trabalha há ${anosInput} anos na empresa, recebeu um aumento de 3%, salario anterior: ${salarioInput} | Novo salario: ${aumentoSal}`);
}else if (anosInput > 3 && anosInput <= 10){
    let aumentoSal = salarioInput + (salarioInput * 12.5)/100;
    console.log(`Olá ${nomeInput}, você trabalha há ${anosInput} anos na empresa, recebeu um aumento de 12.5%, salario anterior: ${salarioInput} | Novo salario: ${aumentoSal}`);
}else{
    let aumentoSal = salarioInput + (salarioInput * 20)/100;
    console.log(`Olá ${nomeInput}, você trabalha há ${anosInput} anos na empresa, recebeu um aumento de 20%, salario anterior: ${salarioInput} | Novo salario: ${aumentoSal}`);
}
