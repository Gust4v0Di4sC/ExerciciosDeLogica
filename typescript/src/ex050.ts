// Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
// mostre na tela:
// a) Quais foram os números sorteados
// b) Quantos números estão acima de 5
// c) Quantos números são divisíveis por 3

let randNumb : number = 0;
let countNm : number = 0;
let aboveFive : number = 0;
let divisibleThree : number = 0;


while (countNm < 20) {
    randNumb = Math.floor(Math.random() * (10 - 1) + 1);
    process.stdout.write(randNumb + " ");

    if (randNumb > 5) {
        aboveFive +=1;
    }

    if (randNumb % 3 === 0) {
        divisibleThree +=1;
    }

    countNm +=1;
}
console.log(`\n Numeros acima de 5: ${aboveFive}`);
console.log(` Numeros divisiveis por Tres: ${divisibleThree}`);