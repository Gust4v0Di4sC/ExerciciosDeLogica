# Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
# incremento, mostrando em seguida todos os valores no intervalo:
# Ex: Digite o primeiro Valor: 3
# Digite o último Valor: 10
# Digite o incremento: 2
# Contagem: 3 5 7 9 Acabou!

initialCounter = int(input("Digite o valor inicial da contagem: "))
finalCounter = int(input("Digite o valor final da contagem: "))
increment = int(input("Digite o valor do incremento: "))

while initialCounter <= finalCounter:
    print(initialCounter, end=" ")
    initialCounter+= increment
print("Acabou!")

