# Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
# valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
# contendo apenas os dados das pessoas menores de idade.

arrAges = [] 
arrNames = [] 

arrMinors = {}


for i in range(9):
    arrNames = input("Digite seu nome: ") 
    arrAges = int(input(f"Digite sua idade, senhor(a) {arrNames} : "))
    
    if(arrAges < 18):
        arrMinors[arrNames] = arrAges
        


print(f"{arrMinors}",end=", ")