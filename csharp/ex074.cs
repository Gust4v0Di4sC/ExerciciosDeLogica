// Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// 5 3 5 3 5 3 5 3 5 3
// 0 1 2 3 4 5 6 7 8 9


class Ex074
{
  public int[] vector =new int[10];



  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      if (vector[i] % 2 == 0)
      {
        vector[i] = 5;
      }
      else
      {
        vector[i] = 3;
      }
    }



  }
}

