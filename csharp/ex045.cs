// O programa acima vai ter um problema quando digitarmos o primeiro valor
// maior que o último. Resolva esse problema com um código que funcione em qualquer
// situação.

class Ex045
{
 public int counter = 0;

  public int increment = 0;

  public void FirstCountdown()
  {
    Console.WriteLine("Digite o inicio da contagem: ");
    counter = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor final da contagem: ");
    int finalCounter = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o incremento da contagem: ");
    int incrementCounter = Convert.ToInt32(Console.ReadLine());

    if (counter > finalCounter)
    {
      while (counter >= finalCounter)
      {
        increment -= incrementCounter;
        Console.Write(counter);
      }
      Console.Write("Acabou!");
    }
    else
    {
      while (counter <= finalCounter)
      {
        increment += incrementCounter;
        Console.Write(counter);
      }
      Console.Write("Acabou!");
    }


  }
}

