// Faça um programa que preencha automaticamente um vetor numérico com 8
// posições, conforme abaixo:
// 999 999 999 999 999 999 999 999
// 0 1 2 3 4 5 6 7



let arr = [];

for (let i = 0; i < 7; i++) {
    arr[i] = 999;
}
process.stdout.write(`[${arr}]`);


