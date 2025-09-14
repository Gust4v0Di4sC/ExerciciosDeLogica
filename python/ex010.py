# Faça um algoritmo que leia a largura e altura de uma parede, calcule e
# mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
# sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

width = float(input("Digite a largura da parede: "))
height = float(input("Digite a altura da parede: "))

area = width * height
paintingArea = area /2



print(f"A area da parede é {area} Metros, são necessários 🎨🪣 {paintingArea} Litros de tinta")
