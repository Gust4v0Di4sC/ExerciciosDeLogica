// Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
// perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
// a) qual é a maior idade lida
// b) quantos homens foram cadastrados
// c) qual é a idade da mulher mais jovem
// d) qual é a média de idade entre os homens


class Ex059
{
  
  public int majorAge = 0;

  public int totalMen = 0;

  public int countAgeMen = 0;

  public int youngWoman = 999;

  public int avgMen = 0;

  public void FirstCountdown()
  {
    while (true)
    {
      Console.WriteLine($"Digite sua idade: ");
      int inputAge = Convert.ToInt32(Console.ReadLine());

      Console.WriteLine($"Digite o seu sexo: 1[Masculino] 2[Feminino]");
      int inputGender = Convert.ToInt32(Console.ReadLine());

      if (inputAge > majorAge)
      {
        majorAge = inputAge;
      }

      if (inputGender == 1)
      {
        totalMen += 1;
        countAgeMen += inputAge;
      }
      else
      {
        if (inputAge < youngWoman)
        {
          youngWoman = inputAge;
        }
      }


      avgMen = countAgeMen / totalMen;

      Console.WriteLine($"Deseja continuar? 1[sim] 2[nao]");
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

    Console.WriteLine($"a) qual é a maior idade lida {majorAge}");
    Console.WriteLine($"b) quantos homens foram cadastrados {totalMen}");
    Console.WriteLine($"c) qual é a idade da mulher mais jovem {youngWoman}");
    Console.WriteLine($"d) qual é a média de idade entre os homens {avgMen}");
  }
}

