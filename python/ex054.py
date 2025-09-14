# Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
# no final:
# a) Qual foi a média de altura do grupo
# b) Quantas pessoas pesam mais de 90Kg
# c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
# d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg

counter = 1
sum = 0
inputWeight = 0
inputHeight = 0
avgHeight = 0
aboveNinety = 0
belowFifty = 0
aboveHundred = 0

while counter <= 7:
    inputWeight = float(input(f"Digite o seu peso pessoa {counter}: "))
    inputHeight = float(input(f"Digite a sua altura pessoa {counter}: "))
    if(inputWeight> 90):
        aboveNinety+=1
    
    if(inputWeight< 50 and inputHeight < 1.60):
        belowFifty+=1
    
    if(inputHeight> 1.90 and inputWeight > 100):
        aboveHundred+=1
    sum += inputHeight
    avgHeight = sum / 7
    counter+=1
print(f"a) Qual foi a média de altura do grupo: {avgHeight} \n b) Quantas pessoas pesam mais de 90Kgd: {aboveNinety} \n c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m: {belowFifty} \n d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg: {aboveHundred}")