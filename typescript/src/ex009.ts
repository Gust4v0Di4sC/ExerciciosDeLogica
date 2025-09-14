// Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

var readline = require('readline-sync')

const apiDolar: string = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

interface CotacaoDolar {
  USDBRL: {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
  };
}

async function obterDados() : Promise<void> {
    try {
      const response : Response = await fetch(apiDolar);


      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }


      const data : CotacaoDolar = await response.json();
      const valores =data.USDBRL;

      const dolarAtual : number = parseFloat(valores.bid);

      const seuDinheiro : number =  parseFloat(readline.question("Digite quanto dinheiro você tem em reais: "))

      console.log(`De acordo com a cotação atual do dolar você pode comprar: ${(seuDinheiro/dolarAtual).toFixed(1)} USD`);
    
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  

 obterDados();