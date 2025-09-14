// Faça um programa usando a estrutura “para” que leia um número inteiro
// positivo e mostre na tela uma contagem de 0 até o valor digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

class Ex067
{

  public void FirstCountdown()
  {
    Console.WriteLine("Digite um valor: ");
    int inputAnswer = Convert.ToInt32(Console.ReadLine());

    if (inputAnswer > 0)
    {
      for (int i = 0; i <= inputAnswer; i++)
      {
        Console.Write($"Contagem: {i},");
      }
    }
    else
    {
      for (int i = inputAnswer; i >= 0; i--)
      {
        Console.Write($"Contagem: {i},");
      }
    }
    Console.Write("FIM!");
  }
}

