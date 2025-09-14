# Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
# mostre o vetor inteiro na tela e em seguida mostre em que posições foram
# digitados valores que são múltiplos de 10.

arr = [0] * 15
arrMulti = [0] * 15 


for i in range(15):
    arr[i] = int(input("Digite um numero: "))
    if(arr[i] % 10 == 0):
        arrMulti[i] = i 

print(f"{arr}")
print(f"Multiplos nas posições: {arrMulti}")