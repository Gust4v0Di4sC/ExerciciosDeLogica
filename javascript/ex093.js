// Faça um programa que tenha um procedimento chamado Contador() que recebe
// três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
// programa principal deve solicitar a digitação desses valores e passá-los ao
// procedimento, que vai mostrar a contagem na tela.

// Ex: Para os valores de início (4), fim (20) e incremento(3) teremos
// Contador(4, 20, 3) vai mostrar na tela 4 >> 7 >> 10 >> 13 >> 16 >> 19 >> FIM

var readline = require('readline-sync');




function counter(start,end,increment){
   if (start < end) {
      for (let i = start; i < end; i+=increment) {
         process.stdout.write(`${i} >> `);
      }
   }else{
      for (let i = start; i > end; i-=increment) {
         process.stdout.write(`${i} >> `);
      }
   }
   
   console.log("FIM");
}

function main() {
   console.log("Digite valores para formar uma contagem");

   let startValue = parseInt(readline.question("Digite um valor para o inicio: "));
   let endValue = parseInt(readline.question("Digite um valor para o fim: "));
   let incrementValue = parseInt(readline.question("Digite um valor para o incremento: "));
   
   return counter(startValue,endValue,incrementValue);
}


console.log(main());





