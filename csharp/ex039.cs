// Faça um algoritmo que mostre na tela a seguinte contagem:
// 10 9 8 7 6 5 4 3 Acabou!


class Ex039
{
  public int counter = 10;

  public void SecondCountdown()
  {
    while (counter >=3)
    {
      counter--;
      Console.Write(counter);
    }
    Console.Write("Acabou!");
  }
}

