// Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
// valores para um procedimento Somador() que vai calcular e mostrar a soma entre
// eles.

var readline = require('readline-sync');

let value1 = parseInt(readline.question("Digite um valor: "));
let value2 = parseInt(readline.question("Digite outro valor: "));

function plusOperator(value1,value2){
   let result = value1 + value2;
   return console.log(`A soma entre ${value1} e ${value2} é ${result}`);
}


plusOperator(value1,value2);





