# Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
# 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
# número (chave) e seu programa deve mostrar em que posições essa chave foi
# encontrada. Mostre também quantas vezes a chave foi sorteada.

import random

arr = [0] * 30
positions = [0] * 30
qtdKeys = 0
inputUser = 0

print("Digite o numero chave: ")
inputUser = int(input("Digite: "))

for i in range(30):
    arr[i] = random.randrange(15)
    
    if(inputUser == arr[i]):
        positions[i] = i
        qtdKeys +=1



print(f"{arr}")
print(f"Posições onde a chave foi sorteada: {positions}")
print(f"Quantidade de vezes que a chave foi sorteada: {qtdKeys}")