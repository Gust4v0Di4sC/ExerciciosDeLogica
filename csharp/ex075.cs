// Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros
// elementos da sequência de Fibonacci:
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15


class Ex075
{
  public int[] vector = new int[15];

  

  public void FirstCountdown()
  {
    vector[0] = 1;
    vector[1] = 1;
    Console.Write($"[{vector[0]}][{vector[1]}]");
    for (int i = 2; i < vector.Length; i++)
    {
      int fn = vector[i - 1] + vector[i - 2];
      vector[i] = fn;
      Console.Write($"[{vector[i]}]");
    }
  }
}

