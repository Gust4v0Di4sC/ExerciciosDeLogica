// Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
// mostre na tela:
// a) Quais foram os números sorteados
// b) Quantos números estão acima de 5
// c) Quantos números são divisíveis por 3

class Ex050
{
  public int counter = 0;
  public int aboveFive = 0;
  public int divisibleThree = 0;

  public int randNumb = 0;

  Random randNum = new Random();

  public void FirstCountdown()
  {
    while (counter <= 20)
    {
      randNumb = randNum.Next(0, 10);
      Console.Write($"Numeros gerados : {randNumb}");

      if (randNumb > 5)
      {
        aboveFive += 1;
      }
      else if (randNumb % 5 == 0)
      {
        divisibleThree += 1;
      }
      
    }
    Console.Write($"Numeros acima de 5 : {aboveFive}");
    Console.Write($"Numeros divisiveis por 3 : {divisibleThree}");
  }
}

