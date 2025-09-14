// Crie um programa que tenha uma função SuperSomador(), que vai receber dois
// números como parâmetro e depois vai retornar a soma de todos os valores no
// intervalo entre os valores recebidos.
// Ex:
// SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
// SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85


var readline = require('readline-sync');


function superPlus(value1,value2){
   let result = 0;

   for (let i = value1; i <= value2; i++) {
      result+= i;
      process.stdout.write(`${i} + `)
   }

   return `A soma entre os valores no intervalo entre ${value1} e ${value2} é: ${result}`
}


function main(){
   let value1 = parseInt(readline.question("Digite um valor: "));
   let value2 = parseInt(readline.question("Digite outro valor: "));
   
   return superPlus(value1,value2);
}

console.log(main());




