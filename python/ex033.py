# Escreva um programa para aprovar ou não o empréstimo bancário para a compra
# de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
# em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
# ela não pode exceder 30% do salário ou então o empréstimo será negado.


valueHouse = int(input("Digite o valor da casa: "))
salaryBuyer = int(input("Digite o seu salario: "))
yearPayment = int(input("Digite em quantos anos você vai pagar: "))

monthPayment = yearPayment * 12
valueHouseMonthly =  round(valueHouse/monthPayment)
thirtyPercent = salaryBuyer - ((salaryBuyer * 30) / 100)

if(valueHouseMonthly > thirtyPercent):
    print(f"O valor da mensalidade excede 30% do salario, Emprestimo negado")
else:
    print(f"Emprestimo concecido, o valor da mensalidade será {valueHouseMonthly}")

