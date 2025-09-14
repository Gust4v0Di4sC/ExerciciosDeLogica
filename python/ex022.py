# Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
# situação em relação ao alistamento militar.
# - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
# alistamento.
# - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
# alistamento.

import datetime

yearBirth = int(input("Digite o ano em que você nasceu: "))

actualYear = datetime.datetime.now()
agePerson = actualYear.year - yearBirth

if(agePerson < 18):
    print(f"Você tem {agePerson} anos de idade, faltam {18 - agePerson} anos para o seu alistamento")
else: 
    print(f"Você tem {agePerson} anos de idade, já fazem {agePerson - 18} anos que você se alistou")


