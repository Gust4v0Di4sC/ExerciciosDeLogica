// Crie uma lógica que leia um número inteiro e passe para um procedimento
// ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
// parâmetro é PAR ou ÍMPAR.

var readline = require('readline-sync');


function OddOrEven(valueOne: number) {
    if (valueOne % 2 === 0) {
        return "Par";
    }else{
        return "Impar";
    }
}

function MainFunc(){
    let valueOne:number = parseInt(readline.question("Digite um valor: "));

    console.log(OddOrEven(valueOne));
}

MainFunc();
