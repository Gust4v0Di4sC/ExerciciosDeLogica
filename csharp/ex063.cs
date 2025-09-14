// Crie um programa usando a estrutura “faça enquanto” que leia vários números.
// A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
// tela:
// a) O somatório entre todos os valores
// b) Qual foi o menor valor digitado
// c) A média entre todos os valores
// d) Quantos valores são pares

class Ex063
{
  public int inputNumber = 0;
  public int countNumbers = 0;

  public int totalNumbers = 0;

  public int minorValue = 999;
  public int avgValues = 0;

  public int evenValues = 0;

  public void FirstCountdown()
  {

    do
    {
      Console.WriteLine("Digite um numero: ");
      inputNumber = Convert.ToInt32(Console.ReadLine());

      totalNumbers += 1;
      countNumbers += inputNumber;

      if (inputNumber < minorValue)
      {
        minorValue = inputNumber;
      }

      avgValues = countNumbers / totalNumbers;

      if (inputNumber % 2 == 0)
      {
        evenValues += 1;
      }


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
    } while (true);

    Console.WriteLine($"O somatório entre todos os valores {countNumbers}");
    Console.WriteLine($"Qual foi o menor valor digitado {minorValue}");
    Console.WriteLine($"A média entre todos os valores {avgValues}");
    Console.WriteLine($"Quantos valores são pares {evenValues}");
  }
}

