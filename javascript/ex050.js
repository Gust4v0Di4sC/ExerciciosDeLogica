// Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
// mostre na tela:
// a) Quais foram os números sorteados
// b) Quantos números estão acima de 5
// c) Quantos números são divisíveis por 3

let numeroInicial = 1;


let acimaCinco = 0;
let divisivelTres = 0;


while (numeroInicial <= 20) {
    let numeroSorteado = Math.floor(Math.random() * (11 - 1) + 1);
    
    if (numeroSorteado > 5) {
        acimaCinco ++;
    }else if( numeroSorteado % 3 == 0){
        divisivelTres++;
    }
    console.log(`Numero Sorteado: ${numeroSorteado}`);
    numeroInicial++;
} 
console.log(`\n Existem ${acimaCinco} números acima de 5 \n , ${divisivelTres} números são divisiveis por 3 no intervalo sorteado`);


