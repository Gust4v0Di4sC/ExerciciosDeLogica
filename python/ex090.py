# Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
# valores para um procedimento Somador() que vai calcular e mostrar a soma entre
# eles.

def Somador():
    numberOne = int(input("Digite um numero: "))
    numberTwo = int(input("Digite outro numero: "))
    
    return print(f"Resultado: {numberOne + numberTwo}")

Somador()