# Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
# sua terça parte.
# Ex:
# Digite um número: 3.5
# O dobro de 3.5 é 7.0
# A terça parte de 3.5 é 1.16666


number = float(input("Digite um numero: "))
dobro = number*2
tercaParte = round(number/3, 4)


print(f"O dobro de {number} é {dobro} \n a terça parte de {number} é {tercaParte}")
