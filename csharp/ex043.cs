// Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
// marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
// 30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...

class Ex043
{
  public int counter = 30;

  public void FirstCountdown()
  {
    while (counter < 1)
    {
      counter--;
      if (counter % 4 == 0)
      {
        Console.Write($"[{counter}]");
      }
      else
      {
        Console.Write(counter);
      }
      
    }
  }
}

