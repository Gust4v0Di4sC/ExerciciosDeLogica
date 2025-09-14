# Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
# vai parar quando for digitada a idade 999. No final, mostre quantos alunos
# existem na turma e qual é a média de idade do grupo.


ageStudent = 0
totalStudents = 0
avgAge = 0
sumAge = 0

while True:
    ageStudent =  int(input("Digite sua idade: "))
    totalStudents +=1
    sumAge += ageStudent
    if(ageStudent != 999):
        avgAge = sumAge / totalStudents
    else:
        break
    
print(f"A turma possui: {totalStudents} Alunos \n a media de idade é: {avgAge}")