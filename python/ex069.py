# [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
# PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
# a soma entre todos os valores da sequência.

inputFirstTerm = int(input("Digite o primeiro termo: "))
inputReason = int(input("Digite a razão da PA: "))
nTerm = 0

for number in range(1,11,1):
    print(f"PA{number} = {inputFirstTerm + (number-1) * inputReason} ")
