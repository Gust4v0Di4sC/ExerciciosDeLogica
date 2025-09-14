# Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
# um vetor. No final, mostre:
# a) Qual é a média da turma
# b) Quantos alunos estão acima da média da turma
# c) Qual foi a maior nota digitada
# d) Em que posições a maior nota aparece

arr = [0] * 10
positionsMajorGrade = [0] * 10
avgAbove = 0
majorGrade = 0
avg = 0
sum = 0



for i in range(10):
    arr[i] = int(input(f"Digite sua nota, aluno {i}: "))
    sum += arr[i]
    avg = sum/8
    
    if(arr[i] > majorGrade):
        majorGrade = arr[i]
        
   
    
for indice, elemento in enumerate(arr):
    if(elemento > avg):
        avgAbove+=1
        
    if(indice == majorGrade):
        positionsMajorGrade[i] = i

print(f"a) Qual é a média da turma: {avg} \n b) Quantos alunos estão acima da média da turma: {avgAbove} \n c) Qual foi a maior nota digitada: {majorGrade} \n d) Em que posições a maior nota aparece: {positionsMajorGrade}")