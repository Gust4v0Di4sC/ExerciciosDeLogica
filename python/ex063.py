# Crie um programa usando a estrutura “faça enquanto” que leia vários números.
# A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
# tela:
# a) O somatório entre todos os valores
# b) Qual foi o menor valor digitado
# c) A média entre todos os valores
# d) Quantos valores são pares


sumValues = 0
sumValuesInputed = 0
inputNumber = 0
inputAnswer = 0
minorValue = 999
avgValues = 0
sumOdd = 0



while True:
    inputNumber =  int(input("Digite um numero: "))
    sumValues+=1
    sumValuesInputed += inputNumber
    
    if(inputNumber < minorValue):
        minor = inputNumber
    
    if(inputNumber % 2 == 0):
        sumOdd+=1

    print("Deseja continuar inserindo? 1-Sim 2-Não")
    if(inputAnswer == 1):
        break
    else:
        avgValues = sumValuesInputed/sumValues
        continue
print(f"a) O somatório entre todos os valores: {sumValuesInputed} \n b) Qual foi o menor valor digitado: {minorValue} \n c) A média entre todos os valores: {avgValues} \n d) Quantos valores são pares: {sumOdd}")