# Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
# 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
# o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

speedCar = float(input("Digite a velocidade que está dirigindo: "))

if(speedCar > 80):
    print(f"Você foi multado em: R$ {(speedCar-80)*5}")
else:
    print(f"Velocidade dentro do limite permitido")


