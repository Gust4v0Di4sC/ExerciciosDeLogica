// Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

var readline = require('readline-sync')

const apiDolar = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'

async function obterDados() {
    try {
      const response = await fetch(apiDolar);
      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.statusText);
      }
      const data = await response.json();
      const valores =data.USDBRL;
      const dolarAtual = parseFloat(valores.bid);

      const seuDinheiro =  parseFloat(readline.question("Digite quanto dinheiro você tem em reais: "))

    console.log(`De acordo com a cotação atual do dolar você pode comprar: ${(seuDinheiro/dolarAtual).toFixed(1)} `);
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  

 obterDados();