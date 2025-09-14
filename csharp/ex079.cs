// Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
// No final, mostre quais são os números pares que foram digitados e em que
// posições eles estão armazenados.

class Ex079
{
  public int[] vector  = new int[10];


  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      Console.WriteLine("Digite um numero: ");
      vector[i] = Convert.ToInt32(Console.ReadLine());

      Console.Write($"[{vector[i]}]");
    }

    Console.WriteLine("Posiçoes dos pares:");
    for (int j = 0; j < vector.Length; j++)
    {
      if (vector[j] % 2 == 0)
      {
        Console.Write($"[{j}],[{vector[j]}]");
      }
    }


   
  }
}

