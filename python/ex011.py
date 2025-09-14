# Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
# segundo grau e mostre o valor de Delta.

valueA = float(input("Digite o valor de A: "))
valueB = float(input("Digite o valor de B: "))
valueC = float(input("Digite o valor de C: "))

delta = valueB**2 - (4*valueA*valueC)


print(f"Com esse valores o valor de delta é: {delta}")
