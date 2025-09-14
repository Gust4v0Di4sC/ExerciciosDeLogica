# [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
# fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
# já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
# quantos dias de vida um fumante perderá e exiba o total em dias.

quantCigarretes = int(input("Digite a quantidade de cigarros que você fuma por dia: "))
yearsSmoking = int(input("Digite a quantos anos você fuma: "))

minutesSmoking = yearsSmoking * 525.600
timeSmoking = quantCigarretes * 10
timeLife= (minutesSmoking * timeSmoking) /1440



print(f"Você fuma a {yearsSmoking} anos e já perdeu: {round(timeLife)} dias de vida")
