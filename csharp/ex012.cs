//  Crie um programa que leia o preço de um produto, calcule e mostre o seu
// PREÇO PROMOCIONAL, com 5% de desconto.


class Ex012
{
  public double price;

  public void ShowProductPrice()
  {
    Console.WriteLine("Digite o preço do produto: ");
    price = Convert.ToDouble(Console.ReadLine());

    double pricePromotional = price * 5 / 100;
    double priceDiscount = price - pricePromotional;


    Console.Clear();
    Console.WriteLine($"O valor original do produto é: {price} , seu preço promocional com 5% de deconto é: {priceDiscount}");
  }
}

