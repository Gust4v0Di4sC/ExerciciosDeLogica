// Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
// 450 + 400 + 350 + 300 + ... + 50 + 0

class Ex047
{
  public int counter = 500;
  public int soma = 0;

  public void FirstCountdown()
  {
    while (counter >= 0)
    {
      counter -= 50;
      soma += counter;
      Console.Write($" {counter} +");
    }
    Console.Write(soma);
  }
}

