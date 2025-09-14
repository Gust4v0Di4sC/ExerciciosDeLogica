// Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
// O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
// a) O nome da pessoa mais velha
// b) O nome da mulher mais jovem
// c) A média de idade do grupo
// d) Quantos homens tem mais de 30 anos
// e) Quantas mulheres tem menos de 18 anos

class Ex060
{
  public string? nameOldestPerson;

  public string? nameYoungestWoman;

  public int majorAge = 0;

  public int minorAge = 999;

  public int avgAgeGroup;

  public int totalPerson = 0;

  public int countAgePerson = 0;

  public int menAboveThirty;

  public int womenBelowEighteen;

  public void FirstCountdown()
  {
    while (true)
    {
      Console.WriteLine($"Digite o seu nome: ");
      string? inputName = Console.ReadLine();

      Console.WriteLine($"Digite sua idade {inputName}: ");
      int inputAge = Convert.ToInt32(Console.ReadLine());

      Console.WriteLine($"Digite seu sexo {inputName}: 1-[sim] 2-[nao]");
      int inputGender = Convert.ToInt32(Console.ReadLine());

      totalPerson += 1;
      countAgePerson += inputAge;

      if (inputAge > majorAge)
      {
        majorAge = inputAge;
        nameOldestPerson = inputName;
      }

      if (inputGender == 2)
      {
        if (inputAge < minorAge)
        {
          minorAge = inputAge;
          nameYoungestWoman = inputName;
        }

        if (inputAge < 18)
        {
          womenBelowEighteen += 1;
        }
      }
      else
      {
        if (inputAge > 30)
        {
          menAboveThirty += 1;
        }
      }


      avgAgeGroup = countAgePerson / totalPerson;

      


      Console.WriteLine("Deseja continuar? 1-[sim] 2-[nao]");
      int inputAnswer = Convert.ToInt32(Console.ReadLine());
      if (inputAnswer == 1)
      {
        continue;
      }
      else
      {
        break;
      }
    }
    Console.Write($"nome da pessoa mais velha : {nameOldestPerson}");
    Console.Write($"nome da mulher mais jovem : {nameYoungestWoman}");
    Console.Write($"A media de idade do grupo : {avgAgeGroup}");
    Console.Write($"Quantos homens tem mais de 30 anos : {menAboveThirty}");
    Console.Write($"Quantos mulheres tem menos de 18 anos : {womenBelowEighteen}");
  }
}

