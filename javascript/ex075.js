// 75) Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 15 posições com os primeiros
//     elementos da sequência de Fibonacci:
//     1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
//     0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

let arr = [];

arr[0] = 1;
arr[1] = 1;

for (let i = 2; i < 15; i++) {
    // Fn = F(n-1) + F(n-2) 
    // arr[2] = arr[2-1] = (arr[1])1 + arr[2-2] = (arr[0])1 = 2
    // arr[3] = arr[3-1] = (arr[2])2 + arr[3-2] = (arr[1])1 = 3
    // arr[4] = arr[4-1] = (arr[3])3 + arr[4-2] = (arr[2])2 = 5
    arr[i] = arr[i-1] + arr[i-2];    
}

console.log(`[${arr}]`);


// let arr2 = [];

// for (let i = 2; i < 15; i++) {
//     arr2[0] = 1;
//     arr2[1] = 1;
//     // Fn = F(n-1) + F(n-2) 
//     // arr[2] = arr[2-1] = (arr[1])1 + arr[2-2] = (arr[0])1 = 2
//     // arr[3] = arr[3-1] = (arr[2])2 + arr[3-2] = (arr[1])1 = 3
//     // arr[4] = arr[4-1] = (arr[3])3 + arr[4-2] = (arr[2])2 = 5
//     arr2[i] = arr2[i-1] + arr2[i-2];    
// }

// console.log(`[${arr2}]`);

