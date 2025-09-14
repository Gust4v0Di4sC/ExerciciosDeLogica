# Faça um algoritmo que pergunte a distância que um passageiro deseja
# percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
# viagens até 200Km e R$0.45 para viagens mais longas.

distancePerc = float(input("Digite a distancia que você deseja percorrer em Km: "))

untilTwoHundred = distancePerc * 0.50
plusTwoHundred = distancePerc * 0.45

if(distancePerc <= 200):
    print(f"Você percorreu {distancePerc} Km, valor da passagem: R$ {untilTwoHundred}")
else:
    print(f"Você percorreu {distancePerc} Km , valor da passagem: R${plusTwoHundred}")




