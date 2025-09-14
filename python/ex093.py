# Faça um programa que tenha um procedimento chamado Contador() que recebe
# três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
# programa principal deve solicitar a digitação desses valores e passá-los ao
# procedimento, que vai mostrar a contagem na tela.

negative_value = 0

def Contador(start,end,step):
      
    if(start > end):
        negative_value = -step
        for i in range(start, end-1, negative_value):
            print(f"{i}", end=" >> ")
        print("FIM")
    else:
        for i in range(start, end+1, step):
            print(f"{i}", end=" >> ")
        print("FIM")
        
def Main():
    startValue = int(input("Digite o valor inicial: "))
    endValue = int(input("Digite o valor final: "))
    stepValue = int(input("Digite o valor do incremento: "))
    
    
    return Contador(startValue,endValue,stepValue)
    
    

Main()