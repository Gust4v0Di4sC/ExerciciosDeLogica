// Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
// um aluno e retornar a sua média para o programa principal.

var readline = require('readline-sync');



function medium(value1,value2){
   let result = (value1 + value2) / 2;
    return `A media entre ${value1} e ${value2} é ${result}`;
}

function main(){
   let value1 = parseFloat(readline.question("Digite uma nota: "));
   let value2 = parseFloat(readline.question("Digite outra nota: "));
   
   return medium(value1,value2);
}

console.log(main());




