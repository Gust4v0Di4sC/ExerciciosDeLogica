// Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
// ÍMPAR.


class Ex020
{
  public int number;

  public void IsOdd()
  {
    Console.WriteLine("Digite um numero: ");
    number = Convert.ToInt32(Console.ReadLine());

    Console.Clear();
    if (number % 2 == 0)
    {
      Console.WriteLine($"Você digitou {number}, numero Par");
    }
    else
    {
     Console.WriteLine($"Você digitou {number}, numero Impar");
    }
    
  }
}

