// Crie um aplicativo que mostre na tela a seguinte contagem:
// 0 3 6 9 12 15 18 Acabou!

class Ex040
{
  public int counter = 0;

  public void ThirdCountdown()
  {
    Console.Write(" "+counter+" ");
    while (counter < 18)
    {
      counter +=3;
      Console.Write($"{counter} ");
    }
    Console.Write("Acabou!");
  }
}

