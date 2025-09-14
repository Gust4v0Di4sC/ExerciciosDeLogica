// Desenvolva um programa usando a estrutura “para” que mostre na tela a
// seguinte contagem:
// 0 5 10 15 20 25 30 35 40 Acabou!


class Ex064
{

  public void FirstCountdown()
  {
    for (int i = 0; i < 40; i += 5)
    {
      Console.Write($" {i} ");
    }
    Console.Write(" Acabou!");
  }
}

