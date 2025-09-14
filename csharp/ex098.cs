// Crie um programa que tenha uma função SuperSomador(), que vai receber dois
// números como parâmetro e depois vai retornar a soma de todos os valores no
// intervalo entre os valores recebidos.
// Ex:
// SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
// SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85


class Ex098
{
  public int SuperSomador(int valOne, int valTwo)
  {
    int soma = 0;

    for (int i = valOne; i <= valTwo; i++)
    {
      soma += i;
    }

    return soma;
  }

  public void FirstCountdown()
  {
    Console.WriteLine("Digite um valor: ");
    int valOne = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite um valor: ");
    int valTwo = Convert.ToInt32(Console.ReadLine());

    SuperSomador(valOne, valTwo);
  }
}

