// Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// 5 3 5 3 5 3 5 3 5 3
// 0 1 2 3 4 5 6 7 8 9

let arrOdds : number[] = new Array(10);

for (let i = 0; i < arrOdds.length; i++) {
    if (i % 2 === 0) {
        arrOdds[i] = 5;
    }else{
        arrOdds[i] = 3;
    }
}

console.log(`[${arrOdds}]`);