# Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
# média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
# não um bom aproveitamento (se ficou acima da média 7.0)

namePerson = input("Digite o seu nome: ")
gradeOne = float(input("Digite a primeira nota: "))
gradeTwo = float(input("Digite a segunda nota: "))

avgGrade = (gradeOne + gradeTwo) / 2

if(avgGrade > 7.0):
    print(f"Aluno {namePerson} você ficou com a media: {avgGrade}, teve um bom aproveitamento")
else:
    print(f"Aluno {namePerson} você ficou com a media: {avgGrade}, não teve um bom aproveitamento")


