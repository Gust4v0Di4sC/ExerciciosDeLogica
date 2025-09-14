// Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//     9 8 7 6 5 4 3 2 1 0
//     0 1 2 3 4 5 6 7 8 9

let arr = [];

for (let i = 0; i < 10; i++) {
    // 0 = 10 - (0 + 1) = 9
    arr[i] = 10 - (i + 1);
}

console.log(`[${arr}]`);

// let arr2 = [];

// for (let i = 0; i < 10; i++) {
//     // i = 0 : (i + 1) :  i = 1;
//     // i = 1 : (i + 1) :  i = 2;
//     let incrementoIndice = (i + 1);

//     // arr[0] = 10 - 1 = 9
//     // arr[1] = 10 - 2 = 8
//     arr2[i] = 10 - incrementoIndice;
// }

// console.log(`[${arr2}]`);

