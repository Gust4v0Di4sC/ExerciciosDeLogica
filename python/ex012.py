#  Crie um programa que leia o preço de um produto, calcule e mostre o seu
# PREÇO PROMOCIONAL, com 5% de desconto.

price = float(input("Digite o preço do produto: "))

pricePromotional = (price * 5)/100
priceDiscount = price - pricePromotional


print(f"O valor original do produto é: {price} , seu preço promocional com 5% de deconto é: {priceDiscount}")
