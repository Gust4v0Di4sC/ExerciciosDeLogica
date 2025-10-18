// Escreva um programa que mostre na tela a seguinte contagem:
// 6 7 8 9 10 11 Acabou!


let numbValue : number = 5;
let resultado : string = "";

while (numbValue <= 10) {
    numbValue+=1;
    resultado += numbValue + " ";
}
console.log(`${resultado} Acabou!`);

