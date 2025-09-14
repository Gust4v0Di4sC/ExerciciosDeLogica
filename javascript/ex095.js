// Refaça o exercício 90, só que agora em forma de função Somador(), que vai
// receber dois parâmetros e vai retornar o resultado da soma entre eles para o
// programa principal.

var readline = require('readline-sync');




function plusOperator(value1,value2){
   let result = value1 + value2;
    return `A soma entre ${value1} e ${value2} é ${result}`;
}

function main(){
   let value1 = parseInt(readline.question("Digite um valor: "));
   let value2 = parseInt(readline.question("Digite outro valor: "));
   
   return plusOperator(value1,value2);
}

console.log(main());




