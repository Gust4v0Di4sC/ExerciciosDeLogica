# [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
# jogador vai tentar descobrir qual foi o valor sorteado.

import random

player = 0
machine = random.randrange(1,6) 

print("---- Advinhe um numero ----")
player = int(input("Digite um numero entre 1 e 5: "))

if(player == machine):
    print(f"Você acertou!, o numero sorteado foi: {machine}")
else:
    print(f"Você errou!, o numero sorteado foi: {machine}")

