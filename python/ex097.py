# Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
# adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
# maior entre eles.

def Maior(valueOne,valueTwo,valueThree):
    
    if(valueOne > valueTwo and valueOne > valueThree):
        return print(f"O maior valor é: {valueOne}")
    elif(valueTwo > valueOne and valueTwo > valueThree):
        return print(f"O maior valor é: {valueTwo}")
    elif(valueThree > valueOne and valueThree > valueTwo):
        return print(f"O maior valor é: {valueThree}")
    else:
        return print("Os três valores são iguais")

def Main():
    firstValue = int(input("Digite um valor: "))
    secondValue = int(input("Digite outro valor: "))
    thirdValue = int(input("Digite outro valor: "))
    
    return Maior(firstValue,secondValue,thirdValue)

Main()