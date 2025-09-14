# Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
# O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
# a) O nome da pessoa mais velha
# b) O nome da mulher mais jovem
# c) A média de idade do grupo
# d) Quantos homens tem mais de 30 anos
# e) Quantas mulheres tem menos de 18 anos


sumAge = 0
sumPerson = 0
inputName = ""
majorAge = 0
youngestAge  = 999
inputAge = 0
inputGender = 0
inputAnswer = 0
oldestPerson = ""
youngestWoman = ""
aboveThirty = 0
belowEighteeen = 0
avgPerson = 0



while True:
    inputName = input("Digite o seu nome: ")
    inputGender =  int(input("Digite o seu genero: (1-Homem 2-Mulher)"))
    inputAge =  int(input("Digite a sua idade: "))
    
    sumAge+= inputAge
    sumPerson+=1
    
    if(inputAge > majorAge):
        majorAge = inputAge
        
    if(inputGender == 2):
        if(inputAge < youngestAge):
            youngestAge = inputAge
        if(inputAge == youngestAge):
            youngestWoman = inputName
    
    if(inputAge == majorAge):
        oldestPerson = inputName
    
    
    if(inputGender == 1):
        if(inputAge > 30):
            aboveThirty+=1
    else:
        if(inputAge < 18):
            belowEighteeen+=1

    print("Deseja continuar inserindo? 1-Não 2-Sim")
    inputAnswer = int(input("Digite uma reposta: "))
    if(inputAnswer == 1):
        avgPerson = sumAge/sumPerson
        break
    else:
        continue
print(f" a) O nome da pessoa mais velha: {oldestPerson} \n b) O nome da mulher mais jovem: {youngestWoman} \n c) A média de idade do grupo: {avgPerson} \n d) Quantos homens tem mais de 30 anos: {aboveThirty} \n e) Quantas mulheres tem menos de 18 anos: {belowEighteeen}")