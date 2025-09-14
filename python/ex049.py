# Crie um programa que leia 6 números inteiros e no final mostre quantos deles
# são pares e quantos são ímpares.


counter = 0
odd = 0
even = 0

while counter <= 5:
    inputNumber = int(input("Digite um numero inteiro: "))
    if(inputNumber % 2 == 0):
        odd+=1
    else:
        even+=1
    counter+=1
print(f"Numeros pares: {odd} \n Numeros Impares: {even}")