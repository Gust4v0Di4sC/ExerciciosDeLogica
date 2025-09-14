// Faça um programa que possua uma função chamada Potencia(), que vai receber
// dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
// exponenciação.
// Ex: Potencia(5,2) vai calcular 52 = 25

var readline = require('readline-sync');


function powerNumber(base,expoent){
   let result = 1;

   for (let i = 1; i <= expoent; i++) {
      result*= base;
   }

   return `A potencia de ${base} elevado a ${expoent} potencia é: ${result}`
}


function main(){
   let value1 = parseInt(readline.question("Digite um valor: "));
   let value2 = parseInt(readline.question("Digite outro valor: "));
   
   return powerNumber(value1,value2);
}

console.log(main());




