// Crie um aplicativo que mostre na tela a seguinte contagem:
// 0 3 6 9 12 15 18 Acabou!

let numbValueThree : number = 0;


while (numbValueThree < 18) {
    numbValueThree += 3;
    process.stdout.write(numbValueThree + " ");
}
console.log(` Acabou!`);