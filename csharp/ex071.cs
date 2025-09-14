// Faça um programa que preencha automaticamente um vetor numérico com 8
// posições, conforme abaixo:
// 999 999 999 999 999 999 999 999
// 0 1 2 3 4 5 6 7

class Ex071
{
  public int[] vector = new int[8];


  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      vector[i] = 999;
      Console.Write($"[{vector[i]}]");
    }

  
  }
}

