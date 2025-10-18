// Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
// 8 + 10 + 12 + 14 + ... + 98 + 100.

let startNum : number = 6;
let totalNumb : number = 0;


while (startNum < 100) {
    process.stdout.write(startNum + " + ");
    startNum += 2;
    totalNumb+=startNum;
}
console.log(` = ${totalNumb}`);