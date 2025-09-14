// Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
// 8 + 10 + 12 + 14 + ... + 98 + 100.

class Ex046
{
  public int counter = 6;
  public int soma = 0;

  public void FirstCountdown()
  {
    while (counter <= 100)
    {
      counter += 2;
      soma += counter;
      Console.Write($" {counter} +");
    }
    Console.Write(soma);
  }
}

