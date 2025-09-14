// [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
// aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
// números gerados e depois coloque o vetor em ordem crescente, mostrando no final
// os valores ordenados.

class Ex083
{
  public int[] vector  = new int[20];

  Random randNum = new Random();


  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      vector[i] = randNum.Next(0, 99);
    }

    Console.WriteLine("Numeros gerados aleatoriamente: ");
    for (int j = 0; j < vector.Length; j++)
    {
      Console.Write($"[{vector[j]}]");
    }


    Console.WriteLine("Numeros ordenados: ");
     Array.Sort(vector);
    for (int x = 0; x < vector.Length; x++)
    {
      Console.Write($"[{vector[x]}]");
    }
  }
}

