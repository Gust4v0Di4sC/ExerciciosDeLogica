// Crie uma lógica que leia um número inteiro e passe para um procedimento
// ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
// parâmetro é PAR ou ÍMPAR.


var readline = require('readline-sync');




function oddOrEven(value){

   if (value % 2 === 0) {
      return `O valor ${value} é par`;
   }else{
      return `O valor ${value} é impar`;
   }
}


function main() {
   let value = parseInt(readline.question("Digite um valor: "));
   oddOrEven(value);
}

console.log(main());





