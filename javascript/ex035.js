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

var readline = require('readline-sync');

const carroAlugado = parseInt(readline.question(`Digite o tipo de carro alugado:  1-Popular 2-Luxo: `));
 const diasAluguel = parseInt(readline.question(`Digite o numero de dias que o carro ficara alugado: `));
 const kmPercorridos = parseFloat(readline.question(`Digite quantos kilometros percorreu: `));

if (carroAlugado === 1) {
    console.log("Carro Popular Selecionado");
        
    const aluguelDiario = diasAluguel * 90;
    if (kmPercorridos <= 100) {
      
      console.log(`O aluguel do carro será:  R$ ${aluguelDiario + (kmPercorridos * 0.20)}`);  
    }else{
        console.log(`O aluguel do carro será: R$ ${aluguelDiario + (kmPercorridos * 0.10)}`);
    } 
}else if(carroAlugado === 2){
    console.log("Carro de Luxo Selecionado");
    const aluguelDiario = diasAluguel * 150;
    if (kmPercorridos <= 200) {
        
        console.log(`O aluguel do carro será: R$ ${aluguelDiario + (kmPercorridos * 0.30)}`);  
      }else{
          console.log(`O aluguel do carro será: R$ ${aluguelDiario + (kmPercorridos * 0.25)}`);
      } 
}else{
    console.log("Opção invalida, encerrando...");
}