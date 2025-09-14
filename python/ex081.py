# Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
# final, mostre:a) Qual é a média de idade das pessoas cadastradas
# b) Em quais posições temos pessoas com mais de 25 anos
# c) Qual foi a maior idade digitada (podem haver repetições)
# d) Em que posições digitamos a maior idade

arr = [0] * 8
positionsOverTwenty = [0] * 8
positionsMajorAge = [0] * 8
avg = 0
sum = 0
majorAge = 0



for i in range(8):
    arr[i] = int(input(f"Fulano numero {i}, Digite sua idade: "))
    sum += arr[i]
    
    if(arr[i] > 25):
        positionsOverTwenty[i] = i
    
    if(arr[i] > majorAge):
        majorAge = arr[i]
        
    if(arr[i] == majorAge):
        positionsMajorAge[i] = i

    avg = sum/8


print(f"a) Qual é a média de idade das pessoas cadastradas: {avg} \n b) Em quais posições temos pessoas com mais de 25 anos: {positionsOverTwenty} \n c) Qual foi a maior idade digitada (podem haver repetições): {majorAge} \n d) Em que posições digitamos a maior idade: {positionsMajorAge}")