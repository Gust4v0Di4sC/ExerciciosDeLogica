// Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
// adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
// maior entre eles.


var readline = require('readline-sync');


function majorValue(value1,value2,value3){
   if (value1 > value2 && value1 > value3) {
      return `O valor ${value1} é maior`;
   }else if ( value2 > value1 && value2 > value3){
      return `O valor ${value2} é maior`;
   }else if (value3 > value1 && value3 > value2) {
      return `O valor ${value3} é maior`;
   }{
      return `Os valores ${value1} , ${value2} e ${value3} são iguais`;
   }
}


function main(){
   let value1 = parseInt(readline.question("Digite um valor: "));
   let value2 = parseInt(readline.question("Digite outro valor: "));
   let value3 = parseInt(readline.question("Digite mais um valor: "));
   
   return majorValue(value1,value2,value3);
}

console.log(main());




