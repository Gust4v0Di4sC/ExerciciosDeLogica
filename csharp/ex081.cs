// Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
// final, mostre:
// a) Qual é a média de idade das pessoas cadastradas
// b) Em quais posições temos pessoas com mais de 25 anos
// c) Qual foi a maior idade digitada (podem haver repetições)
// d) Em que posições digitamos a maior idade

class Ex081
{
  public int[] vector  = new int[8];

  public int countPersons;
  public int avgAgePersons;

  public int majorAge = 0;


  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      Console.WriteLine($"Digite uma idade: {i}");
      vector[i] = Convert.ToInt32(Console.ReadLine());

      countPersons += 1;
      avgAgePersons = countPersons / vector.Length;
    }

    Console.WriteLine($"Média da idade das pessoas cadastradas: {avgAgePersons}");

   
    for (int j = 0; j < vector.Length; j++)
    {
      if (vector[j] > 25)
      {
        Console.Write($"Posiçoes das pessoas com mais de 25 anos: [{j}]");
      }

  
      if (vector[j] > majorAge)
      {
        majorAge = vector[j];
        Console.WriteLine($"Maior idade digitada: {majorAge}");
        Console.Write($"Posições com a maior idade: [{j}]");
      }
    }
    




  }
}

