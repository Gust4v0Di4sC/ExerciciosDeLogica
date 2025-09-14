# Faça um programa usando a estrutura “faça enquanto” que leia a idade de
# várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
# não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
# na tela:
# a) Quantas idades foram digitadas
# b) Qual é a média entre as idades digitadas
# c) Quantas pessoas tem 21 anos ou mais.


sumAgePerson = 0
sumAge=0
inputAge = 0
inputAnswer = 0
avgAge = 0
aboveTwentyOne = 0

while True:
    inputAge = int(input("Digite a sua idade: "))

    sumAgePerson+=1
    sumAge+=inputAge
    
    if(inputAge >= 21):
        aboveTwentyOne+=1
    
    print("Deseja continuar inserindo? 1-Sim 2-Não")
    if(inputAnswer == 1):
        continue
    else:
        avgAge = sumAge/sumAgePerson
        break
print(f"a) Quantas idades foram digitadas: {sumAgePerson} \n b) Qual é a média entre as idades digitadas: {avgAge} \n c) Quantas pessoas tem 21 anos ou mais: {aboveTwentyOne}")


