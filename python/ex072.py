# Crie um programa que preencha automaticamente (usando lógica, não apenas
# atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
# 5 10 15 20 25 30 35 40 45 50
# 0 1 2 3 4 5 6 7 8 9

arr = [0] * 10
initialValue = 5
increment = 5


for i in range(10):
    arr[i] = initialValue + (i * increment)
print(f"{arr}")