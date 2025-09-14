# O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
# peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
# indivíduo dentro de certas faixas.
# - abaixo de 18.5: Abaixo do peso
# - entre 18.5 e 25: Peso ideal
# - entre 25 e 30: Sobrepeso
# - entre 30 e 40: Obesidade
# - acima de 40: Obseidade mórbida
# Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
# da altura)

import math

heightPerson = float(input("Digite a sua altura: "))
weightPerson = float(input("Digite o seu peso: "))

imc = weightPerson/math.pow(heightPerson, 2)

if(imc <= 18.5):
    print(f"Você esta Abaixo do peso, seu IMC: {round(imc)}")
elif(imc > 18.5 and imc <= 25):
    print(f"Você esta no Peso ideal, seu IMC: {round(imc)}")
elif(imc > 25 and imc <= 30):
    print(f"Você esta no Sobrepeso, seu IMC: {round(imc)}")
elif(imc > 30 and imc <=40):
    print(f"Você esta com Obesidade, seu IMC: {round(imc)}")
else:
    print(f"Você esta com Obesidade mórbida, seu IMC: {round(imc)}")

