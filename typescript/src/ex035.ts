// Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
// aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
// carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
// que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
// quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
// tabela a seguir:
// - Carros populares (aluguel de R$90 por dia)
// - Até 100Km percorridos: R$0,20 por Km
// - Acima de 100Km percorridos: R$0,10 por Km
// - Carros de luxo (aluguel de R$150 por dia)
// - Até 200Km percorridos: R$0,30 por Km
// - Acima de 200Km percorridos: R$0,25 por Km

var readline = require('readline-sync')

let typeCarRent : number = parseInt(readline.question("Digite o tipo de carro alugado: 1-popular 2-luxo"));
let quantDaysRent : number = parseInt(readline.question("Quantos dias o carro foi alugado: "));
let kilometersPerc : number = parseFloat(readline.question("Quantos kilometros foram percorridos: "));

let priceRentPop : number = 90 * quantDaysRent;
let priceRentLux : number = 150 * quantDaysRent;

switch (typeCarRent) {
    case 1:
        if (kilometersPerc <= 100) {
            console.log(`Voce percorreu ${kilometersPerc} km`);
            console.log(`preço a pagar pelo aluguel: ${priceRentPop + 0.20 * kilometersPerc}`);
        }else{
            console.log(`Voce percorreu ${kilometersPerc} km`);
            console.log(`preço a pagar pelo aluguel: ${priceRentPop + 0.10 * kilometersPerc}`);
        }
        break;
    case 2:
        if (kilometersPerc <= 200) {
            console.log(`Voce percorreu ${kilometersPerc} km`);
            console.log(`preço a pagar pelo aluguel: ${priceRentLux + 0.30 * kilometersPerc}`);
        }else{
            console.log(`Voce percorreu ${kilometersPerc} km`);
            console.log(`preço a pagar pelo aluguel: ${priceRentPop + 0.25 * kilometersPerc}`);
        }
        break;

    default:
        console.log("Opção invalida!!");
        break;
}


