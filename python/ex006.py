# Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
# sucessor.
# Ex:
# Digite um número: 9
# O antecessor de 9 é 8
# O sucessor de 9 é 10

number = int(input("Digite um numero: "))
ancestor = number -1
sucessor = number +1


print(f"O antecessor de {number} é {ancestor} \n O sucessor de {number} é {sucessor}")
