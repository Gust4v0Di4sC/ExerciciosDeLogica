# Crie um programa que leia duas notas de um aluno e calcule a sua média,
# mostrando uma mensagem no final, de acordo com a média atingida:
# - Média até 4.9: REPROVADO
# - Média entre 5.0 e 6.9: RECUPERAÇÃO
# - Média 7.0 ou superior: APROVADO


firstGrade = float(input("Digite a primeira nota: "))
secondGrade = float(input("Digite a segunda nota: "))

avgGrade = firstGrade + secondGrade / 2

if(avgGrade <= 4.9):
    print(f"Sua média é {avgGrade}, REPROVADO")
elif(avgGrade > 5.0 and avgGrade <= 6.9):
    print(f"Sua média é {avgGrade}, RECUPERAÇÃO")
else:
    print(f"Sua média é {avgGrade}, APROVADO")

