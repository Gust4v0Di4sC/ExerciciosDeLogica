// O programa acima vai ter um problema quando digitarmos o primeiro valor
// maior que o último. Resolva esse problema com um código que funcione em qualquer
// situação.

var readline = require('readline-sync')

let startValueX : number = parseInt(readline.question("Digite o valor inicial: "));
let finalValueX : number = parseInt(readline.question("Digite o valor final: "));
let incrementValueX : number = parseInt(readline.question("Digite o valor do incremento: "));

if (startValueX > finalValueX) {
    while (startValueX >= finalValueX) {
      process.stdout.write(startValueX + " ");
      startValueX -= incrementValueX;
    }
}else{
    while (startValueX <= finalValueX) {
      process.stdout.write(startValueX + " ");
      startValueX += incrementValueX;
    }
}
console.log(` Acabou!`);