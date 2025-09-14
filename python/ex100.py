# Melhore o exercício 96, criando além da função Media() uma outra função
# chamada Situacao(), que vai retornar para o programa principal se o aluno está
# APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
# parâmetro o resultado retornado pela função Media().
# - Média até 4.9: REPROVADO
# - Média entre 5.0 e 6.9: RECUPERAÇÃO
# - Média 7.0 ou superior: APROVADO

def Situation(avgNote):
    if(avgNote <= 4.9):
        return print(f"Sua media é {avgNote}, você está REPROVADO")
    elif(avgNote > 5.0 and avgNote <= 6.9):
        return print(f"Sua media é {avgNote}, você está de RECUPERAÇÃO")
    else:
       return print(f"Sua media é {avgNote}, você está APROVADO")
   
def Average(noteOne, noteTwo):
    avgNote = (noteOne + noteTwo) / 2
    return Situation(avgNote)

    
def Main():
    firstNote = float(input("Digite a primeira nota: "))
    secondNote = float(input("Digite a segunda nota: "))

    return Average(firstNote,secondNote)

Main()