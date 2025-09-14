// [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
// de Fibonacci:
// 1 1 2 3 5 8 13 21

// Fn = Fn -1 + Fn -2


let fib1=1, fib2=1, temp =0;
process.stdout.write(`${fib1} ${fib2} `);

for (let i = 2; i <= 10; i++) {

    //somar e atribuir novo termo
    temp = fib1 + fib2

    //receber os dois ultimos termos
    fib1 = fib2
    fib2 = temp
    
    process.stdout.write(`${temp}` + " ");
}



