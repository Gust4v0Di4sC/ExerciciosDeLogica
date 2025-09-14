#  [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

import random

player = 0
machine = random.randrange(1,4) 

print("----- JO-KEN-PO -----")

print("Escolha uma opção: 1-pedra 2-papel 3-tesoura")
player = int(input("Digite uma opção: "))

match player:
    case 1:
        print("Você escolheu Pedra")
    case 2:
        print("Você escolheu Papel")
    case 3:
        print("Você escolheu Tesoura")
        
match machine:
    case 1:
        print("A maquina escolheu Pedra")
    case 2:
        print("A maquina escolheu Papel")
    case 3:
        print("A maquina escolheu Tesoura")
        

        
if(player == 1 and machine == 2 or player == 2 and machine == 3 or player == 3 and machine == 1):
    print("Você perdeu, a maquina ganhou!!")
else:
    print("Você ganhou, a maquina perdeu!!")
