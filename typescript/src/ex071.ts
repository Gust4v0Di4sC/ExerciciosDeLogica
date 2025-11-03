// Faça um programa que preencha automaticamente um vetor numérico com 8
// posições, conforme abaixo:
// 999 999 999 999 999 999 999 999
// 0 1 2 3 4 5 6 7


let vetInput : number[] = new Array(8);

for (let i = 0; i < vetInput.length; i++) {
    vetInput[i] = 999;
}

console.log(`[${vetInput}]`);
