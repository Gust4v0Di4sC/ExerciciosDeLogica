// Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
// vai parar quando for digitada a idade 999. No final, mostre quantos alunos
// existem na turma e qual é a média de idade do grupo.


class Ex058
{
  public int counter = 0;
  public int avgAgeStudents = 0;

  public int totalStudents;

  public int countAgeStudents;

  public void FirstCountdown()
  {
    while (true)
    {
      Console.WriteLine($"Digite uma idade para o aluno [{counter}]: ");
      int inputAge = Convert.ToInt32(Console.ReadLine());

      totalStudents += 1;
      countAgeStudents += inputAge;

      if (inputAge == 999)
      {
        break;
      }

      avgAgeStudents = countAgeStudents / totalStudents;
    }
    Console.Write($"Media de idade dos alunos da turma : {avgAgeStudents}");
  }
}

