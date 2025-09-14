# Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
# um aluno e retornar a sua média para o programa principal.

def Average(noteOne, noteTwo):
    avgNote = (noteOne + noteTwo) / 2
    return print(f"Sua media é: {avgNote}")
    
def Main():
    firstNote = float(input("Digite a primeira nota: "))
    secondNote = float(input("Digite a segunda nota: "))

    return Average(firstNote,secondNote)

Main()