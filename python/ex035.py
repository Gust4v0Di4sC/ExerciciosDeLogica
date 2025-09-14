# Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
# aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
# carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
# que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
# quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
# tabela a seguir:
# - Carros populares (aluguel de R$90 por dia)
# - Até 100Km percorridos: R$0,20 por Km
# - Acima de 100Km percorridos: R$0,10 por Km
# - Carros de luxo (aluguel de R$150 por dia)
# - Até 200Km percorridos: R$0,30 por Km
# - Acima de 200Km percorridos: R$0,25 por Km


typeCar = int(input("Digite o tipo de carro 1-Popular 2-Luxo: "))
daysRental = int(input("Digite por quantos dias o carro ficou alugado: "))
kmTraveled = float(input("Digite quantos km foram percorridos: "))

popCarDiary = daysRental * 90
luxuryCarDiary = daysRental * 150

match typeCar:
    case 1:
        print("Carro Popular escolhido")
    case 2:
        print("Carro de Luxo escolhido")

if(typeCar == 1):
    if(kmTraveled <= 100):
        print(f"Você percorreu {kmTraveled} Kilometros, valor final: {kmTraveled*0.20 + popCarDiary}")
    else:
       print(f"Você percorreu {kmTraveled} Kilometros, valor final: {kmTraveled*0.10 + popCarDiary}") 
else:
    if(kmTraveled <= 200):
        print(f"Você percorreu {kmTraveled} Kilometros, valor final: {kmTraveled*0.30 + luxuryCarDiary}")
    else:
        print(f"Você percorreu {kmTraveled} Kilometros, valor final: R$ {kmTraveled*0.25 + luxuryCarDiary}")

