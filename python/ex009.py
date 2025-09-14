# Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
# e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
import requests

# Função para obter a cotação do dólar
def get_dollar_exchange_rate():
    url = "https://economia.awesomeapi.com.br/json/last/USD-BRL"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return float(data["USDBRL"]["bid"])
    return None

# Função para converter reais em dólares
def convert_currency(amount, exchange_rate):
    return round(amount / exchange_rate, 2)

money = float(input("Digite um valor em reais: "))
exchange_rate = get_dollar_exchange_rate()

if exchange_rate:
    converted_value = convert_currency(money, exchange_rate)
    print(f"💰 Cotação atual: U$ 1,00 : R$ {exchange_rate}")
    print(f"💵 {money} reais equivalem a ${converted_value} dólares.")
