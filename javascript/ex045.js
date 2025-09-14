// 45) O programa acima vai ter um problema quando digitarmos o primeiro valor
// maior que o último. Resolva esse problema com um código que funcione em qualquer
// situação

var readline = require('readline-sync');

let numeroInicial = parseInt(readline.question("Digite o valor Inicial da contagem: "));
let numeroFinal = parseInt(readline.question("Digite o valor Final da contagem: "));
let numeroIncremento = parseInt(readline.question("Digite o incremento da contagem: "));

if (numeroInicial < numeroFinal) {
   while (numeroInicial <= numeroFinal) {
        //imprimir tudo na mesma linha
        process.stdout.write(numeroInicial + " ");
        numeroInicial += numeroIncremento ;
    } 
}else{
    while (numeroInicial >= numeroFinal) {
        //imprimir tudo na mesma linha
        process.stdout.write(numeroInicial + " ");
        numeroInicial -= numeroIncremento ;
    }  
}

console.log("Acabou!");