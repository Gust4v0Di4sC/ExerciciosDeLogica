// Faça um algoritmo que mostre na tela a seguinte contagem:
// 10 9 8 7 6 5 4 3 Acabou!

let numbValueTwo : number = 11;
let result : string = "";

while (numbValueTwo >= 3) {
    numbValueTwo-=1;
    result += numbValueTwo + " ";
}
console.log(`${result} Acabou!`);
