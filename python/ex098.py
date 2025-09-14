# Crie um programa que tenha uma função SuperSomador(), que vai receber dois
# números como parâmetro e depois vai retornar a soma de todos os valores no
# intervalo entre os valores recebidos.
# Ex:
# SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
# SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85

def SuperSomador(valueOne,valueTwo):
    soma = 0
    for number in range(valueOne, valueTwo+1,1):
        soma += number
        print(f"{number}", end=" + ")
    
    return print(f" Resultado: {soma}")
        
    

def Main():
    firstValue = int(input("Digite um valor para o incio: "))
    secondValue = int(input("Digite outro valor para o fim: "))
    
    return SuperSomador(firstValue,secondValue)

Main()