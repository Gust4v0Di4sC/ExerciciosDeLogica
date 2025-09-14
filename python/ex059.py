# Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
# perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
# a) qual é a maior idade lida
# b) quantos homens foram cadastrados
# c) qual é a idade da mulher mais jovem
# d) qual é a média de idade entre os homens


sumMan = 0
sumWoman = 0
sumAge = 0
majorAge =0
youngestWoman = 999
inputGender = 0
inputAge = 0
avgAgeMan= 0
inputAnswer= 0

while True:
    inputGender =  int(input("Digite o seu genero: (1-Homem 2-Mulher)"))
    inputAge =  int(input("Digite a sua idade: "))
    
    if(inputAge > majorAge):
        majorAge = inputAge
        
    if(inputGender == 1):
        sumMan += 1
        sumAge += inputAge
    else:
        if(inputAge < youngestWoman):
            youngestWoman = inputAge
    
    
    

    print("Deseja continuar inserindo? 1-Não 2-Sim")
    inputAnswer= int(input("Digite sua opcão: "))
    if(inputAnswer == 1):
        avgAgeMan = sumAge/sumMan
        break
    else:
        continue
print(f"a) qual é a maior idade lida: {majorAge} \n b) quantos homens foram cadastrados: {sumMan} \n c) qual é a idade da mulher mais jovem: {youngestWoman} \n d) qual é a média de idade entre os homens: {avgAgeMan}")