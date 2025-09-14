# Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
# valores para um procedimento Maior() que vai verificar qual deles é o maior e
# mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
# informando essa característica.

def Maior():
    valueOne = int(input("Digite um valor: "))
    valueTwo = int(input("Digite outro valor: "))
    
    if(valueOne > valueTwo):
        return print(f"O maior valor é: {valueOne}")
    elif(valueTwo > valueOne):
        return print(f"O maior valor é: {valueTwo}")
    else:
        return print("Valores iguais")

Maior()