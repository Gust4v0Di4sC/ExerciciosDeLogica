// [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
// Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
// termos da sequência serão mostrados na tela. O seu procedimento deve receber
// esse valor e mostrar a quantidade de elementos solicitados.
// Obs: Use os exercícios 70 e 75 para te ajudar na solução
// Ex:
// Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
// Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM
// Fn = fn-1 + fn-2

var readline = require('readline-sync');


function fibonacci(value) {
   let result = [0,1];

   process.stdout.write(`${result[1]} >> `);
   for (let i = 2; i <= value ; i++) {
     let a = result[i-1];
     let b = result[i-2];

     result.push(a+b);

     process.stdout.write(`${result[i]} >> `);
   }

   console.log("FIM");
}


function main() {
   console.log("Digite um valor para gerar termos da Fibonacci");

   let value = parseInt(readline.question("Digite um valor: "));
   
   return fibonacci(value);
}


console.log(main());





