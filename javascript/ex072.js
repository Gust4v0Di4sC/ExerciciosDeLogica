// Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// [5,10,15,20,25,30,35,40,45,50]


let arr = [];

for (let i = 0; i < 10; i++) {
    // Soma mais 1 a cada passagem de posição no array
    // 0 = 5 * (0 + 1) = 5...
    arr[i] =  5*(i+1);
}

console.log(`[${arr}]`);


// let arr2 = [];

// for (let i = 1; i <= 10; i+=1) {
//     arr2[i] = 8 * i;
// }

// console.log(`[${arr2}]`);


let arr3 = [];

for (let i = 0; i < 10; i++) {
    // Soma mais 1 a cada passagem de posição no array
    // 0 = 5 * (0 + 1) = 5...
    let incrementoIndice = (i + 1);
    
    arr3[i] = 5* incrementoIndice;
}

console.log(`[${arr3}]`);
