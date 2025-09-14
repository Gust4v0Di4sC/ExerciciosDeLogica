# Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
# 450 + 400 + 350 + 300 + ... + 50 + 0

counter = 500
soma = 0

while counter >= 0:
    print(f"{counter} +", end=" ")
    soma += counter
    counter-=50
print(f"= {soma}")