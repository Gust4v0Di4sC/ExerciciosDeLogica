// Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
// um vetor. No final, mostre:
// a) Qual é a média da turma
// b) Quantos alunos estão acima da média da turma
// c) Qual foi a maior nota digitada
// d) Em que posições a maior nota aparece

class Ex082
{
  public int[] vector  = new int[10];

  public int countNotes;
  public int avgGradeStudents;

  public int avgMajorStudents;
  public int majorGrade = 0;



  public void FirstCountdown()
  {
    for (int i = 0; i < vector.Length; i++)
    {
      Console.WriteLine($"Digite a nota do aluno: {i}");
      vector[i] = Convert.ToInt32(Console.ReadLine());

      countNotes += 1;

      avgGradeStudents = countNotes / vector.Length;
      if (vector[i] > avgGradeStudents)
      {
        avgMajorStudents += 1;
      }
    }

    Console.WriteLine($"Media da turma: {avgGradeStudents}");
    Console.WriteLine($"Quantos alunos estao acima da média da turma: {avgMajorStudents}");

    
    for (int j = 0; j < vector.Length; j++)
    {
      if (vector[j] > majorGrade)
      {
        Console.WriteLine($"Maior nota digitada: {majorGrade}");
        majorGrade = vector[j];
        Console.Write($"Posiçoes em que a maior nota aparece: [{j}]");
      }
    }



  }
}

