# Refaça o exercício 90, só que agora em forma de função Somador(), que vai
# receber dois parâmetros e vai retornar o resultado da soma entre eles para o
# programa principal.

def SomadorPlus(numberOne, numberTwo):
    return print(f"Resultado: {numberOne + numberTwo}")

def Main():
    numberOne = int(input("Digite um numero: "))
    numberTwo = int(input("Digite outro numero: "))
    
    return SomadorPlus(numberOne, numberTwo)


Main()