# Escreva um programa que leia um número qualquer e mostre a tabuada desse
# número, usando a estrutura “para”.
# Ex: Digite um valor: 5
# 5 x 1 = 5
# 5 x 2 = 10
# 5 x 3 = 15 ...

inputNumber = int(input("Digite um numero: "))

for number in range(1,11,1):
    print(f"{inputNumber} x {number} = {inputNumber*number}")