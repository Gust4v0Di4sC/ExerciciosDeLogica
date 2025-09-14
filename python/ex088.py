# Crie um programa que melhore o procedimento Gerador() da questão anterior
# para que mostre uma mensagem vário
# Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
# +-------=======------+
# Aprendendo Portugol
# Aprendendo Portugol
# Aprendendo Portugol
# Aprendendo Portugol
# +-------=======------+

def Gerador(message, times):
    print("+-------=======------+")
    for i in range(times):
        print(f"{message}")
    print("+-------=======------+")

Gerador("Aprendendo Python",4)