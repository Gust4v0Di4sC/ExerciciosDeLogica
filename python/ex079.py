# Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
# No final, mostre quais são os números pares que foram digitados e em que
# posições eles estão armazenados.


arr = [0] * 10
pairs = [0] * 10
positions = [0] * 10


for i in range(10):
    arr[i] = int(input("Digite um Numero: "))
    if(arr[i] % 2 == 0):
        pairs[i] += arr[i]
        positions[i] = i
        

print(f"{arr}")
print(f"Pares: {pairs}")
print(f"Posições dos pares: {pairs}")
