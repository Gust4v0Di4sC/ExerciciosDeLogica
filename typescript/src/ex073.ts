// Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// 9 8 7 6 5 4 3 2 1 0

let arrNumbs : number[] = new Array(10);

for (let i = 0; i < arrNumbs.length; i++) {
    arrNumbs[i] = 8 - (i-1);
   
}
console.log(`[${arrNumbs}]`);