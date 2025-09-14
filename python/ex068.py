# Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
# “para”. No final, mostre na tela:
# a) Quantas mulheres foram cadastradas
# b) Quantos homens pesam mais de 100Kg
# c) A média de peso entre as mulheres
# d) O maior peso entre os homens

inputWeight = 0
qtdWomen = 0
qtdWeightWomen = 0
qtdMenOneHundred = 0
avgWeightWomen = 0
majorWeightMen = 0


for number in range(0,8,1):
    inputGender = int(input("Digite o seu sexo:  (1-Masculino 2-Feminino)"))
    inputWeight = float(input("Digite o seu peso: "))
    
    if(inputGender == 2):
        qtdWomen += 1
        qtdWeightWomen += inputWeight
    
    if(inputGender == 1 and inputWeight > 100):
        qtdMenOneHundred += 1
    
    if(inputWeight > majorWeightMen and inputGender == 1):
        majorWeightMen = inputWeight
    
    avgWeightWomen = qtdWomen / qtdWeightWomen
print(f"a) Quantas mulheres foram cadastradas: {qtdWomen} \n b) Quantos homens pesam mais de 100Kg: {qtdMenOneHundred} \n c) A média de peso entre as mulheres: {avgWeightWomen} \n d) O maior peso entre os homens: {majorWeightMen}")