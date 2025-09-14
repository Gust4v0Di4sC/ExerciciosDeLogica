//  Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
// 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
// número (chave) e seu programa deve mostrar em que posições essa chave foi
// encontrada. Mostre também quantas vezes a chave foi sorteada.

class Ex080
{
  public int[] vector  = new int[30];

  Random randNum = new Random();

  public int countKey;


  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      vector[i] = randNum.Next(1, 15);
    }

    Console.WriteLine("Digite um numero chave: ");
    int numeroChave = Convert.ToInt32(Console.ReadLine());


    Console.WriteLine("Posiçoes das chaves:");
    for (int j = 0; j < vector.Length; j++)
    {
      if (vector[j] == numeroChave)
      {
        countKey += 1;
        Console.Write($"[{j}]");
      }
    }
    Console.WriteLine($"Vezes que a chave foi sorteada: {countKey}");



  }
}

