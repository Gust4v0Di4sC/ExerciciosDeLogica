# Crie uma lógica que leia um número inteiro e passe para um procedimento
# ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
# parâmetro é PAR ou ÍMPAR.

def ParOuImpar():
    integerNumber = int(input("Digite um numero inteiro: "))
    if(integerNumber % 2 == 0):
        return print(f"O numero digitado, {integerNumber} é Par")
    else:
        return print(f"O numero digitado, {integerNumber} é Impar")

ParOuImpar()