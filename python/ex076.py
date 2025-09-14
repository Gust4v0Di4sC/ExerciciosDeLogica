# Crie um programa que preencha automaticamente um vetor numérico com 7
# números gerados aleatoriamente pelo computador e depois mostre os valores
# gerados na tela

import random

arr = [0] * 7



for i in range(7):
    arr[i] = random.randrange(7)
print(f"{arr}")