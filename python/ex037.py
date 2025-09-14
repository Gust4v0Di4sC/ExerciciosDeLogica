# Uma empresa precisa reajustar o salário dos seus funcionários, dando um
# aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
# o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
# No final, mostre o seu novo salário, baseado na tabela a seguir:
# - Mulheres
# - menos de 15 anos de empresa: +5%
# - de 15 até 20 anos de empresa: +12%
# - mais de 20 anos de empresa: +23%
# - Homens
# - menos de 20 anos de empresa: +3%
# - de 20 até 30 anos de empresa: +13%
# - mais de 30 anos de empresa: +25%

actualSalary = float(input("Digite o seu salario atual: "))
gender = int(input("Digite o seu genero:  (1- Masculino) (2- Feminino) "))
yearsOfWork = int(input("Digite a quantos anos você trabalha na empresa: "))

augmentFive =actualSalary + (actualSalary * 5/100) 
augmentTwelve =actualSalary + (actualSalary * 12/100) 
augmentTwentyThree =actualSalary + (actualSalary * 23/100) 

augmentThree =actualSalary + (actualSalary * 5/100) 
augmentThirteen =actualSalary + (actualSalary * 13/100) 
augmentTwentyFive =actualSalary + (actualSalary * 25/100) 

if(gender == 1):
    if(yearsOfWork <= 20):
        print(f"Você recebeu aumento de 3% no seu salario, novo salario: {augmentThree} ")
    elif(yearsOfWork > 20 and yearsOfWork <=30):
        print(f"Você recebeu aumento de 13% no seu salario, novo salario: {augmentThirteen} ")
    else:
        print(f"Você recebeu aumento de 25% no seu salario, novo salario: {augmentTwentyFive}")
else:
    if(yearsOfWork <= 15):
        print(f"Você recebeu aumento de 5% no seu salario, novo salario: {augmentFive}")
    elif(yearsOfWork > 15 and yearsOfWork <=20):
        print(f"Você recebeu aumento de 12% no seu salario, novo salario: {augmentTwelve}")
    else:
        print(f"Você recebeu aumento de 23% no seu salario, novo salario: {augmentTwentyThree}")
