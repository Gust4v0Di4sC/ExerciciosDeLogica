# Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
# na tela uma das mensagens abaixo:
# - O primeiro valor é o maior
# - O segundo valor é o maior
# - Não existe valor maior, os dois são iguais


firstNumber = int(input("Digite um numero inteiro: "))
secondNumber = int(input("Digite outro numero inteiro: "))

if(firstNumber > secondNumber):
    print(f"O valor {firstNumber} é maior")
elif(secondNumber > firstNumber):
    print(f"O valor {secondNumber} é maior")
else:
    print(f"Não existe valor maior, os dois são iguais")

