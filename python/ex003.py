# Crie um programa que leia o nome e o salário de um funcionário, mostrando no
# final uma mensagem.
# Ex:
# Nome do Funcionário: Maria do Carmo
# Salário: 1850,45
# O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.
import datetime
import locale

#UTF-8 é uma codificação que suporta todos os idiomas e caracteres especiais.
#Deixando o idioma atual em português br
locale.setlocale(locale.LC_TIME, 'pt_BR.utf8')


nome = input("Digite o seu nome: ")
salario = input("Digite o seu salario: ")
data = datetime.datetime.now()
mesAtual = data.strftime("%B")

#Fazendo encode para o idioma atual e decodificando para utf8
mesAtual = mesAtual.encode('latin1').decode('utf-8')

print(f"Nome do Funcionário: {nome} \n Salário: {salario} \n O funcionário {nome} tem um salário de {salario} em {mesAtual}")