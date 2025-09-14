# Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
# na tela a sua média na disciplina.
# Ex:
# Nota 1: 4.5
# Nota 2: 8.5
# A média entre 4.5 e 8.5 é igual a 6.5

gradeOne = float(input("Digite a nota 1: "))
gradeTwo = float(input("Digite a nota 2: "))
average = (gradeOne+gradeTwo)/2

print(f"A média entre {gradeOne} e {gradeTwo} é igual a: {average}")
