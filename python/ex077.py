#  Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
# final, mostre uma listagem com todos os nomes informados, na ordem inversa
# daquela em que eles foram informados.

arr = [0] * 7



for i in range(7):
    arr[i] = input("Digite um nome: ")
arr.reverse()

print(f"{arr}")