# Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
# qualquer e mostre uma contagem até esse valor:
# Ex: Digite um valor: 35
# Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

start = 0
numberInput = int(input("Digite um número inteiro e positivo: "))

while start <= numberInput:
    start+=1
    print(start, end=" ")
print("Acabou!")