// Crie um programa que mostre na tela a seguinte contagem, usando a estrutura
// “faça enquanto”
// 0 3 6 9 12 15 18 21 24 27 30 Acabou!

let count : number = 0;

do {
    process.stdout.write(count + " ");
    count+=3;
} while (count <= 30);
console.log(" Acabou!");
