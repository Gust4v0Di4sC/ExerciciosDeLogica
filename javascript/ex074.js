// Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//     5 3 5 3 5 3 5 3 5 3
//     0 1 2 3 4 5 6 7 8 9

let arr = [];

for (let i = 0; i < 10; i++) {

    if(i % 2 === 0){
        arr[i] = 5
    }else{
        arr[i] = 3
    }
}

console.log(`[${arr}]`);


let arr2 = [];

for (let i = 0; i < 10; i++) {
    
    i % 2 === 0 ? arr2[i]= 5 : arr2[i] = 3;
}

console.log(`[${arr2}]`);

