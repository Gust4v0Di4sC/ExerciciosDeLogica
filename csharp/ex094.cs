// Desenvolva um aplicativo que tenha um procedimento chamado
// Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
// termos da sequência serão mostrados na tela. O seu procedimento deve receber
// esse valor e mostrar a quantidade de elementos solicitados.
// Obs: Use os exercícios 70 e 75 para te ajudar na solução
// Ex:
// Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
// Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM


using System.Numerics;

class Ex094
{

  public void Fibonacci(int value)
  {
    int[] vector = new int[value];

    vector[0] = 1;
    vector[1] = 1;

    Console.Write($"[{vector[0]}][{vector[1]}]");
    for (int i = 2; i < vector.Length; i++)
    {
      int fn = vector[i - 1] + vector[i - 2];
      vector[i] = fn;
      Console.Write($"{vector[i]} >> ");
    }
    Console.WriteLine("FIM");
  }

  public void FirstCountdown()
  {
    Console.WriteLine("Digite o valor desejado ate o fibonacci");
    int numberValue = Convert.ToInt32(Console.ReadLine());

    Fibonacci(numberValue);
  }
}

