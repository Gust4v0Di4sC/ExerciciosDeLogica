// Crie um programa que preencha automaticamente um vetor numérico com 7
// números gerados aleatoriamente pelo computador e depois mostre os valores
// gerados na tela.


class Ex076
{
  public int[] vector= new int[7];

  Random randNum = new Random();

  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      vector[i] = randNum.Next();
      Console.Write($"[{vector[i]}]");
    }

  }
}

