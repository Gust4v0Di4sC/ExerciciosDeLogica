# Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
# seu novo salário, com 15% de aumento.

funcSalary = float(input("Digite o seu salario: "))
augment = funcSalary * 15 
augmentSalary = funcSalary + augment/100


print(f"O Salario atual é {funcSalary}, Com aumento de 15% o novo salario é {augmentSalary}")
