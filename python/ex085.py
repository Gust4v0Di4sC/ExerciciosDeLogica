# Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
# guarde esses dados em três vetores. No final, mostre uma listagem contendo
# apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

names = []
gender = []
salary = []

womanFunctionaries = {}


for i in range(5):
    names = input("Digite seu nome: ")
    gender = input(f"Digite seu sexo, {names}: ")
    salary = float(input(f"Digite seu salario, {names}: "))
    
    if(gender == "Feminino" and salary > 5000):
        womanFunctionaries[names] = {"Salario": salary, "Sexo": gender}
        


print(f"{womanFunctionaries}", end=" ")