# Desenvolva um programa que leia o nome de um funcionário, seu salário,
# quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
# acordo com a tabela a seguir:
# - Até 3 anos de empresa: aumento de 3%
# - entre 3 e 10 anos: aumento de 12.5%
# - 10 anos ou mais: aumento de 20%

nameFunctionary = input("Digite o seu nome: ")
salaryFunc = int(input("Digite o seu salario: "))
yearsWork = int(input("Digite a quantos anos você trabalha na empresa: "))

threeAugment = salaryFunc + ((salaryFunc * 3) / 100) 
elevenAugment = salaryFunc + ((salaryFunc * 12.5) / 100) 
twentyAugment = salaryFunc + ((salaryFunc * 20) / 100) 

if(yearsWork <= 3):
    print(f"Olá {nameFunctionary} seu salario aumentou 3%, novo salario: {threeAugment}")
elif(yearsWork > 3 and yearsWork <= 10):
    print(f"Olá {nameFunctionary} seu salario aumentou 12,5%, novo salario: {elevenAugment}")
else:
    print(f"Olá {nameFunctionary} seu salario aumentou 20%, novo salario: {twentyAugment}")

