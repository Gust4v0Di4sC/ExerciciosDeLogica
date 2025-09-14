// Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
// no final:
// a) Qual foi a média de altura do grupo
// b) Quantas pessoas pesam mais de 90Kg
// c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
// d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg

class Ex054
{
  public int counter = 0;
  public int soma = 0;

  public int moreNinety = 0;
  public int belowFifty = 0;

  public int aboveHundred = 0;

  public int avgHeight = 0;

  public void FirstCountdown()
  {
    while (counter <= 7)
    {
      Console.WriteLine("Digite sua altura: ");
      float inputHeight = Convert.ToSingle(Console.ReadLine());
      float inputWeight = Convert.ToSingle(Console.ReadLine());

      soma += Convert.ToInt32(inputHeight);
      avgHeight = soma / 7;

      if (inputWeight > 90.0)
      {
        moreNinety += 1;
      } else if ( inputWeight < 50 && inputHeight < 1.60)
      {
        belowFifty += 1;
      } else if ( inputWeight > 100 && inputHeight > 1.90)
      {
        aboveHundred += 1;
      }
    }
    Console.Write($"Media de altura do grupo : {avgHeight}");
    Console.Write($"Pessoas que pesam mais de 90kg : {moreNinety}");
    Console.Write($"Pessoas que pesam menos de 50kg e tem menos de 1.60 : {belowFifty}");
    Console.Write($"Pessoas que medem mais de 1.90 e pesam mais de 100kg : {aboveHundred}");
  }
}

