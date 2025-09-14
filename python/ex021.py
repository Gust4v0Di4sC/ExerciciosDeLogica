# Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
# BISSEXTO.

yearInput = int(input("Digite um ano: "))

if(yearInput % 4 == 0):
    print(f"O ano {yearInput} é bissexto")
else:
    print(f"O ano {yearInput} não é bissexto")


