// Escreva um programa que mostre na tela a seguinte contagem:
// 6 7 8 9 10 11 Acabou!


class Ex038
{
  public int counter = 6;

  public void FirstCountdown()
  {
    while (counter <=11)
    {
      counter++;
      Console.Write(counter);
    }
    Console.Write("Acabou!");
  }
}

