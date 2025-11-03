// Crie um programa que preencha automaticamente um vetor numérico com 7
// números gerados aleatoriamente pelo computador e depois mostre os valores
// gerados na tela.

let arrRand : number[] = new Array(8);



for (let i = 0; i < arrRand.length; i++) {
    let randNum : number = Math.floor(Math.random() * (10 - 1) + 1)
    arrRand[i] = randNum;
}

console.log(`[${arrRand}]`);
