# Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
# qual foi o maior e qual foi o menor preço digitados.

counter = 1
majorProduct = 0
minorProduct = 999
inputPrice = 0

while counter <= 8:
    inputPrice = float(input(f"Digite o preço do produto {counter}: "))
    if(inputPrice > majorProduct):
        majorProduct = inputPrice
        
    if(inputPrice < minorProduct):
        minorProduct = inputPrice
    counter+=1
print(f"O maior preço: {majorProduct} \n O menor preço: {minorProduct}")
