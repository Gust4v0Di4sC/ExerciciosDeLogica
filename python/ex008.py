# Desenvolva um programa que leia uma distância em metros e mostre os valores
# relativos em outras medidas.
# Ex:
# Digite uma distância em metros: 185.72
# A distância de 85.7m corresponde a:
# 0.18572Km
# 1.8572Hm
# 18.572Dam
# 1857.2dm
# 18572.0cm
# 185720.0mm

number = float(input("Digite uma distância em metros: "))

kilometro = number/1000
hectometro = number/100
decametro = number/10
decimetro = number*10
centimetro = number*100
milimetro = number*1000

print(f"A distância de {number} corresponde a: \n {kilometro}Km \n {hectometro}Hm \n {decametro}Dam \n {decimetro}dm \n {centimetro}cm \n {milimetro}mm")
