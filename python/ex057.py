# Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
# No final, mostre o total de salários pagos aos homens e o total pago às
# mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
# sempre que ler os dados de um funcionário.


sumMan = 0
sumWoman = 0
inputSalary = 0
inputGender = 0
inputAnswer = 0
totalSalaryWoman = 0
totalSalaryMan = 0


while True:
    inputGender =  int(input("Digite o seu genero: (1-Homem 2-Mulher)"))
    inputSalary =  float(input("Digite o seu salario: "))
    if(inputGender == 1):
        sumMan += inputSalary
    else:
        sumWoman += inputSalary

    print("Deseja continuar inserindo? 1-Sim 2-Não")
    inputAnswer = int(input("Digite a resposta: "))
    if(inputAnswer == 1):
        break
    else:
        continue
print(f"Soma Salario Homens: {sumMan}, \n Soma salario Mulheres: {sumWoman}")