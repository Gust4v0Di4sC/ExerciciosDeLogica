# [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
# Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
# termos da sequência serão mostrados na tela. O seu procedimento deve receber
# esse valor e mostrar a quantidade de elementos solicitados.
# Obs: Use os exercícios 70 e 75 para te ajudar na solução
# Ex:
# Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
# Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM


    
def Fibonacci(number):
    firstTerm = 1
    secondTerm = 1
    temp = 0
    
    print(f"{firstTerm} >> {secondTerm}", end=" >> ")
    
    for number in range(2,number,1):
        temp = firstTerm + secondTerm
        firstTerm = secondTerm
        secondTerm = temp
        print(f"{temp }", end=" >> ")
    print("FIM")


def Main():
    
    return Fibonacci(9)

Main()
