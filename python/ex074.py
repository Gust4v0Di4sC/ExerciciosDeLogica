# Crie um programa que preencha automaticamente (usando lógica, não apenas
# atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
# 5 3 5 3 5 3 5 3 5 3
# 0 1 2 3 4 5 6 7 8 9

arr = [0] * 10



for i in range(10):
    if(i % 2 == 0):
        arr[i] = 5
    else:
        arr[i] = 3
print(f"{arr}")