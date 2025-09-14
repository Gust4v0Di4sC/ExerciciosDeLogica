# [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
# Analise seus comprimentos e diga se é possível formar um triângulo com essas
# retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
# de cada lado deve ser menor que a soma dos outros dois.

firstSegment = float(input("Digite a medida do primeiro segmento: "))
secondSegment = float(input("Digite a medida do segundo segmento: "))
thirdSegment = float(input("Digite a medida do terceiro segmento: "))


if((firstSegment < secondSegment + thirdSegment) & (secondSegment < firstSegment + thirdSegment) & (thirdSegment < firstSegment + secondSegment)):
    print(f"Com os segmentos: {firstSegment},{secondSegment} e {thirdSegment} é possível formar um triangulo")
else:
    print(f"Com os segmentos: {firstSegment}, {secondSegment} e {thirdSegment} não é possível formar um segmento")
