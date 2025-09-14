# [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
# de Fibonacci:
# 1 1 2 3 5 8 13 21...

firstTerm = 1 
secondTerm = 1
temp = 0
print(f"{firstTerm},{secondTerm} ",end=", ")
for number in range(2,11,1):
    temp = firstTerm + secondTerm
    firstTerm = secondTerm
    secondTerm = temp
    print(f"{temp }",end=", ")
