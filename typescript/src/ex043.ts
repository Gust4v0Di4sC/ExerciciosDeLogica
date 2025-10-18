// Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
// marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
// 30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...


let inputNumb : number = 30;


while (inputNumb > 1) { 
    if (inputNumb % 4 === 0) {
        process.stdout.write(`[${inputNumb}] `);
    }else{
       process.stdout.write(inputNumb + " "); 
    }
    inputNumb -= 1;
}
console.log(` Acabou!`);