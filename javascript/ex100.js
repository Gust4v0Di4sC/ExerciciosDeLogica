// Melhore o exercício 96, criando além da função Media() uma outra função
// chamada Situacao(), que vai retornar para o programa principal se o aluno está
// APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
// parâmetro o resultado retornado pela função Media().

var readline = require('readline-sync');


function medium(value1,value2){
   let result = (value1 + value2) / 2;
    return result;
}

function situation(result) {
   if (result >= 6.0) {
      return 'APROVADO'
   }else if (result >= 5.0 && result < 6.0) {
      return 'RECUPERAÇÃO'
   }else{
      return 'REPROVADO'
   }
}


function main(){
   let value1 = parseInt(readline.question("Digite uma nota: "));
   let value2 = parseInt(readline.question("Digite outra nota: "));
   
   return situation(medium(value1,value2));;
}

console.log(main());




