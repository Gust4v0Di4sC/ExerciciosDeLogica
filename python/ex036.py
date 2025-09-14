# Um programa de vida saudável quer dar pontos atividades físicas que podem
# ser trocados por dinheiro. O sistema funciona assim:
# - Cada hora de atividade física no mês vale pontos
# - até 10h de atividade no mês: ganha 2 pontos por hora
# - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
# - acima de 20h de atividade no mês: ganha 10 pontos por hora
# - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
# Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
# calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.


hoursWorkout = int(input("Digite quantas horas você se exercitou esse mês: "))

tierOnePoints = hoursWorkout * 2
tierTwoPoints = hoursWorkout * 5
tierThreePoints = hoursWorkout * 10



if(hoursWorkout <= 10):
    print(f"\n Total de pontos: {tierOnePoints}")
    print(f"Você se exercitou por {hoursWorkout} horas , recebeu R$ {tierOnePoints *0.05} em dinheiro")
elif(hoursWorkout > 10 and hoursWorkout <= 20):
    print(f"\n Total de pontos: {tierTwoPoints}")
    print(f"Você se exercitou por {hoursWorkout} horas , recebeu R$ {tierTwoPoints *0.05} em dinheiro")
else:
     print(f"\n Total de pontos: {tierThreePoints}")
     print(f"Você se exercitou por {hoursWorkout} horas , recebeu R$ {tierThreePoints *0.05} em dinheiro")

