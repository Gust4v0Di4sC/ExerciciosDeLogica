# Vamos melhorar o jogo que fizemos no exercício 32. A partir de
# agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
# tentativas para tentar acertar.

import random

tries = 1
player = 0
machine = random.randrange(1,11) 

while tries <= 4:

    print("---- Advinhe um numero ----")
    player = int(input("Digite um numero entre 1 e 5: "))

    if(player == machine):
        print(f"Você acertou!, o numero sorteado foi: {machine}")
        break
    else:
        tries+=1
        print(f"Você errou!, tente mais uma vez você tem: {tries} tentativas")
print("Acabaram as tentativas!!");