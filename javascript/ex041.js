// 41) Desenvolva um programa que mostre na tela a seguinte contagem:
// 100 95 90 85 80 ... 0 Acabou!


let numero = 100;
while (numero >= 0) {
    //imprimir tudo na mesma linha
    process.stdout.write(numero + " ");
    numero -= 5;
}
console.log("Acabou!");