// Crie um aplicativo que mostre na tela a seguinte contagem:
// 0 3 6 9 12 15 18 Acabou!

let numero = 0;

while (numero <= 18) {
    //imprimir tudo na mesma linha
    process.stdout.write(numero + " ");
    numero += 3;
}
console.log("Acabou!");