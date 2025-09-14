// Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
// incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

class Ex044
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

    while (counter <= finalCounter)
    {
      increment += incrementCounter;
      Console.Write(counter);
    }
    Console.Write("Acabou!");
  }
}

