// Faça um programa que leia 7 números inteiros e no final mostre o somatório
// entre eles.


class Ex048
{
  public int counter = 0;
  public int soma = 0;

  public void FirstCountdown()
  {
    while (counter <= 7)
    {
      Console.WriteLine("Digite um numero: ");
      int inputNumero = Convert.ToInt32(Console.ReadLine());

      soma += inputNumero;
    }
    Console.Write($"Soma : {soma}");
  }
}

