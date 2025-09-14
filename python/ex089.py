# Crie um programa que melhore o procedimento Gerador() da questão anterior
# para que o programador possa escolher uma entre três bordas:
# +-------=======------+ Borda 1
# ~~~~~~~~:::::::~~~~~~~ Borda 2
# <<<<<<<<------->>>>>>> Borda 3Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2)
# ~~~~~~~~:::::::~~~~~~~
# Portugol Studio
# Portugol Studio
# Portugol Studio
# ~~~~~~~~:::::::~~~~~~~

def Gerador(message,times,border):
    match border:
        case 1:
            border = "+-------=======------+"
        case 2:
            border = "~~~~~~~~:::::::~~~~~~~"
        case 3:
            border = "<<<<<<<<------->>>>>>>"
            
    print(border)
    for i in range(times):
        print(f"{message}")
    print(border)

Gerador("Aprendendo Python",4,3)