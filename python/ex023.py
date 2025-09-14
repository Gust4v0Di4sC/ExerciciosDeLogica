# Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
# para todos, mas especialmente para mulheres. Faça um programa que leia nome,
# sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
# que:
# - Homens ganham 5% de desconto
# - Mulheres ganham 13% de desconto


namePerson = input("Digite o seu nome: ")
genderPerson = input("Digite o seu genero: ")
shoppingValues = float(input("Digite o valor de suas compras: "))

fiveDiscount = shoppingValues - ((shoppingValues * 5) / 100) 
thirteenDiscount = shoppingValues - ((shoppingValues *13)/ 100)

if(genderPerson == "Masculino"):
    print(f"Olá {namePerson}, você ganhou 5% de desconto em suas compras, valor final: {fiveDiscount}")
else:
    print(f"Olá {namePerson}, você ganhou 13% de desconto em suas compras, valor final: {thirteenDiscount}")


