// Desenvolva um programa que mostre na tela a seguinte contagem:
// 100 95 90 85 80 ... 0 Acabou!


class Ex041
{
  public int counter = 100;

  public void FirstCountdown()
  {
    Console.Write(" "+counter+" ");
    while (counter > 0)
    {
      counter -= 5;
      Console.Write($"{counter} ");
    }
    Console.Write("Acabou!");
  }
}

