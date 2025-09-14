# Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
# 8 + 10 + 12 + 14 + ... + 98 + 100

counter = 6
soma = 0

while counter <=100:
    print(f"{counter} +", end=" ")
    soma += counter
    counter+=1
print(f"= {soma}")