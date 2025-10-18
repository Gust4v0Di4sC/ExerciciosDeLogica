// Desenvolva um programa que mostre na tela a seguinte contagem:
// 100 95 90 85 80 ... 0 Acabou!

let numbValueFort : number = 105;


while (numbValueFort > 0) {
    numbValueFort -= 5;
    process.stdout.write(numbValueFort + " ");
}
console.log(` Acabou!`);