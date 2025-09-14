// [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
// de Fibonacci:
// 1 1 2 3 5 8 13 21...


class Ex070
{
  public int firstElement = 1;
  public int secondElement = 1;

  public int generalTerm;



  public void FirstCountdown()
  {
    Console.Write($"FIBONACCI: {firstElement},{secondElement},");
    for (int i = 3; i <= 8; i++)
    {
      int temp = firstElement + secondElement;
      firstElement = secondElement;
      secondElement = temp;

      Console.Write($"{temp},");
    }
  }
}

