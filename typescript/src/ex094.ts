// [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
// Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
// termos da sequência serão mostrados na tela. O seu procedimento deve receber
// esse valor e mostrar a quantidade de elementos solicitados.
// Obs: Use os exercícios 70 e 75 para te ajudar na solução
// Ex:
// Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
// Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM







var readline = require('readline-sync');


function FibMethod(terms: number) {
    let arrFib : number[] = new Array(terms);
    
    arrFib[0] = 1;
    arrFib[1] = 1;

    for (let i: number = 2; i < arrFib.length; i++) {
      arrFib[i] = arrFib[i - 1] + arrFib[i - 2];
    }

    for (const i of arrFib) {
        process.stdout.write(i + " >> ");
    }
    process.stdout.write(" FIM");
}

function MainMethodM(){
    let valueOne:number = parseInt(readline.question("Digite um valor: "));

    console.log(FibMethod(valueOne));
}



MainMethodM();
