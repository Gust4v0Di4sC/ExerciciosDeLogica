// [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
// PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
// a soma entre todos os valores da sequência.
// an = a1 + (n - 1) . r
// Sn = (a1 + an).n/2

var readline = require('readline-sync');


let somaValores = 0;
let ultimoTermo = 0;
let primeiroTermo = parseInt(readline.question("Digite o Primeiro termo de uma PA:  "));
let razaoProg = parseInt(readline.question("Digite a razao da PA: "));

for (let i = 1; i <= 10; i++) {
    let pa =0;
    process.stdout.write(`${pa = primeiroTermo + (i - 1)* razaoProg}` + " ");

    if (i === 10) {
        ultimoTermo = pa;
    }
}

somaValores+= (primeiroTermo + ultimoTermo) * 10/2;
console.log(`\n Soma de todos os termos: ${somaValores}`);


