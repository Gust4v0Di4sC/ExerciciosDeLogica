# Crie um programa que leia o número de dias trabalhados em um mês e mostre o
# salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
# por hora trabalhada.

workDays = int(input("Digite o numero de dias trabalhados: "))

hours = workDays * 8
salaryMonth = 25 * hours


print(f"Esse mes você trabalhou: {workDays} dias e vai receber: R$ {salaryMonth}")
