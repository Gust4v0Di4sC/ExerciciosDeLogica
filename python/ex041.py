# Desenvolva um programa que mostre na tela a seguinte contagem:
# 100 95 90 85 80 ... 0 Acabou!

counter = 100

while counter >= 0:
    print(counter, end=" ")
    counter-=5
print("Acabou!")