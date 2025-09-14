// Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
// a) Qual é a média de idade do grupo
// b) Quantas pessoas tem mais de 18 anos
// c) Quantas pessoas tem menos de 5 anos
// d) Qual foi a maior idade lida


class Ex052
{
  public int counter = 1;
  public int soma = 0;

  public int avgAge = 0;
  public int moreEighteen = 0;
  public int minorFive = 0;

  public int majorAge = 0;

  public void FirstCountdown()
  {
    while (counter <= 10)
    {
      Console.WriteLine($"Digite a idade da pessoa [{counter}]: ");
      int inputAge = Convert.ToInt32(Console.ReadLine());

      soma += inputAge;

      avgAge = soma / 10;

      if (inputAge > 18)
      {
        moreEighteen += 1;
      }
      else if (inputAge < 5)
      {
        minorFive += 1;
      }

      if (inputAge > majorAge)
      {
        majorAge = inputAge;
      }
    }
    Console.Write($"Media de idade do grupo: {avgAge}");
    Console.Write($"Pessoas com mais de 18: {moreEighteen}");
    Console.Write($"Pessoas com menos de 5: {minorFive}");
    Console.Write($"Maior idade do grupo: {majorAge}");
  }
}

