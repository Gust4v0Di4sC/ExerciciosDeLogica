# Crie um programa que mostre na tela a seguinte contagem, usando a estrutura
# “faça enquanto”
# 0 3 6 9 12 15 18 21 24 27 30 Acabou!

counter = 0 
while True:
    print(counter, end=" ")
    counter += 3
    if(counter > 30):
        break
print("Acabou!")


