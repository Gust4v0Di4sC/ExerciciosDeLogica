# Faça um programa que possua uma função chamada Potencia(), que vai receber
# dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
# exponenciação.
# Ex: Potencia(5,2) vai calcular 52 = 25

def Power(valueBase,valueExponent):
    result = valueBase
    for number in range(1, valueExponent,1):
        result *= valueBase
    
    return print(f"Potencia de {valueBase} elevado a {valueExponent} = {result}")
    

def Main():
    firstValue = int(input("Digite um valor: "))
    secondValue = int(input("Digite outro valor: "))
    
    return Power(firstValue,secondValue)

Main()