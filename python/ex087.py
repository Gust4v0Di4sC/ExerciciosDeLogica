# Crie um programa que melhore o procedimento Gerador() da questão anterior
# para que mostre uma mensagem personalizada, passada como parâmetro.
# Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
# +-------=======------+
# Aprendendo Portugol
# +-------=======------+

def Gerador(message):
    print("+-------=======------+")
    print(f"{message}")
    print("+-------=======------+")

Gerador("Aprendendo Python")