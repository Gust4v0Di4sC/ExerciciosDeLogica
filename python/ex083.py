# [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
# aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
# números gerados e depois coloque o vetor em ordem crescente, mostrando no final
# os valores ordenados.

import random

arr = [0] * 20


for index in range(20):
    arr[index] = random.randrange(99)

def bubble_sort(arr):
    for normal in range(len(arr) -1, 0,-1):
        
        swapped = False
        
        for sortex in range(normal):
            if arr[sortex] > arr[sortex + 1]:
                
                arr[sortex], arr[sortex+ 1]  = arr[sortex+ 1], arr[sortex]
                
                swapped = True
            
        if not swapped:
            break



print(f"Vetor original: {arr}")
# arr.sort() built-in python
bubble_sort(arr)
print(f"Vetor ordenado: {arr}")