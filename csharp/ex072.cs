// Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// 5 10 15 20 25 30 35 40 45 50
// 0 1 2 3 4 5 6 7 8 9


class Ex072
{
  public int[] vector = new int[10];


  public void FirstCountdown()
  {
    
    for (int i = 0; i < vector.Length; i++)
    {
      vector[i] = 5*(i+1);
      Console.Write($"[{vector[i]}]");
    }


  }
}

