// Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
// qual foi o maior e qual foi o menor preço digitados.


class Ex051
{
  public int counter = 1;
  public int soma = 0;

  public int major = 0;
  public int minor = 999;

  public void FirstCountdown()
  {
    while (counter <= 8)
    {
      Console.WriteLine($"Digite o preço do produto [{counter}]: ");
      float inputNumero = Convert.ToSingle(Console.ReadLine());

      if (inputNumero > major)
      {
        major = Convert.ToInt32(inputNumero);
      }
      
      if (inputNumero < minor)
      {
        minor = Convert.ToInt32(inputNumero);
      }
    }
    Console.Write($"Maiores : {major}");
    Console.Write($"Menores : {minor}");
  }
}

