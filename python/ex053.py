# Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
# a) Quantos homens foram cadastrados
# b) Quantas mulheres foram cadastradas
# c) A média de idade do grupo
# d) A média de idade dos homens
# e) Quantas mulheres tem mais de 20 anos

counter = 1
quantMens = 0
quantWomans = 0
avgAge = 0
avgMens = 0
inputAge = 0
inputGender = 0
aboveTwentyWomans = 0
sum = 0
sumMens = 0

while counter <= 5:
    inputAge = int(input(f"Digite a sua idade pessoa {counter}: "))
    inputGender = int(input(f"Digite o seu genero {counter}(1- man 2- woman): "))
    if(inputGender == 1):
        quantMens+=1
    elif(inputGender == 2):
        quantWomans+=1
        if(inputAge > 20):
            aboveTwentyWomans+=1
    else:
        print("Error 404")
        
    sumMens += quantMens
    sum += inputAge
    avgAge = sum / 5
    avgMens = sumMens / quantMens
    counter+=1
print(f"a) Quantos homens foram cadastrados: {quantMens} \n b) Quantas mulheres foram cadastradas: {quantWomans} \n c) A média de idade do grupo: {avgAge} \n d) A média de idade dos homens: {avgMens} \n e) Quantas mulheres tem mais de 20 anos: {aboveTwentyWomans}")
