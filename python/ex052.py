# Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
# a) Qual é a média de idade do grupo
# b) Quantas pessoas tem mais de 18 anos
# c) Quantas pessoas tem menos de 5 anos
# d) Qual foi a maior idade lida

counter = 1
avgAge = 0
aboveEighteen = 0
belowFive = 0
majorAge = 0
inputAge = 0
soma = 0

while counter <= 10:
    inputAge = int(input(f"Digite a sua idade pessoa {counter}: "))
    if (inputAge > 18):
        aboveEighteen+=1
    
    if(inputAge < 5):
        belowFive+=1
    
    if(inputAge > majorAge):
        majorAge = inputAge
    
    soma += inputAge
    avgAge = soma/10
    counter+=1
print(f" a) Qual é a média de idade do grupo: {avgAge} \n b) Quantas pessoas tem mais de 18 anos: {aboveEighteen} \n c) Quantas pessoas tem menos de 5 anos: {belowFive} \n d) Qual foi a maior idade lida: {majorAge}")