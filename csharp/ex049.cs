// Crie um programa que leia 6 números inteiros e no final mostre quantos deles
// são pares e quantos são ímpares.

class Ex049
{
  public int counter = 0;
  public int soma = 0;

  public int odd = 0;
  public int even = 0;

  public void FirstCountdown()
  {
    while (counter <= 6)
    {
      Console.WriteLine("Digite um numero: ");
      int inputNumero = Convert.ToInt32(Console.ReadLine());

      if (inputNumero % 2 == 0)
      {
        even += 1;
      }
      else
      {
        odd += 1;
      }


      soma += inputNumero;
    }
    Console.Write($"Pares : {even} , Impares: {odd}");
  }
}

