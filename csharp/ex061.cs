// Crie um programa que mostre na tela a seguinte contagem, usando a estrutura
// “faça enquanto”
// 0 3 6 9 12 15 18 21 24 27 30 Acabou!


class Ex061
{
  public int counter = 0;

  public void FirstCountdown()
  {
    Console.Write(counter);
    do
    {
      counter += 3;
      Console.Write($" {counter} ");

    } while (counter < 30);
    Console.Write(" Acabou!");
  }
}

