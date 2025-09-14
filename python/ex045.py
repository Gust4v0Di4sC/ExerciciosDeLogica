# O programa acima vai ter um problema quando digitarmos o primeiro valor
# maior que o último. Resolva esse problema com um código que funcione em qualquer
# situação.

initialCounter = int(input("Digite o valor inicial da contagem: "))
finalCounter = int(input("Digite o valor final da contagem: "))
increment = int(input("Digite o valor do incremento: "))

if(initialCounter < finalCounter):
    while initialCounter <= finalCounter:
        print(initialCounter, end=" ")
        initialCounter+= increment
    print("Acabou!")
else:
    while initialCounter >= finalCounter:
        print(initialCounter, end=" ")
        initialCounter-= increment
    print("Acabou!")

