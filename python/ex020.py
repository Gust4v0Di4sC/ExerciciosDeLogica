# Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
# ÍMPAR.

numberInput = int(input("Digite um número inteiro: "))

if(numberInput % 2 == 0):
    print(f"O número {numberInput} é par")
else: 
    print(f"O número {numberInput} é impar")

