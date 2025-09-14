# Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
# dela e depois mostre se ela pode ou não votar.

import datetime

yearBirth = int(input("Digite em qual ano você nasceu: "))

actualYear = datetime.datetime.now()
agePerson = actualYear.year - yearBirth

if (agePerson >= 16):
    print(f"Você tem {agePerson} anos de idade, já pode votar")
else:
    print(f"Você tem {agePerson} anos de idade, ainda não pode votar")
