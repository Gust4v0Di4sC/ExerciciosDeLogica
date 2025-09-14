# Crie um programa que leia vários números pelo teclado e mostre no final o
# somatório entre eles.
# Obs: O programa será interrompido quando o número 1111 for digitado


inputNumber = 0
sum = 0

while True:
    inputNumber = int(input("Digite um numero inteiro: "))
    sum += inputNumber
    if (inputNumber == 1111):
        break
print(f"Soma dos numeros digitados: {sum}")