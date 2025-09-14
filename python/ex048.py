# Faça um programa que leia 7 números inteiros e no final mostre o somatório
# entre eles.

counter = 0
inputNumber = 0
totalSum = 0

while counter <= 6:
    inputNumber = int(input("Digite um numero inteiro: "))
    totalSum+= inputNumber
    counter+=1
print(f"A soma de todos os numeros é {totalSum}")