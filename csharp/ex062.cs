// Faça um programa usando a estrutura “faça enquanto” que leia a idade de
// várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
// na tela:
// a) Quantas idades foram digitadas
// b) Qual é a média entre as idades digitadas
// c) Quantas pessoas tem 21 anos ou mais.



class Ex062
{
  public int age = 0;

  public int countAge = 0;

  public int avgAge = 0;

  public int totalAge = 0;

  public int aboveTwentyOne = 0;

  public void FirstCountdown()
  {

    do
    {
      Console.WriteLine("Digite a sua idade:");
      age = Convert.ToInt32(Console.ReadLine());

      countAge += age;
      totalAge += 1;

      if (age >= 21)
      {
        aboveTwentyOne += 1;
      }

      avgAge = countAge / totalAge;

      Console.WriteLine("Deseja continuar 1-[sim] 2-[nao]");
      int inputAnswer = Convert.ToInt32(Console.ReadLine());
      if (inputAnswer == 1)
      {
        continue;
      }
      else
      {
        break;
      }
    } while (true);

    Console.WriteLine($"Quantas idades foram digitadas: {totalAge}");  
    Console.WriteLine($"Qual é a media de idade digitadas: {avgAge}");  
    Console.WriteLine($"Quantas pessoas tem 21 anos ou mais: {aboveTwentyOne}");  
  }
}

