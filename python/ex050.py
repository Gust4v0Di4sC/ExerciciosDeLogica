# Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
# mostre na tela:
# a) Quais foram os números sorteados
# b) Quantos números estão acima de 5
# c) Quantos números são divisíveis por 3

import random

dividedBy3 = 0
aboveFive = 0
counter = 1

while counter <= 20:
    randNumbers = random.randrange(0,11) 
    if(randNumbers > 5):
        aboveFive+=1
        
    if(randNumbers % 3 == 0):
        dividedBy3+=1
    counter+=1
    print(f"Numeros sorteados: {randNumbers}")
print(f"Numeros acima de cinco: {aboveFive} \n Numeros divisiveis por 3: {dividedBy3}")