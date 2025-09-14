// Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
// valores para um procedimento Maior() que vai verificar qual deles é o maior e
// mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
// informando essa característica.

var readline = require('readline-sync');

let value1 = parseInt(readline.question("Digite um valor: "));
let value2 = parseInt(readline.question("Digite outro valor: "));

function majorValue(value1,value2){
   if (value1 > value2) {
      return `O valor ${value1} é maior`;
   }else if ( value2 > value1){
      return `O valor ${value2} é maior`;
   }else{
      return `Os valores ${value1} e ${value2} são iguais`;
   }
}

console.log(majorValue(value1,value2));





