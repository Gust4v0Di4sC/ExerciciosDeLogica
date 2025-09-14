# A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
# um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
# quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
# sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

quantKilometers = float(input("Digite  a quantidade de kilometros percorridos: "))
quantDays = int(input("Digite quantos dias o carro ficou alugado: "))

priceDay = quantDays * 90
priceKilometer = 0.20 * quantDays
total = priceDay + priceKilometer

print(f"Você rodou {quantKilometers} com o carro durante {quantDays} dias, o valor total a pagar pela locação é: R$ {total}")
