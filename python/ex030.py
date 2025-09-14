# [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
# de triângulo será formado:
# - EQUILÁTERO: todos os lados iguais
# - ISÓSCELES: dois lados iguais
# - ESCALENO: todos os lados diferentes


firstSegment = float(input("Digite a medida do primeiro segmento: "))
secondSegment = float(input("Digite a medida do segundo segmento: "))
thirdSegment = float(input("Digite a medida do terceiro segmento: "))


if((firstSegment < secondSegment + thirdSegment) & (secondSegment < firstSegment + thirdSegment) & (thirdSegment < firstSegment + secondSegment)):
    print(f"Com os segmentos: {firstSegment},{secondSegment} e {thirdSegment} é possível formar um triangulo")
    if(firstSegment == secondSegment == thirdSegment):
        print("Esse triangulo é EQUILÁTERO")
    elif(firstSegment == secondSegment or thirdSegment == firstSegment or secondSegment== thirdSegment):
        print("Esse triangulo é ISÓSCELES")
    else:
        print("Esse triangulo é ESCALENO")
else:
    print(f"Com os segmentos: {firstSegment}, {secondSegment} e {thirdSegment} não é possível formar um segmento")

