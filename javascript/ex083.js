// Crie uma lógica que preencha um vetor de 20 posições com números
// aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
// números gerados e depois coloque o vetor em ordem crescente, mostrando no final
// os valores ordenados.

let arrNumeros = [];
let arrNumerosOrdenados = [];

for (let i = 0; i <=19; i++) {
    arrNumeros[i] = parseInt(Math.floor(Math.random() * (100 - 1) + 1));
    arrNumerosOrdenados[i] = arrNumeros[i];

    for (let j = 0; j < arrNumerosOrdenados.length; j++) {
        if (arrNumerosOrdenados[i] > arrNumerosOrdenados[j]) {
            let aux = arrNumerosOrdenados[i];
            arrNumerosOrdenados[i] = arrNumerosOrdenados[j];
            arrNumerosOrdenados[j] = aux;
        }
    }
}

console.log(`Array sem ordenar: [${arrNumeros}]`);
console.log(`Array Ordenado: [${arrNumerosOrdenados}]`);







